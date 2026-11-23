import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AttendanceItem, TimetableResponse } from '../../api/types';
import { 
  calculatePrediction, 
  getClassesForDateRange, 
  ClassPredictionItem 
} from '../../api/predictor';
import { formatCourseTitle } from '../../api/grades';
import { 
  X, 
  Calendar, 
  RotateCcw, 
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Layers,
  Check,
  Ban
} from 'lucide-react';

interface AttendancePredictorModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: AttendanceItem[];
  timetable: TimetableResponse | null;
  onApplyPrediction?: (predictedCourses: { courseCode: string; percent: number; marginLabel: string; status: 'safe' | 'borderline' | 'danger' }[] | null) => void;
}

export const AttendancePredictorModal: React.FC<AttendancePredictorModalProps> = ({
  isOpen,
  onClose,
  courses,
  timetable,
  onApplyPrediction
}) => {
  const [activeMode, setActiveMode] = useState<'dates' | 'courses'>('dates');
  
  // Date range defaults: upcoming 5 days in current semester
  const [startDate, setStartDate] = useState('2026-11-23');
  const [endDate, setEndDate] = useState('2026-11-27');

  // Prediction items state: { [classId]: 'attend' | 'miss' }
  const [classActions, setClassActions] = useState<Record<string, 'attend' | 'miss'>>({});
  
  // Course-specific prediction counts: { [courseCode]: { attend: number; miss: number } }
  const [courseCounters, setCourseCounters] = useState<Record<string, { attend: number; miss: number }>>({});

  // Resolve schedule for date range
  const dateRangeSchedule = useMemo(() => {
    if (!timetable || !startDate || !endDate) return [];
    return getClassesForDateRange(startDate, endDate, timetable);
  }, [startDate, endDate, timetable]);

  // Compute flattened list of prediction items
  const predictionItems: ClassPredictionItem[] = useMemo(() => {
    if (activeMode === 'dates') {
      const items: ClassPredictionItem[] = [];
      dateRangeSchedule.forEach((day) => {
        day.slots.forEach((slot, slotIdx) => {
          const classKey = `${day.date}-${slot.slotName}-${slot.courseCode}-${slotIdx}`;
          const action = classActions[classKey] || 'attend';
          items.push({
            courseCode: slot.courseCode,
            courseTitle: slot.courseTitle,
            action,
            date: day.date,
            slot: slot.slotName,
            timeRange: slot.timeRange
          });
        });
      });
      return items;
    } else {
      // Course-by-course mode
      const items: ClassPredictionItem[] = [];
      Object.entries(courseCounters).forEach(([code, counts]) => {
        const course = courses.find(c => c.courseCode === code);
        const title = course?.courseTitle || code;
        for (let i = 0; i < counts.attend; i++) {
          items.push({ courseCode: code, courseTitle: title, action: 'attend' });
        }
        for (let i = 0; i < counts.miss; i++) {
          items.push({ courseCode: code, courseTitle: title, action: 'miss' });
        }
      });
      return items;
    }
  }, [activeMode, dateRangeSchedule, classActions, courseCounters, courses]);

  // Calculate prediction result
  const predictionResult = useMemo(() => {
    return calculatePrediction(courses, predictionItems);
  }, [courses, predictionItems]);

  const handleToggleClassAction = (classKey: string) => {
    setClassActions(prev => ({
      ...prev,
      [classKey]: prev[classKey] === 'miss' ? 'attend' : 'miss'
    }));
  };

  const handleBulkAction = (action: 'attend' | 'miss') => {
    const updated: Record<string, 'attend' | 'miss'> = {};
    dateRangeSchedule.forEach(day => {
      day.slots.forEach((slot, slotIdx) => {
        const classKey = `${day.date}-${slot.slotName}-${slot.courseCode}-${slotIdx}`;
        updated[classKey] = action;
      });
    });
    setClassActions(updated);
  };

  const handleAdjustCourseCounter = (courseCode: string, type: 'attend' | 'miss', delta: number) => {
    setCourseCounters(prev => {
      const current = prev[courseCode] || { attend: 0, miss: 0 };
      const nextVal = Math.max(0, current[type] + delta);
      return {
        ...prev,
        [courseCode]: {
          ...current,
          [type]: nextVal
        }
      };
    });
  };

  const handleReset = () => {
    setClassActions({});
    setCourseCounters({});
    if (onApplyPrediction) onApplyPrediction(null);
  };

  const handleApply = () => {
    if (onApplyPrediction) {
      onApplyPrediction(predictionResult.courseBreakdown.map(c => ({
        courseCode: c.courseCode,
        percent: c.predictedPercent,
        marginLabel: c.marginLabel,
        status: c.status
      })));
    }
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden relative z-[10000]"
          >
          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs">
                ±
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                  attendance predictor & intelligence
                </h2>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                  forecast how attending or missing future classes impacts your 75% margin
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="close predictor"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {/* Live Impact Dashboard Banner */}
            <div className="p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
                    current overall
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#111111] dark:text-[#FAFAFA] tabular-nums tracking-tight">
                    {predictionResult.currentOverallPercent}%
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-[#71717A] dark:text-[#A1A1AA]" />

                <div>
                  <div className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
                    predicted overall
                  </div>
                  <div className={`text-2xl sm:text-3xl font-extrabold tabular-nums tracking-tight ${
                    predictionResult.status === 'danger'
                      ? 'text-rose-500'
                      : predictionResult.status === 'borderline'
                      ? 'text-amber-500'
                      : 'text-emerald-400'
                  }`}>
                    {predictionResult.predictedOverallPercent}%
                  </div>
                </div>

                <div className="pt-3 sm:pt-0">
                  <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold tabular-nums ${
                    predictionResult.deltaPercent >= 0 
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-rose-500/15 text-rose-500 border border-rose-500/20'
                  }`}>
                    {predictionResult.deltaPercent >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    <span>{predictionResult.deltaPercent >= 0 ? `+${predictionResult.deltaPercent}%` : `${predictionResult.deltaPercent}%`}</span>
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                  {predictionResult.marginLabel}
                </div>
                <div className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                  simulated {predictionItems.length} future classes
                </div>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center space-x-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
              <button
                onClick={() => setActiveMode('dates')}
                className={`px-3.5 py-2 rounded-xl text-xs lowercase flex items-center space-x-1.5 transition-colors ${
                  activeMode === 'dates'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                    : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] font-medium'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>forecast by date range</span>
              </button>
              <button
                onClick={() => setActiveMode('courses')}
                className={`px-3.5 py-2 rounded-xl text-xs lowercase flex items-center space-x-1.5 transition-colors ${
                  activeMode === 'courses'
                    ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                    : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] font-medium'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>forecast by course counter</span>
              </button>
            </div>

            {/* Mode A: Date Range Selector */}
            {activeMode === 'dates' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <div>
                      <label className="block text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase mb-1">
                        start date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-xs text-[#111111] dark:text-[#FAFAFA]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase mb-1">
                        end date
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-xs text-[#111111] dark:text-[#FAFAFA]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 self-end">
                    <button
                      onClick={() => handleBulkAction('attend')}
                      className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs lowercase flex items-center space-x-1"
                    >
                      <Check className="w-3 h-3" />
                      <span>attend all</span>
                    </button>
                    <button
                      onClick={() => handleBulkAction('miss')}
                      className="px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 text-xs lowercase flex items-center space-x-1"
                    >
                      <Ban className="w-3 h-3" />
                      <span>skip/bunk all</span>
                    </button>
                  </div>
                </div>

                {/* Date by date schedule listing */}
                <div className="space-y-3">
                  {dateRangeSchedule.map((day) => (
                    <div 
                      key={day.date}
                      className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]"
                    >
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.04] dark:border-white/[0.04]">
                        <span className="text-xs font-bold text-[#111111] dark:text-[#FAFAFA]">
                          {day.date}
                        </span>
                        <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                          {day.isWorkingDay ? `cycle day order ${day.dayOrder}` : `${day.holidayName || 'holiday'}`}
                        </span>
                      </div>

                      {day.slots.length === 0 ? (
                        <div className="py-2 text-center text-[11px] text-[#71717A] dark:text-[#52525B] lowercase">
                          no scheduled lectures on this day
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {day.slots.map((slot, sIdx) => {
                            const classKey = `${day.date}-${slot.slotName}-${slot.courseCode}-${sIdx}`;
                            const action = classActions[classKey] || 'attend';
                            const isAttending = action === 'attend';

                            return (
                              <div
                                key={classKey}
                                onClick={() => handleToggleClassAction(classKey)}
                                className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                                  isAttending
                                    ? 'bg-emerald-500/[0.06] border-emerald-500/25'
                                    : 'bg-rose-500/[0.06] border-rose-500/25'
                                }`}
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="font-bold text-xs truncate lowercase text-[#111111] dark:text-[#FAFAFA]">
                                    {formatCourseTitle(slot.courseTitle)}
                                  </div>
                                  <div className="text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                                    {slot.courseCode} • {slot.timeRange}
                                  </div>
                                </div>

                                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold lowercase shrink-0 ${
                                  isAttending 
                                    ? 'bg-emerald-500/20 text-emerald-400' 
                                    : 'bg-rose-500/20 text-rose-500'
                                }`}>
                                  {isAttending ? 'attending' : 'skipping'}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mode B: Course Counters */}
            {activeMode === 'courses' && (
              <div className="space-y-3">
                {courses.map(course => {
                  const counts = courseCounters[course.courseCode] || { attend: 0, miss: 0 };
                  const courseResult = predictionResult.courseBreakdown.find(c => c.courseCode === course.courseCode);

                  return (
                    <div
                      key={course.courseCode}
                      className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-xs truncate lowercase text-[#111111] dark:text-[#FAFAFA]">
                          {formatCourseTitle(course.courseTitle)}
                        </div>
                        <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] flex items-center space-x-2 mt-0.5">
                          <span>{course.courseCode}</span>
                          <span>•</span>
                          <span>current: {course.attendancePercent}%</span>
                          <span>→</span>
                          <span className={`font-bold ${
                            courseResult?.status === 'danger' ? 'text-rose-500' : 'text-emerald-400'
                          }`}>
                            predicted: {courseResult?.predictedPercent}%
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 shrink-0">
                        {/* Attend Counter */}
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[10px] text-emerald-400 lowercase">attend:</span>
                          <button
                            onClick={() => handleAdjustCourseCounter(course.courseCode, 'attend', -1)}
                            className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 flex items-center justify-center text-xs"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold">{counts.attend}</span>
                          <button
                            onClick={() => handleAdjustCourseCounter(course.courseCode, 'attend', 1)}
                            className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>

                        {/* Miss Counter */}
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[10px] text-rose-500 lowercase">miss:</span>
                          <button
                            onClick={() => handleAdjustCourseCounter(course.courseCode, 'miss', -1)}
                            className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 flex items-center justify-center text-xs"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold">{counts.miss}</span>
                          <button
                            onClick={() => handleAdjustCourseCounter(course.courseCode, 'miss', 1)}
                            className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Per-Course Prediction Breakdown Table */}
            <div>
              <h3 className="text-xs font-bold text-[#71717A] dark:text-[#A1A1AA] lowercase mb-2">
                detailed predicted breakdown by subject
              </h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {predictionResult.courseBreakdown.map(c => (
                  <div
                    key={c.courseCode}
                    className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs"
                  >
                    <div className="min-w-0 pr-3">
                      <div className="font-bold truncate lowercase text-[#111111] dark:text-[#FAFAFA]">
                        {c.courseTitle}
                      </div>
                      <div className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] flex items-center space-x-2 mt-0.5">
                        <span>{c.courseCode}</span>
                        <span>•</span>
                        <span>{c.predictedPresent}/{c.predictedConducted} hrs</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-center space-x-1.5 justify-end">
                        <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] line-through">
                          {c.currentPercent}%
                        </span>
                        <span className={`font-bold text-xs ${
                          c.status === 'danger' 
                            ? 'text-rose-500' 
                            : c.status === 'borderline' 
                            ? 'text-amber-500' 
                            : 'text-emerald-400'
                        }`}>
                          {c.predictedPercent}%
                        </span>
                      </div>
                      <div className={`text-[10px] lowercase mt-0.5 ${
                        c.status === 'danger' ? 'text-rose-500' : 'text-[#71717A] dark:text-[#A1A1AA]'
                      }`}>
                        {c.marginLabel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Controls */}
          <div className="p-4 sm:p-5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] flex items-center space-x-1.5 transition-colors font-medium lowercase"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>reset</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium lowercase"
              >
                close
              </button>
              <button
                onClick={handleApply}
                className="px-5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs lowercase hover:opacity-90 transition-opacity"
              >
                apply forecast
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }
  return modalContent;
};
