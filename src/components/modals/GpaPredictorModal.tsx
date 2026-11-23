import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { 
  calculateBestPossibleGrade, 
  calculateEndSemRequirement, 
  inferCourseCredits, 
  hasEndSemExam,
  formatCourseTitle,
  GRADE_POINTS,
  GRADES_ORDER 
} from '../../api/grades';
import { X, RotateCcw } from 'lucide-react';

interface GpaPredictorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GpaPredictorModal: React.FC<GpaPredictorModalProps> = ({ isOpen, onClose }) => {
  const { user } = useSession();

  // Initial grades mapped from best possible scenario based on continuous internals
  const initialCourseGrades = useMemo(() => {
    if (!user || !Array.isArray(user.marks)) return {};
    const map: Record<string, { credit: number; grade: string; defaultGrade: string; hasEndSem: boolean; score: number; maxScore: number }> = {};

    user.marks.forEach((m) => {
      // Fetch credit for each course from source / curriculum mapping
      const credit = inferCourseCredits(m.courseCode, m.credit);

      const totalScore = typeof m.totalScore === 'number'
        ? m.totalScore
        : (m.marks?.reduce((acc, c) => acc + (c.score || 0), 0) ?? 0);
      const maxScore = typeof m.maxTotalScore === 'number'
        ? m.maxTotalScore
        : (m.marks?.reduce((acc, c) => acc + (c.maxScore || 0), 0) ?? 100);

      const hasEndSem = hasEndSemExam(m.courseCode, maxScore);
      const best = calculateBestPossibleGrade(m.courseCode, totalScore, maxScore);

      map[m.courseCode] = {
        credit,
        grade: best.grade,
        defaultGrade: best.grade,
        hasEndSem,
        score: totalScore,
        maxScore
      };
    });

    return map;
  }, [user]);

  const [courseState, setCourseState] = useState<Record<string, { credit: number; grade: string; defaultGrade: string; hasEndSem: boolean; score: number; maxScore: number }>>({});
  const [activePacing, setActivePacing] = useState<'best-possible' | 'steady' | 'ambitious' | 'custom'>('best-possible');

  // Synchronize initial state when modal opens
  useEffect(() => {
    if (isOpen && Object.keys(initialCourseGrades).length > 0) {
      setCourseState(initialCourseGrades);
      setActivePacing('best-possible');
    }
  }, [isOpen, initialCourseGrades]);

  // Active state fallback
  const currentCourses = Object.keys(courseState).length > 0 ? courseState : initialCourseGrades;

  // Calculate live credit-weighted GPA
  const { gpa } = useMemo(() => {
    let earnedPoints = 0;
    let creditsSum = 0;

    Object.entries(currentCourses).forEach(([_, data]) => {
      if (data && typeof data.credit === 'number' && data.credit > 0) {
        const pts = GRADE_POINTS[data.grade] ?? 0;
        earnedPoints += data.credit * pts;
        creditsSum += data.credit;
      }
    });

    const calculatedGpa = creditsSum > 0 ? Math.round((earnedPoints / creditsSum) * 100) / 100 : 0;
    return { gpa: calculatedGpa };
  }, [currentCourses]);

  const handleGradeChange = (courseCode: string, grade: string) => {
    setCourseState((prev) => {
      const base = prev[courseCode] || currentCourses[courseCode] || {
        credit: inferCourseCredits(courseCode),
        grade: 'A',
        defaultGrade: 'A',
        hasEndSem: true,
        score: 0,
        maxScore: 60
      };
      return {
        ...prev,
        [courseCode]: {
          ...base,
          grade
        }
      };
    });
    setActivePacing('custom');
  };

  // Pacing presets
  const applyPacing = (pacing: 'best-possible' | 'steady' | 'ambitious') => {
    setActivePacing(pacing);
    const updated: Record<string, { credit: number; grade: string; defaultGrade: string; hasEndSem: boolean; score: number; maxScore: number }> = {};

    Object.entries(initialCourseGrades).forEach(([code, data]) => {
      let g = data.defaultGrade;

      if (pacing === 'best-possible') {
        g = data.defaultGrade;
      } else if (pacing === 'steady') {
        // Safe 1-tier buffer or keep best achievable
        if (g === 'O') g = 'A+';
        else if (g === 'A+') g = 'A';
        else if (g === 'A') g = 'B+';
        else if (g === 'B+') g = 'B';
      } else if (pacing === 'ambitious') {
        // Push all to O if achievable, otherwise best achievable
        const reqForO = calculateEndSemRequirement(data.score, 'O', data.hasEndSem);
        g = reqForO.isAchievable ? 'O' : data.defaultGrade;
      }

      updated[code] = {
        ...data,
        grade: g
      };
    });

    setCourseState(updated);
  };

