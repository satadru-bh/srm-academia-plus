import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { calculateAttendanceMargin } from '../../api/margin';
import { 
  calculateCreditWeightedGpa, 
  calculateBestPossibleGrade,
  inferCourseCredits,
  formatCourseTitle 
} from '../../api/grades';
import { getUpcomingEvents } from '../../data/academicCalendar';
import { REAL_TIMETABLE_DATA } from '../../data/studentData';
import { hasAssignedVenue } from '../../api/types';
import { GpaPredictorModal } from '../modals/GpaPredictorModal';
import { 
  MapPin, 
  ArrowUpRight,
  BookOpen,
  Users
} from 'lucide-react';

export const AtAGlanceView: React.FC = () => {
  const { 
    user, 
    timetable, 
    currentDayOrder, 
    isHoliday, 
    setActiveTab, 
    lastSyncedAt,
    openCourseAttendance,
    openCourseMarks,
    todayDateStr
  } = useSession();
  const [isGpaPredictorOpen, setIsGpaPredictorOpen] = useState(false);

  if (!user) return null;

  const totalConducted = user.attendance.reduce((acc, c) => acc + c.hoursConducted, 0);
  const totalPresent = user.attendance.reduce((acc, c) => acc + c.hoursPresent, 0);
  const overallPercent = totalConducted > 0 ? Math.round((totalPresent / totalConducted) * 1000) / 10 : 100;
  const overallMargin = calculateAttendanceMargin(totalConducted, totalPresent);

  // Credit-weighted GPA and internal marks aggregate
  const gpaData = useMemo(() => {
    return calculateCreditWeightedGpa(user.marks);
  }, [user.marks]);

  // Today's classes for current Day Order (empty if holiday/non-instructional, includes all 12 periods)
  const activeTimetableDays = (timetable?.days?.[1]?.length === 12 && Object.values(timetable.days).some((slots) => slots.some((s) => s.courseCode && s.courseCode !== '-')))
    ? timetable.days
    : REAL_TIMETABLE_DATA.days;

  const todayClasses = (!isHoliday && currentDayOrder > 0)
    ? (activeTimetableDays[currentDayOrder] || [])
        .slice(0, 12)
        .filter(
          (s) => s.courseTitle !== 'Free Period' && s.courseTitle !== 'No class' && hasAssignedVenue(s.room)
        )
    : [];

  // Critical attendance subjects closest to 75% cutoff
  const attentionCourses = user.attendance
    .map((c) => ({ ...c, marginInfo: calculateAttendanceMargin(c.hoursConducted, c.hoursPresent) }))
    .sort((a, b) => a.attendancePercent - b.attendancePercent)
    .slice(0, 3);

  // Critical internal marks courses needing attention (lowest internal score percentages)
  const attentionMarksCourses = useMemo(() => {
    return (user.marks || [])
      .map((m) => {
        const total = typeof m.totalScore === 'number' ? m.totalScore : 0;
        const maxTotal = typeof m.maxTotalScore === 'number' && m.maxTotalScore > 0 ? m.maxTotalScore : 60;
        const bestGrade = calculateBestPossibleGrade(m.courseCode, total, maxTotal);
        const credits = inferCourseCredits(m.courseCode, m.credit);
        const percentage = (total / maxTotal) * 100;
        return {
          ...m,
          totalScore: total,
          maxTotalScore: maxTotal,
          bestGrade,
          credits,
          percentage
        };
      })
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3);
  }, [user.marks]);

  const studentFirstName = (user.profile.name || 'student').toLowerCase().split(' ')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-5"
    >
      {/* Interlocking Bento Grid with grid-auto-flow: dense */}
      <div className="grid grid-cols-12 gap-5 [grid-auto-flow:dense]">
        
        {/* 1. Hero Greeting Tile (col-span-12 xl:col-span-6) */}
        <div className="col-span-12 xl:col-span-6 bento-card p-6 sm:p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
          {/* Subtle Ambient Background Gradient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-white/[0.04] dark:from-white/[0.03] to-transparent pointer-events-none rounded-full blur-2xl -mr-16 -mt-16" />

          {/* Top Pill Row */}
          <div className="flex items-center justify-between gap-2 z-10">
            <span className="text-xs font-semibold tracking-tight text-[#71717A] dark:text-[#A1A1AA] lowercase">
              overview
            </span>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] lowercase">
                {lastSyncedAt ? 'synced' : 'live'}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-xs font-medium text-[#111111] dark:text-[#FAFAFA] lowercase">
                {isHoliday ? 'holiday' : `day order ${currentDayOrder}`}
              </span>
            </div>
          </div>

          {/* Core Hero Heading */}
          <div className="my-5 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
              hey,{' '}
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className="hover:underline underline-offset-8 decoration-black/20 dark:decoration-white/20 transition-all cursor-pointer hover:opacity-85 text-left inline-block"
                title="view student profile"
              >
                {studentFirstName}.
              </button>
            </h1>
            <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] mt-2 lowercase font-normal leading-relaxed">
              {isHoliday
                ? 'no lectures scheduled today • holiday'
                : todayClasses.length === 0
                ? 'no classes scheduled today'
                : `${todayClasses.length} lectures scheduled today • margin ${overallMargin.label}`}
            </p>
          </div>

          {/* Micro-Metrics Bar */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-3.5 border-t border-black/[0.06] dark:border-white/[0.06] text-xs text-[#71717A] dark:text-[#A1A1AA] z-10">
            <span className="text-[#111111] dark:text-[#FAFAFA] font-medium">{user.attendance.length} subjects</span>
            <span>•</span>
            <span>sem {user.profile.semester}</span>
            <span>•</span>
            <span>batch {user.profile.comboBatch || '2/2'}</span>
          </div>
        </div>

        {/* 2. Overall Attendance Tile (Clean Minimal Metric, No Radial Graph) (col-span-12 sm:col-span-6 xl:col-span-3) */}
        <div 
          onClick={() => setActiveTab('attendance')}
          className="col-span-12 sm:col-span-6 xl:col-span-3 bento-card p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:border-black/20 dark:hover:border-white/20 transition-all min-h-[220px]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-tight text-[#71717A] dark:text-[#A1A1AA] lowercase">
              attendance
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#71717A] dark:text-[#A1A1AA] lowercase">
              target 75%
            </span>
          </div>

          {/* Core Attendance Display */}
          <div className="my-auto py-2">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums text-[#111111] dark:text-[#FAFAFA]">
              {overallPercent}%
            </div>

            {/* Attendance Hours Summary */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">attended</span>
                <span className="font-medium tabular-nums text-[#111111] dark:text-[#FAFAFA]">
                  {totalPresent} of {totalConducted} hrs
                </span>
              </div>

              {/* Minimal Single Hairline Bar */}
              <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    Number(overallPercent) >= 75 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-rose-500 to-rose-400'
                  }`}
                  style={{ width: `${Math.min(100, Math.max(0, Number(overallPercent)))}%` }}
                />
              </div>
            </div>
          </div>

          {/* Margin Status Footer */}
          <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs">
            <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">margin</span>
            <span className={`font-medium lowercase ${Number(overallPercent) >= 75 ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'}`}>
              {overallMargin.label}
            </span>
          </div>
        </div>

        {/* 3. Predicted GPA & Internals Tile (col-span-12 sm:col-span-6 xl:col-span-3) */}
        <div 
          onClick={() => setIsGpaPredictorOpen(true)}
          className="col-span-12 sm:col-span-6 xl:col-span-3 bento-card p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:border-black/20 dark:hover:border-white/20 transition-all min-h-[220px]"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-tight text-[#71717A] dark:text-[#A1A1AA] lowercase">
              predicted gpa
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#71717A] dark:text-[#A1A1AA] lowercase">
              {gpaData.totalCredits} credits
            </span>
          </div>

          {/* Core GPA Big Display */}
          <div className="my-auto py-2">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums text-[#111111] dark:text-[#FAFAFA]">
              {gpaData.gpa.toFixed(2)}
            </div>

            {/* Internal Marks Summary */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">internals</span>
                <span className="font-medium tabular-nums text-[#111111] dark:text-[#FAFAFA]">
                  {gpaData.totalScore} / {gpaData.maxScore}
                </span>
              </div>

              {/* Minimal Single Hairline Bar */}
              <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    gpaData.percentage >= 75 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-rose-500 to-rose-400'
                  }`}
                  style={{ width: `${Math.min(100, Math.max(0, gpaData.percentage))}%` }}
                />
              </div>
            </div>
          </div>

          {/* Aggregate Percentage Footer */}
          <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA]">
            <span className="lowercase">aggregate</span>
            <span className="font-medium text-[#111111] dark:text-[#FAFAFA] tabular-nums">
              {gpaData.percentage}%
            </span>
          </div>
        </div>

        {/* 4. Today's Lectures Bento Tile (col-span-12 lg:col-span-7) */}
        <div className="col-span-12 lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.06] dark:border-white/[0.06]">
            <div>
              <h2 className="text-base font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                today's lectures
              </h2>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                {isHoliday 
                  ? 'holiday • no sessions scheduled' 
                  : `${todayClasses.length} sessions scheduled today`}
              </p>
            </div>
            <button
              onClick={() => setActiveTab('timetable')}
              className="text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] flex items-center space-x-1 transition-colors"
            >
              <span className="lowercase">full week</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Class Timeline */}
          <div className="divide-y divide-black/[0.04] dark:divide-white/[0.04] my-2">
            {todayClasses.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
                {isHoliday ? 'no lectures scheduled for today • holiday' : 'no lectures scheduled for today'}
              </div>
            ) : (
              todayClasses.map((slot, idx) => (
                <div key={idx} className="py-3 flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3 min-w-0">
                    <div className="w-24 shrink-0 text-xs tabular-nums text-[#71717A] dark:text-[#A1A1AA] pt-0.5">
                      {slot.timeRange}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-semibold text-[#111111] dark:text-[#FAFAFA] truncate lowercase">
                        {formatCourseTitle(slot.courseTitle)}
                      </div>
                      <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] flex items-center space-x-2 mt-0.5">
                        <span className="">{slot.courseCode}</span>
                        {slot.faculty && <span>• {slot.faculty}</span>}
                      </div>
                    </div>
                  </div>

                  {slot.room && (
                    <span className="shrink-0 inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] bg-black/5 dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[#71717A] dark:text-[#A1A1AA]">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{slot.room}</span>
                    </span>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="pt-2 text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
            tech park 706
          </div>
        </div>

        {/* 5. Events & Calendar Milestones Tile with Weekly Cycle Streak (col-span-12 lg:col-span-5) */}
        <div className="col-span-12 lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.06] dark:border-white/[0.06]">
            <div>
              <h2 className="text-base font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                academic milestones
              </h2>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                official schedule & upcoming events
              </p>
            </div>
            <button
              onClick={() => setActiveTab('calendar')}
              className="text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] flex items-center space-x-1 transition-colors cursor-pointer group"
            >
              <span className="lowercase">calendar</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Upcoming Academic Events */}
          <div className="divide-y divide-black/[0.04] dark:divide-white/[0.04] my-2">
            {getUpcomingEvents(6, todayDateStr).slice(0, 3).map((event, idx) => (
              <div key={idx} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                <div className="min-w-0">
                  <div className="font-semibold text-[#111111] dark:text-[#FAFAFA] lowercase truncate">
                    {event.title}
                  </div>
                  <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] mt-0.5">
                    {event.date}
                  </div>
                </div>
                <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-medium lowercase ${
                  event.category === 'holiday'
                    ? 'bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/20'
                    : event.category === 'exam'
                    ? 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/20'
                    : event.category === 'milestone'
                    ? 'bg-indigo-500/15 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20'
                    : 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20'
                }`}>
                  {event.category}
                </span>
              </div>
            ))}
          </div>

          {/* Feature 1: Weekly 5-Day Cycle Streak Tracker */}
          <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA]">
            <span className="lowercase">{isHoliday ? 'cycle paused' : 'weekly cycle'}</span>
            <div className="flex items-center space-x-1.5">
              {['d1', 'd2', 'd3', 'd4', 'd5'].map((d, i) => {
                const dayNum = i + 1;
                const isCurrent = !isHoliday && dayNum === currentDayOrder;
                const isPast = !isHoliday && dayNum < currentDayOrder;

                return (
                  <span
                    key={d}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-colors ${
                      isCurrent
                        ? 'bg-emerald-500 text-white font-bold shadow-xs'
                        : isPast
                        ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA]'
                        : 'border border-black/10 dark:border-white/10 text-[#71717A] dark:text-[#A1A1AA]'
                    }`}
                  >
                    {d}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* 6. Quick Action Shortcuts: Notes Repository & Faculty Finder (Side by Side) */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Notes & PYQs Card */}
          {/* Study Notes Card */}
          <div 
            onClick={() => setActiveTab('notes')}
            className="bento-card p-5 sm:p-6 flex flex-col justify-between gap-4 cursor-pointer hover:border-black/20 dark:hover:border-white/20 transition-all group"
          >
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center shrink-0 text-[#111111] dark:text-[#FAFAFA]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA] lowercase group-hover:underline underline-offset-2 truncate">
                  study material & past papers
                </h3>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1 leading-relaxed">
                  lecture slides, question papers & syllabus
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/[0.04] dark:border-white/[0.04] text-xs text-[#71717A] dark:text-[#A1A1AA]">
              <span className="text-[11px] lowercase opacity-75">repository</span>
              <div className="flex items-center space-x-1 group-hover:text-[#111111] dark:group-hover:text-[#FAFAFA] transition-colors shrink-0">
                <span className="lowercase">open repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Faculty Finder Card */}
          <div 
            onClick={() => setActiveTab('faculty')}
            className="bento-card p-5 sm:p-6 flex flex-col justify-between gap-4 cursor-pointer hover:border-black/20 dark:hover:border-white/20 transition-all group"
          >
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center shrink-0 text-[#111111] dark:text-[#FAFAFA]">
                <Users className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA] lowercase group-hover:underline underline-offset-2 truncate">
                  faculty finder
                </h3>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1 leading-relaxed">
                  cabins, official emails & contacts
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/[0.04] dark:border-white/[0.04] text-xs text-[#71717A] dark:text-[#A1A1AA]">
              <span className="text-[11px] lowercase opacity-75">directory</span>
              <div className="flex items-center space-x-1 group-hover:text-[#111111] dark:group-hover:text-[#FAFAFA] transition-colors shrink-0">
                <span className="lowercase">find faculty</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* 7. Attendance Margin Spotlight */}
        {attentionCourses.length > 0 && (
          <div className="col-span-12 bento-card p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <h2 className="text-base font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                  attendance margin spotlight
                </h2>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                  courses closest to the 75% cutoff threshold
                </p>
              </div>
              <button
                onClick={() => setActiveTab('attendance')}
                className="text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] flex items-center space-x-1 transition-colors cursor-pointer group"
              >
                <span className="lowercase">all subjects ({user.attendance.length})</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {attentionCourses.map((c) => {
                const isDanger = c.attendancePercent < 75;
                const isBorderline = c.attendancePercent >= 75 && c.attendancePercent < 80;
                const marginLabel = isDanger 
                  ? `${c.marginInfo.required} needed` 
                  : (c.marginInfo.margin > 0 ? `+${c.marginInfo.margin} margin` : '0 margin');

                return (
                  <div
                    key={c.courseCode}
                    onClick={() => openCourseAttendance(c.courseCode)}
                    className={`p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border transition-all cursor-pointer hover:border-black/20 dark:hover:border-white/20 ${
                      isDanger 
                        ? 'border-rose-500/20 glow-rose' 
                        : isBorderline 
                        ? 'border-amber-500/20 glow-amber' 
                        : 'border-black/[0.06] dark:border-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                        {c.courseCode}
                      </span>
                      <span className={`text-sm font-extrabold tabular-nums ${
                        isDanger ? 'text-rose-500 dark:text-rose-400' : 'text-[#111111] dark:text-[#FAFAFA]'
                      }`}>
                        {c.attendancePercent.toFixed(1)}%
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#111111] dark:text-[#FAFAFA] truncate lowercase mt-2">
                      {formatCourseTitle(c.courseTitle)}
                    </div>

                    <div className="mt-3 pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px]">
                      <span className="text-[#71717A] dark:text-[#A1A1AA] tabular-nums">
                        {c.hoursPresent}/{c.hoursConducted} hrs
                      </span>
                      <span className={`font-bold text-xs ${
                        isDanger 
                          ? 'text-rose-500 dark:text-rose-400' 
                          : isBorderline 
                          ? 'text-amber-500 dark:text-amber-400' 
                          : 'text-[#111111] dark:text-[#FAFAFA]'
                      }`}>
                        {marginLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 8. Internal Marks Spotlight (Subjects Needing Attention) */}
        {attentionMarksCourses.length > 0 && (
          <div className="col-span-12 bento-card p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <h2 className="text-base font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                  internal marks spotlight
                </h2>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                  courses with lowest internal score calibration
                </p>
              </div>
              <button
                onClick={() => setActiveTab('marks')}
                className="text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] flex items-center space-x-1 transition-colors cursor-pointer group"
              >
                <span className="lowercase">all courses ({user.marks.length})</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {attentionMarksCourses.map((m) => {
                const isDanger = m.bestGrade.status === 'danger';
                const isBorderline = m.bestGrade.status === 'borderline';
                const gradeCode = m.bestGrade.grade;
                const req = m.bestGrade.requirement75ForBestGrade;

                return (
                  <div
                    key={m.courseCode}
                    onClick={() => openCourseMarks(m.courseCode)}
                    className={`p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border transition-all cursor-pointer hover:border-black/20 dark:hover:border-white/20 ${
                      isDanger 
                        ? 'border-rose-500/20 glow-rose' 
                        : isBorderline 
                        ? 'border-amber-500/20 glow-amber' 
                        : 'border-black/[0.06] dark:border-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                          {m.courseCode}
                        </span>
                        <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                          {m.credits} cr
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-[#111111] dark:text-[#FAFAFA] lowercase">
                        grade {gradeCode.toLowerCase()}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#111111] dark:text-[#FAFAFA] truncate lowercase mt-2">
                      {formatCourseTitle(m.courseTitle)}
                    </div>

                    {/* Score Bar */}
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#111111] dark:text-[#FAFAFA] tabular-nums">
                          {m.totalScore} / {m.maxTotalScore}
                        </span>
                        <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] tabular-nums">
                          {m.percentage.toFixed(1)}% internal
                        </span>
                      </div>
                      <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(100, Math.max(0, m.percentage))}%`,
                            backgroundColor: 'var(--color-accent)'
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                      <span className="lowercase">best: {m.bestGrade.bestPossibleTotal}/100</span>
                      <span className="font-bold text-[#111111] dark:text-[#FAFAFA] tabular-nums lowercase">
                        {req.displayText}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* GPA Predictor Modal */}
      <GpaPredictorModal
        isOpen={isGpaPredictorOpen}
        onClose={() => setIsGpaPredictorOpen(false)}
      />
    </motion.div>
  );
};
