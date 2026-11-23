import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { calculateAttendanceMargin } from '../../api/margin';
import { formatCourseTitle } from '../../api/grades';
import { AttendancePredictorModal } from '../common/AttendancePredictorModal';
import { 
  Building, 
  User, 
  Search, 
  RotateCcw
} from 'lucide-react';

export const AttendanceBentoView: React.FC = () => {
  const { user, timetable, focusedCourseCode } = useSession();
  const [searchTerm, setSearchTerm] = useState('');
  const [isPredictorOpen, setIsPredictorOpen] = useState(false);
  
  // Applied prediction forecast state
  const [appliedPredictions, setAppliedPredictions] = useState<Record<string, { percent: number; marginLabel: string; status: 'safe' | 'borderline' | 'danger' }> | null>(null);

  useEffect(() => {
    if (focusedCourseCode) {
      const timer = setTimeout(() => {
        const el = document.getElementById(`attendance-card-${focusedCourseCode}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [focusedCourseCode]);

  if (!user) return null;

  const q = searchTerm.toLowerCase();
  const filteredCourses = user.attendance.filter((c) => {
    const title = (c.courseTitle || '').toLowerCase();
    const code = (c.courseCode || '').toLowerCase();
    const faculty = (c.facultyName || '').toLowerCase();
    return title.includes(q) || code.includes(q) || faculty.includes(q);
  });

  const handleApplyPrediction = (predicted: { courseCode: string; percent: number; marginLabel: string; status: 'safe' | 'borderline' | 'danger' }[] | null) => {
    if (!predicted) {
      setAppliedPredictions(null);
      return;
    }
    const map: Record<string, { percent: number; marginLabel: string; status: 'safe' | 'borderline' | 'danger' }> = {};
    predicted.forEach(p => {
      map[p.courseCode] = p;
    });
    setAppliedPredictions(map);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-6"
    >
      {/* View Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
            attendance & margin
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
            calibrated against srm's strict 75% cutoff threshold
          </p>
        </div>

        {/* Toolbar: Predictor Button & Search */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Attendance Predictor Button */}
          <button
            onClick={() => setIsPredictorOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs lowercase shadow-sm hover:opacity-90 transition-opacity"
          >
            <span>attendance predictor</span>
          </button>

          {appliedPredictions && (
            <button
              onClick={() => setAppliedPredictions(null)}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-medium lowercase"
              title="reset simulated forecast"
            >
              <RotateCcw className="w-3 h-3" />
              <span>forecast active (reset)</span>
            </button>
          )}

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="filter courses..."
              className="w-full pl-9 pr-4 py-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#131316] border border-black/[0.06] dark:border-white/[0.06] text-xs text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none focus:border-white/20 transition-all lowercase"
            />
          </div>
        </div>
      </div>

      {/* Dynamic Urgency Bento Grid: grid-auto-flow: dense */}
      <div className="grid grid-cols-12 gap-5 [grid-auto-flow:dense]">
        {filteredCourses.map((course) => {
          const applied = appliedPredictions ? appliedPredictions[course.courseCode] : null;
          const displayPercent = applied ? applied.percent : course.attendancePercent;
          const marginInfo = applied 
            ? { ...calculateAttendanceMargin(course.hoursConducted, course.hoursPresent), label: applied.marginLabel, status: applied.status }
            : calculateAttendanceMargin(course.hoursConducted, course.hoursPresent);

          // Urgency rule: below 78% automatically expands into large prominent bento tile
          const isUrgent = displayPercent < 78;
          const isDanger = marginInfo.status === 'danger';
          const isBorderline = marginInfo.status === 'borderline';

          const colSpanClass = isUrgent
            ? 'col-span-12 lg:col-span-8'
            : 'col-span-12 sm:col-span-6 lg:col-span-4';

          return (
            <motion.div
              layout
              key={course.courseCode}
              id={`attendance-card-${course.courseCode}`}
              className={`${colSpanClass} bento-card p-6 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 ${
                focusedCourseCode === course.courseCode
                  ? 'ring-2 ring-black dark:ring-white ring-offset-2 dark:ring-offset-black'
                  : ''
              } ${
                isDanger 
                  ? 'border-rose-500/20 glow-rose' 
                  : isBorderline 
                  ? 'border-amber-500/20 glow-amber' 
                  : ''
              }`}
            >
              <div>
                {/* Header row: Course Code & Margin Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 text-[#111111] dark:text-[#FAFAFA] font-bold">
                      {course.courseCode}
                    </span>
                    <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] uppercase">
                      slot {course.slot}
                    </span>
                  </div>

                  {/* Margin Guidance Large Number */}
                  <div className="text-right">
                    <div className="flex items-baseline justify-end space-x-1">
                      <span
                        className={`text-2xl sm:text-3xl font-black tracking-tight tabular-nums ${
                          isDanger
                            ? 'text-rose-500 dark:text-rose-400'
                            : isBorderline
                            ? 'text-amber-500 dark:text-amber-400'
                            : 'text-emerald-500 dark:text-emerald-400'
                        }`}
                      >
                        {isDanger ? marginInfo.required : (marginInfo.margin > 0 ? `+${marginInfo.margin}` : `${marginInfo.margin}`)}
                      </span>
                      <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                        {isDanger ? 'needed' : 'margin'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Course Title with uniform height */}
                <div className="min-h-[2.5rem] flex items-center">
                  <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase line-clamp-2">
                    {formatCourseTitle(course.courseTitle)}
                  </h2>
                </div>

                {/* Faculty & Room with consistent height */}
                <div className="mt-2 min-h-[1.5rem] text-xs text-[#71717A] dark:text-[#A1A1AA] flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
                  {course.facultyName && (
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span className="truncate">{course.facultyName}</span>
                    </span>
                  )}
                  {course.roomNo && (
                    <span className="flex items-center space-x-1">
                      <Building className="w-3 h-3" />
                      <span>{course.roomNo}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Data Display & Progress Bar */}
              <div className="mt-6 space-y-3">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums text-[#111111] dark:text-[#FAFAFA]">
                      {displayPercent}%
                    </div>
                    {applied && (
                      <span className="text-xs text-amber-500 dark:text-amber-400 lowercase">
                        predicted (was {course.attendancePercent}%)
                      </span>
                    )}
                  </div>

                  <div className="text-right text-xs text-[#71717A] dark:text-[#A1A1AA] tabular-nums">
                    <div>
                      <span className="font-bold text-[#111111] dark:text-[#FAFAFA]">{course.hoursPresent}</span>
                      <span> / {course.hoursConducted} hrs</span>
                    </div>
                    <div className="text-[11px] lowercase text-[#71717A] dark:text-[#A1A1AA] mt-0.5">
                      {course.hoursAbsent} hrs absent
                    </div>
                  </div>
                </div>

                {/* Single Subtle Clean Hairline Progress Bar */}
                <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    className={`h-full rounded-full ${
                      isDanger
                        ? 'bg-gradient-to-r from-rose-500 to-rose-400'
                        : isBorderline
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-400'
                    }`}
                    animate={{ width: `${Math.min(100, Math.max(0, displayPercent))}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                  {/* 75% Cutoff Marker */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white dark:bg-black z-10 opacity-75"
                    style={{ left: '75%' }}
                    title="75% target threshold"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA] pt-1">
                  <span>minimum 75% required</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Attendance Predictor Modal */}
      <AttendancePredictorModal
        isOpen={isPredictorOpen}
        onClose={() => setIsPredictorOpen(false)}
        courses={user.attendance}
        timetable={timetable}
        onApplyPrediction={handleApplyPrediction}
      />
    </motion.div>
  );
};