  const handleReset = () => {
    applyPacing('best-possible');
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && user && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-[9999]"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bento-card p-6 sm:p-8 border border-black/10 dark:border-white/10 shadow-2xl rounded-3xl z-[10000] max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
                  gpa predictor & end-sem targets
                </h2>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] transition-colors cursor-pointer"
                aria-label="close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Core GPA Display Card */}
            <div className="my-5 p-5 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase block">
                  projected semester gpa
                </span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums text-[#111111] dark:text-[#FAFAFA]">
                    {gpa.toFixed(2)}
                  </span>
                  <span className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                    / 10.00
                  </span>
                </div>
              </div>

              {/* Pacing Trajectory Buttons */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase block">
                  pacing presets (default: best possible)
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => applyPacing('best-possible')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-medium lowercase transition-all cursor-pointer ${activePacing === 'best-possible'
                      ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                      : 'bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                      }`}
                  >
                    best possible
                  </button>
                  <button
                    onClick={() => applyPacing('steady')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-medium lowercase transition-all cursor-pointer ${activePacing === 'steady'
                      ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                      : 'bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                      }`}
                  >
                    steady push
                  </button>
                  <button
                    onClick={() => applyPacing('ambitious')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-medium lowercase transition-all cursor-pointer ${activePacing === 'ambitious'
                      ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                      : 'bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                      }`}
                  >
                    ambitious (o targets)
                  </button>
                </div>
              </div>
            </div>

            {/* Courses List (Scrollable) */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 min-h-[220px]">
              {(user.marks || []).map((m) => {
                const current = currentCourses[m.courseCode] || {
                  credit: inferCourseCredits(m.courseCode),
                  grade: 'A',
                  defaultGrade: 'A',
                  hasEndSem: true,
                  score: 0,
                  maxScore: 60
                };

                const score = typeof m.totalScore === 'number'
                  ? m.totalScore
                  : (m.marks?.reduce((acc, c) => acc + (c.score || 0), 0) ?? 0);
                const max = typeof m.maxTotalScore === 'number'
                  ? m.maxTotalScore
                  : (m.marks?.reduce((acc, c) => acc + (c.maxScore || 0), 0) ?? 100);

                const hasEndSem = hasEndSemExam(m.courseCode, max);
                // Calculate dynamic requirement out of 75 marks for the user's selected grade
                const req75 = calculateEndSemRequirement(score, current.grade, hasEndSem);

                return (
                  <div
                    key={m.courseCode}
                    className="p-3.5 sm:p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col gap-2.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[#111111] dark:text-[#FAFAFA]">
                            {m.courseCode}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                            {current.credit} credits
                          </span>
                          <span className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA]">
                            internals {score} / {max}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#111111] dark:text-[#FAFAFA] lowercase truncate mt-1">
                          {formatCourseTitle(m.courseTitle)}
                        </div>
                      </div>

                      {/* Grade Selector Pills */}
                      <div className="flex items-center space-x-1 shrink-0">
                        {GRADES_ORDER.map((g) => {
                          const isSelected = current.grade === g;
                          return (
                            <button
                              key={g}
                              type="button"
                              onClick={() => handleGradeChange(m.courseCode, g)}
                              className={`px-2 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${isSelected
                                ? ['O', 'A+'].includes(g)
                                  ? 'bg-emerald-500 text-white shadow-xs'
                                  : ['A', 'B+'].includes(g)
                                    ? 'bg-indigo-500 text-white shadow-xs'
                                    : g === 'B'
                                      ? 'bg-amber-500 text-white shadow-xs'
                                      : 'bg-rose-500 text-white shadow-xs'
                                : 'bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                                }`}
                            >
                              {g}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* End-Semester 75 Marks Requirement Status Bar */}
                    <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                          requirement for grade {current.grade}:
                        </span>
                        {hasEndSem ? (
                          !req75.isAchievable ? (
                            <span className="text-[11px] font-medium text-rose-500 lowercase">
                              {req75.displayText}
                            </span>
                          ) : req75.isAlreadySecured ? (
                            <span className="text-[11px] font-medium text-emerald-500 dark:text-emerald-400 lowercase">
                              {req75.displayText}
                            </span>
                          ) : (
                            <span className="text-[11px] font-medium text-[#111111] dark:text-[#FAFAFA] lowercase">
                              {req75.displayText}
                            </span>
                          )
                        ) : (
                          <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                            100% internal (no end sem exam)
                          </span>
                        )}
                      </div>

                      {hasEndSem && req75.isAchievable && !req75.isAlreadySecured && (
                        <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase hidden sm:inline">
                          ({req75.marksNeededFromEndSem40}/40 converted)
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Controls */}
            <div className="pt-4 mt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
              <button
                onClick={handleReset}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-2xl bg-black/5 dark:bg-white/5 text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors lowercase cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>reset to best possible</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 rounded-2xl bg-[#111111] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#09090B] text-xs font-bold lowercase hover:opacity-90 transition-opacity cursor-pointer"
              >
                apply & close
              </button>
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
