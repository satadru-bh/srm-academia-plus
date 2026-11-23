import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { 
  calculateBestPossibleGrade, 
  inferCourseCredits,
  formatCourseTitle
} from '../../api/grades';
import { Search, ChevronDown, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { GpaPredictorModal } from '../modals/GpaPredictorModal';
import {
  InteractiveBentoCard,
  StaggerContainer,
  StaggerItem,
  AnimatedNumber,
  SpringPress,
} from '../common/motion';

export const MarksBentoView: React.FC = () => {
  const { user, focusedCourseCode, setFocusedCourseCode } = useSession();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});
  const [viewModes, setViewModes] = useState<Record<string, 'bars' | 'chart' | 'trend'>>({});
  const [isGpaPredictorOpen, setIsGpaPredictorOpen] = useState(false);

  useEffect(() => {
    if (focusedCourseCode) {
      setExpandedCourses((prev) => ({ ...prev, [focusedCourseCode]: true }));
      const timer = setTimeout(() => {
        const el = document.getElementById(`marks-card-${focusedCourseCode}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        setFocusedCourseCode(null);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [focusedCourseCode, setFocusedCourseCode]);

  if (!user) return null;

  const toggleExpand = (courseCode: string) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseCode]: !prev[courseCode]
    }));
  };

  const setMode = (courseCode: string, mode: 'bars' | 'trend') => {
    setViewModes((prev) => ({
      ...prev,
      [courseCode]: mode
    }));
  };

  const q = searchTerm.toLowerCase();
  const filteredMarks = user.marks.filter((m) => {
    const title = (m.courseTitle || '').toLowerCase();
    const code = (m.courseCode || '').toLowerCase();
    return title.includes(q) || code.includes(q);
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
            internal marks & projected grades
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
            best possible grades calibrated against srm's 100-mark scale (60 internal + 40 end sem)
          </p>
        </div>

        {/* Toolbar: GPA Predictor & Search */}
        <div className="flex flex-wrap items-center gap-2.5">
          <SpringPress
            onClick={() => setIsGpaPredictorOpen(true)}
            className="flex items-center justify-center px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-xs lowercase shadow-sm hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
          >
            <span>gpa predictor</span>
          </SpringPress>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="filter evaluations..."
              className="w-full pl-9 pr-4 py-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#131316] border border-black/[0.06] dark:border-white/[0.06] text-xs text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none focus:border-white/20 transition-all lowercase"
            />
          </div>
        </div>
      </div>

      {/* Dynamic Bento Grid - items-start ensures expanding one card expands ONLY that card */}
      <StaggerContainer className="grid grid-cols-12 gap-5 items-start">
        {filteredMarks.map((course) => {
          const totalScore = course.totalScore || 0;
          const maxTotalScore = course.maxTotalScore || 100;
          // Automatically fetch course credits from source
          const credits = inferCourseCredits(course.courseCode, course.credit);
          // Calculate best possible scenario grade based on 100-mark SRM scale
          const bestGrade = calculateBestPossibleGrade(course.courseCode, totalScore, maxTotalScore);
          const req75 = bestGrade.requirement75ForBestGrade;
          const isExpanded = Boolean(expandedCourses[course.courseCode]);

          const colSpanClass = 'col-span-12 sm:col-span-6 lg:col-span-4';

          return (
            <StaggerItem
              key={course.courseCode}
              layout="position"
              className={colSpanClass}
            >
              <InteractiveBentoCard
                id={`marks-card-${course.courseCode}`}
                className={`p-6 flex flex-col relative overflow-hidden transition-all duration-300 ${
                  focusedCourseCode === course.courseCode
                    ? 'ring-2 ring-black dark:ring-white ring-offset-2 dark:ring-offset-black'
                    : ''
                } ${
                  bestGrade.status === 'danger'
                    ? 'border-rose-500/20 glow-rose'
                    : bestGrade.status === 'borderline'
                    ? 'border-amber-500/20 glow-amber'
                    : ''
                }`}
              >
                <div>
                  {/* Header row: Course Code, Auto Credits & Projected Grade Chip */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 text-[#111111] dark:text-[#FAFAFA] font-bold">
                        {course.courseCode}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                        {credits} credits
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold cursor-default select-none ${
                          bestGrade.status === 'outstanding' || bestGrade.status === 'safe'
                            ? 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20'
                            : bestGrade.status === 'borderline'
                            ? 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/20'
                            : 'bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        grade {bestGrade.grade}
                      </motion.span>
                    </div>
                  </div>

                  {/* Course Title with uniform height */}
                  <div className="min-h-[2.5rem] flex items-center mb-3">
                    <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase line-clamp-2">
                      {formatCourseTitle(course.courseTitle)}
                    </h2>
                  </div>

                  {/* Score Summary with AnimatedNumber */}
                  <div className="mt-4 flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-1.5 tabular-nums">
                      <AnimatedNumber
                        value={totalScore}
                        decimals={0}
                        className="text-3xl font-bold text-[#111111] dark:text-[#FAFAFA]"
                      />
                      <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] flex items-center space-x-0.5">
                        <span>/</span>
                        <AnimatedNumber value={maxTotalScore} decimals={0} />
                        <span>internal</span>
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-[#111111] dark:text-[#FAFAFA] tabular-nums block">
                        best: <AnimatedNumber value={bestGrade.bestPossibleTotal} decimals={0} /> / 100
                      </span>
                    </div>
                  </div>

                  {/* Single Sleek Overall Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden mt-2">
                    <motion.div
                      className={`h-full rounded-full ${
                        bestGrade.status === 'outstanding' || bestGrade.status === 'safe'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          : bestGrade.status === 'borderline'
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                          : 'bg-gradient-to-r from-rose-500 to-pink-400'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, Math.max(0, bestGrade.bestPossibleTotal))}%` }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  </div>

                  {/* End-Semester 75-mark Requirement Banner */}
                  {bestGrade.hasEndSem ? (
                    <div className="mt-2.5 p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                        for grade {bestGrade.grade}:
                      </span>
                      <span className="font-bold text-indigo-500 dark:text-indigo-400 text-[11px] lowercase">
                        {req75.displayText}
                      </span>
                    </div>
                  ) : (
                    <div className="mt-2.5 p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                        evaluation type:
                      </span>
                      <span className="text-[#71717A] dark:text-[#A1A1AA] text-[11px] lowercase">
                        100% internal assessments
                      </span>
                    </div>
                  )}
                </div>

                {/* Collapsible Details Section pinned to bottom for uniform card heights */}
                <div className="mt-auto pt-4">
                  {/* Accordion Toggle Button with tactile spring feedback */}
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    onClick={() => toggleExpand(course.courseCode)}
                    className="w-full pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors lowercase cursor-pointer"
                  >
                    <span className="font-medium">
                      {isExpanded ? 'hide breakdown' : `view details (${course.marks.length} tests)`}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.div>
                  </motion.button>

                  {/* Smooth Fluid Breakdown Accordion with spring physics */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                          opacity: { duration: 0.2 }
                        }}
                        className="overflow-hidden space-y-3 pt-3"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-wider">
                            test components & weightage
                          </span>

                          {/* View mode toggle: Bars vs Trend */}
                          <div className="flex items-center p-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/[0.04] dark:border-white/[0.04]">
                            <SpringPress
                              onClick={() => setMode(course.courseCode, 'bars')}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-medium lowercase transition-all ${
                                (viewModes[course.courseCode] || 'bars') === 'bars'
                                  ? 'bg-white dark:bg-[#202025] text-[#111111] dark:text-[#FAFAFA] shadow-xs font-bold'
                                  : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                              }`}
                            >
                              bars
                            </SpringPress>
                            <SpringPress
                              onClick={() => setMode(course.courseCode, 'trend')}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-medium lowercase transition-all ${
                                (viewModes[course.courseCode] || 'bars') === 'trend'
                                  ? 'bg-white dark:bg-[#202025] text-[#111111] dark:text-[#FAFAFA] shadow-xs font-bold'
                                  : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                              }`}
                            >
                              trend
                            </SpringPress>
                          </div>
                        </div>

                        {(() => {
                          const marksCount = course.marks.length;
                          const testPercentages = course.marks.map((t) =>
                            t.maxScore > 0 ? Math.round((t.score / t.maxScore) * 1000) / 10 : 0
                          );
                          const avgPct = marksCount > 0
                            ? Math.round(testPercentages.reduce((a, b) => a + b, 0) / marksCount)
                            : 0;

                          const firstPct = testPercentages[0] ?? 0;
                          const lastPct = testPercentages[marksCount - 1] ?? 0;
                          const trendDelta = Math.round((lastPct - firstPct) * 10) / 10;
                          const trendDirection = marksCount >= 2
                            ? trendDelta >= 3
                              ? 'up'
                              : trendDelta <= -3
                              ? 'down'
                              : 'steady'
                            : 'steady';

                          const mode = viewModes[course.courseCode] || 'bars';

                          return mode === 'bars' ? (
                            <div className="space-y-2.5">
                              {course.marks.map((test, idx) => {
                                const pct = testPercentages[idx] ?? 0;
                                const isHigh = pct >= 80;
                                const isMid = pct >= 60 && pct < 80;

                                return (
                                  <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    className="space-y-1 p-1 rounded-lg hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer select-none"
                                  >
                                    <div className="flex items-center justify-between text-xs">
                                      <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">
                                        {test.testName}
                                      </span>
                                      <div className="flex items-center space-x-2 tabular-nums">
                                        <span className="text-[#111111] dark:text-[#FAFAFA] font-medium">
                                          <AnimatedNumber value={test.score} decimals={0} />/{test.maxScore}
                                        </span>
                                        <AnimatedNumber
                                          value={pct}
                                          decimals={0}
                                          suffix="%"
                                          className={`text-[10px] font-bold ${
                                            isHigh
                                              ? 'text-emerald-400'
                                              : isMid
                                              ? 'text-amber-400'
                                              : 'text-rose-400'
                                          }`}
                                        />
                                      </div>
                                    </div>

                                    {/* Hairline Component Bar */}
                                    <div className="w-full h-1 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                                      <motion.div
                                        className={`h-full rounded-full ${
                                          isHigh
                                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                                            : isMid
                                            ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                                            : 'bg-gradient-to-r from-rose-500 to-pink-400'
                                        }`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 28, delay: idx * 0.03 }}
                                      />
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="pt-2 pb-1 space-y-2">
                              {/* Histogram Header: Trajectory Direction & Averages */}
                              <div className="flex items-center justify-between text-[11px] px-0.5">
                                <div className="flex items-center space-x-1.5">
                                  {trendDirection === 'up' && (
                                    <span className="inline-flex items-center space-x-1 font-semibold text-emerald-500 dark:text-emerald-400">
                                      <TrendingUp className="w-3.5 h-3.5" />
                                      <span>+{trendDelta}% upward trend</span>
                                    </span>
                                  )}
                                  {trendDirection === 'down' && (
                                    <span className="inline-flex items-center space-x-1 font-semibold text-rose-500 dark:text-rose-400">
                                      <TrendingDown className="w-3.5 h-3.5" />
                                      <span>{trendDelta}% score dip</span>
                                    </span>
                                  )}
                                  {trendDirection === 'steady' && (
                                    <span className="inline-flex items-center space-x-1 text-[#71717A] dark:text-[#A1A1AA]">
                                      <Minus className="w-3.5 h-3.5" />
                                      <span>steady performance</span>
                                    </span>
                                  )}
                                </div>

                                <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase flex items-center space-x-1">
                                  <span>avg</span>
                                  <AnimatedNumber value={avgPct} decimals={0} suffix="%" />
                                  <span>• {marksCount} tests</span>
                                </span>
                              </div>

                              {/* Clean, Apple-Grade Histogram Grid */}
                              <div className="relative w-full h-36 pt-4 pb-4 px-3 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl border border-black/[0.04] dark:border-white/[0.04] flex items-end justify-between gap-2.5">
                                {/* Histogram Columns */}
                                {course.marks.map((test, idx) => {
                                  const pct = testPercentages[idx] ?? 0;
                                  const isHigh = pct >= 80;
                                  const isMid = pct >= 60 && pct < 80;

                                  return (
                                    <motion.div
                                      key={idx}
                                      whileHover={{ scale: 1.05, y: -2 }}
                                      whileTap={{ scale: 0.95 }}
                                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                      className="flex-1 flex flex-col items-center h-full justify-end group z-10 cursor-pointer select-none"
                                    >
                                      {/* Score */}
                                      <AnimatedNumber
                                        value={test.score}
                                        decimals={0}
                                        className="text-[10px] font-medium text-[#71717A] dark:text-[#A1A1AA] mb-1.5 tabular-nums group-hover:text-[#111111] dark:group-hover:text-[#FAFAFA] transition-colors"
                                      />

                                      {/* Vertical Bar Capsule */}
                                      <div className="w-full max-w-[32px] h-20 rounded-full bg-black/5 dark:bg-white/5 relative flex items-end overflow-hidden p-0.5 border border-black/[0.03] dark:border-white/[0.03]">
                                        <motion.div
                                          initial={{ height: 0 }}
                                          animate={{ height: `${Math.max(8, Math.min(100, pct))}%` }}
                                          transition={{ type: 'spring', stiffness: 300, damping: 26, delay: idx * 0.04 }}
                                          className={`w-full rounded-full transition-all ${
                                            isHigh
                                              ? 'bg-emerald-500 dark:bg-emerald-400'
                                              : isMid
                                              ? 'bg-amber-500 dark:bg-amber-400'
                                              : 'bg-rose-500 dark:bg-rose-400'
                                          }`}
                                        />
                                      </div>

                                      {/* Test Name & Percentage */}
                                      <div className="mt-1.5 flex flex-col items-center">
                                        <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] truncate max-w-full text-center">
                                          {test.testName.toLowerCase()}
                                        </span>
                                        <AnimatedNumber
                                          value={pct}
                                          decimals={0}
                                          suffix="%"
                                          className={`text-[9px] font-bold ${
                                            isHigh ? 'text-emerald-500 dark:text-emerald-400' : isMid ? 'text-amber-500 dark:text-amber-400' : 'text-rose-500 dark:text-rose-400'
                                          }`}
                                        />
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </InteractiveBentoCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* GPA Predictor Modal */}
      <GpaPredictorModal
        isOpen={isGpaPredictorOpen}
        onClose={() => setIsGpaPredictorOpen(false)}
      />
    </div>
  );
};
