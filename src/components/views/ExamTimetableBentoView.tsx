import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { OFFICIAL_EXAM_TIMETABLE } from '../../data/examTimetable';
import { ExamTimetableItem } from '../../api/types';
import { Clock, AlertCircle, Edit3, X, RotateCcw } from 'lucide-react';
import {
  InteractiveBentoCard,
  StaggerContainer,
  StaggerItem,
  SpringPress,
} from '../common/motion';

const STORAGE_KEY = 'academia_plus_exam_schedule_v3';

export const ExamTimetableBentoView: React.FC = () => {
  const { user } = useSession();
  const shouldReduceMotion = useReducedMotion();
  const [exams, setExams] = useState<ExamTimetableItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return OFFICIAL_EXAM_TIMETABLE.exams;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingExams, setEditingExams] = useState<ExamTimetableItem[]>(exams);

  // Sync state if localStorage changes
  useEffect(() => {
    setEditingExams(exams);
  }, [exams]);

  // Strictly filter only subjects that have valid scheduled examination dates and sort chronologically
  const validExams = exams
    .filter(
      (ex) => Boolean(ex.examDate && ex.examDate.trim() !== '' && ex.examDate !== 'TBD' && ex.examDate !== 'N/A' && ex.examDate !== '- -')
    )
    .sort((a, b) => new Date(a.examDate).getTime() - new Date(b.examDate).getTime());

  // Next upcoming exam (first chronologically)
  const nextExam = validExams[0];

  const handleSaveEditor = () => {
    setExams(editingExams);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(editingExams));
    } catch {
      // ignore
    }
    setIsEditorOpen(false);
  };

  const handleResetDefaults = () => {
    setEditingExams(OFFICIAL_EXAM_TIMETABLE.exams);
    setExams(OFFICIAL_EXAM_TIMETABLE.exams);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setIsEditorOpen(false);
  };

  const handleDateChange = (courseCode: string, date: string) => {
    setEditingExams(prev => prev.map(ex => {
      if (ex.courseCode !== courseCode) return ex;
      return { ...ex, examDate: date };
    }));
  };

  const handleSessionChange = (courseCode: string, session: 'FN' | 'AN') => {
    setEditingExams(prev => prev.map(ex => {
      if (ex.courseCode !== courseCode) return ex;
      const timeRange = session === 'FN' ? '10:00 AM – 01:00 PM' : '02:00 PM – 05:00 PM';
      return { ...ex, session, timeRange };
    }));
  };

  const handleRemoveCourse = (courseCode: string) => {
    setEditingExams(prev => prev.filter(ex => ex.courseCode !== courseCode));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
            exam timetable
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
            official semester 3 end semester schedule • confirmed dates only
          </p>
        </div>

        {/* Date / Subject Sync Button */}
        <div className="flex items-center space-x-2">
          <SpringPress
            onClick={() => setIsEditorOpen(true)}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors lowercase cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>edit / sync dates</span>
          </SpringPress>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(180px,auto)] [grid-auto-flow:dense]">

        {/* 1. Next Upcoming Exam Hero Tile (col-span-12 lg:col-span-7) */}
        {nextExam && (
          <InteractiveBentoCard className="col-span-12 lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-amber-500/20 glow-amber">
            <div className="flex items-center justify-between gap-2 z-10">
              <span className="text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA] lowercase">
                next examination
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/20 text-xs font-bold lowercase">
                {nextExam.examDate}
              </span>
            </div>

            <div className="my-6 z-10">
              <div className="flex items-center space-x-2 text-xs text-amber-500 dark:text-amber-400 font-bold mb-1.5">
                <span>{nextExam.courseCode}</span>
                <span>•</span>
                <span>slot {nextExam.slot}</span>
                <span>•</span>
                <span className="lowercase">{nextExam.examType}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#FAFAFA] lowercase">
                {nextExam.courseTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-xs z-10">
              <div>
                <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase block">date & day</span>
                <span className="font-bold text-[#111111] dark:text-[#FAFAFA]">{nextExam.examDate} ({nextExam.dayOfWeek.slice(0, 3).toLowerCase()})</span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase block">session timing</span>
                <span className="font-bold text-[#111111] dark:text-[#FAFAFA]">{nextExam.session} • {nextExam.timeRange}</span>
              </div>
            </div>
          </InteractiveBentoCard>
        )}

        {/* 2. Candidate Information (col-span-12 lg:col-span-5) */}
        <InteractiveBentoCard className="col-span-12 lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA] lowercase block">
              student credentials
            </span>
            <h3 className="text-lg font-bold text-[#111111] dark:text-[#FAFAFA] lowercase mt-1">
              examination candidate
            </h3>
            <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1.5 leading-relaxed">
              all enrolled courses cleared by controller of examinations with attendance above condonation cutoff.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">candidate name</span>
              <span className="font-bold text-[#111111] dark:text-[#FAFAFA] lowercase">{user?.profile?.name?.toLowerCase() || 'student'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">register number</span>
              <span className="font-bold text-[#111111] dark:text-[#FAFAFA]">{user?.profile?.regNo || 'student id'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">examination center</span>
              <span className="font-bold text-emerald-400 lowercase">srmist, kattankulathur</span>
            </div>
          </div>
        </InteractiveBentoCard>

        {/* 3. Chronological Exam Schedule Cards (col-span-12) */}
        <InteractiveBentoCard className="col-span-12 p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
            <div>
              <h2 className="text-base sm:text-lg font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                examination schedule ({validExams.length})
              </h2>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                official university examination sequence for odd semester 2026
              </p>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {validExams.map((ex) => (
              <StaggerItem key={ex.courseCode}>
                <InteractiveBentoCard
                  className="p-5 flex flex-col justify-between space-y-4 hover:border-black/20 dark:hover:border-white/20 transition-all h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 text-[11px] font-bold text-[#111111] dark:text-[#FAFAFA]">
                        {ex.courseCode}
                      </span>
                      <span className="text-xs font-bold text-emerald-400 tabular-nums">
                        {ex.examDate}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold lowercase text-[#111111] dark:text-[#FAFAFA] mt-2.5 leading-snug">
                      {ex.courseTitle}
                    </h3>

                    <div className="flex items-center space-x-2 mt-2 text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
                      <span>slot {ex.slot}</span>
                      <span>•</span>
                      <span className="lowercase">{ex.examType}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs">
                    <span className="text-[#71717A] dark:text-[#A1A1AA] flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{ex.session} session</span>
                    </span>
                    <span className="text-[#111111] dark:text-[#FAFAFA] font-bold">{ex.timeRange}</span>
                  </div>
                </InteractiveBentoCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </InteractiveBentoCard>

        {/* 4. University Examination Rules Tile (col-span-12) */}
        <InteractiveBentoCard className="col-span-12 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#71717A] dark:text-[#A1A1AA]">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="lowercase">reporting cutoff: candidates must report 30 minutes prior to session start (01:30 pm for an session).</span>
          </div>
          <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase shrink-0">non-programmable calculators permitted</span>
        </InteractiveBentoCard>

      </div>

      {/* Inline Date & Course Editor Modal (Mounted cleanly via Portal to document.body) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isEditorOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsEditorOpen(false)}
                className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-[100]"
              />

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
                transition={shouldReduceMotion ? { duration: 0.05 } : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl bento-card p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#131316] border border-black/10 dark:border-white/10 shadow-2xl rounded-3xl z-[101] max-h-[90vh] flex flex-col"
              >
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
                  <div>
                    <h2 className="text-xl font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                      edit / sync exam schedule
                    </h2>
                    <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                      enter the exact dates from your official exam timetable
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditorOpen(false)}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-1 py-4">
                  {editingExams.map((ex) => (
                    <div
                      key={ex.courseCode}
                      className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-black/5 dark:bg-white/5 text-[#111111] dark:text-[#FAFAFA]">
                            {ex.courseCode}
                          </span>
                          <span className="text-xs font-semibold text-[#111111] dark:text-[#FAFAFA] lowercase truncate">
                            {ex.courseTitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <input
                          type="date"
                          value={ex.examDate}
                          onChange={(e) => handleDateChange(ex.courseCode, e.target.value)}
                          className="px-2.5 py-1 rounded-xl bg-black/5 dark:bg-white/5 text-xs text-[#111111] dark:text-[#FAFAFA] border border-black/[0.06] dark:border-white/[0.06] focus:outline-none"
                        />
                        <select
                          value={ex.session}
                          onChange={(e) => handleSessionChange(ex.courseCode, e.target.value as 'FN' | 'AN')}
                          className="px-2 py-1 rounded-xl bg-black/5 dark:bg-white/5 text-xs font-bold text-[#111111] dark:text-[#FAFAFA] border border-black/[0.06] dark:border-white/[0.06] focus:outline-none"
                        >
                          <option value="AN">AN (02-05)</option>
                          <option value="FN">FN (10-01)</option>
                        </select>
                        <button
                          onClick={() => handleRemoveCourse(ex.courseCode)}
                          title="remove unscheduled subject"
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                  <SpringPress
                    onClick={handleResetDefaults}
                    scaleHover={1.02}
                    scaleTap={0.97}
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-2xl bg-black/5 dark:bg-white/5 text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors lowercase cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>reset to defaults</span>
                  </SpringPress>

                  <div className="flex items-center space-x-2">
                    <SpringPress
                      onClick={() => setIsEditorOpen(false)}
                      scaleHover={1.02}
                      scaleTap={0.97}
                      className="px-4 py-2 rounded-2xl text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] lowercase transition-colors cursor-pointer"
                    >
                      <span>cancel</span>
                    </SpringPress>
                    <SpringPress
                      onClick={handleSaveEditor}
                      scaleHover={1.03}
                      scaleTap={0.96}
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-accent-text)'
                      }}
                      className="px-5 py-2 rounded-2xl text-xs font-bold lowercase hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                    >
                      <span>save changes</span>
                    </SpringPress>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};
