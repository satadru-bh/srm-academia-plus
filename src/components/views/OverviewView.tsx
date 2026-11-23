import React from 'react';
import { useSession } from '../../context/SessionContext';
import { calculateAttendanceMargin } from '../../api/margin';
import { formatCourseTitle } from '../../api/grades';
import { stripEmployeeId } from '../../utils/facultyMatcher';
import { hasAssignedVenue } from '../../api/types';
import {
  TrendingUp,
  Clock,
  Calendar,
  CheckCircle2,
  UserCheck,
  ChevronRight
} from 'lucide-react';

export const OverviewView: React.FC = () => {
  const { user, timetable, currentDayOrder, isHoliday, setActiveTab, openFaculty } = useSession();

  if (!user) return null;

  // Calculate overall metrics
  const totalConducted = user.attendance.reduce((acc, c) => acc + c.hoursConducted, 0);
  const totalPresent = user.attendance.reduce((acc, c) => acc + c.hoursPresent, 0);
  const overallPercent = totalConducted > 0 ? Math.round((totalPresent / totalConducted) * 10000) / 100 : 100;
  const overallMargin = calculateAttendanceMargin(totalConducted, totalPresent);

  // Today's classes for current Day Order (excluding free periods & unassigned venues, empty if holiday)
  const todayClasses = (!isHoliday && currentDayOrder > 0)
    ? (timetable?.days[currentDayOrder] || []).filter(
      (s) => s.courseTitle !== 'Free Period' && s.courseTitle !== 'No class' && hasAssignedVenue(s.room)
    )
    : [];

  // Courses that need immediate attention (< 78%)
  const criticalCourses = user.attendance
    .map(c => ({ ...c, marginInfo: calculateAttendanceMargin(c.hoursConducted, c.hoursPresent) }))
    .sort((a, b) => a.attendancePercent - b.attendancePercent)
    .slice(0, 4);

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
      {/* Greeting Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#007AFF] dark:text-[#0A84FF] tracking-wider uppercase mb-1">
            <span>Semester {user.profile.semester}</span>
            <span>•</span>
            <span>Batch {user.profile.comboBatch || '2/2'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Good morning, {user.profile.name.split(' ')[0]}
          </h2>
          <p className="text-sm text-[#6E6E73] dark:text-[#98989D] mt-1">
            {isHoliday
              ? 'Holiday • No lectures scheduled today'
              : `Day Order ${currentDayOrder} • ${todayClasses.length} lectures scheduled today`}
          </p>
        </div>

        {/* Advisor Chip */}
        {user.profile.facultyAdvisor && (
          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] self-start">
            <div className="w-8 h-8 rounded-full bg-[#34C759]/15 text-[#34C759] dark:text-[#30D158] flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-[#6E6E73] dark:text-[#98989D] uppercase tracking-wider font-medium">
                Faculty Advisor
              </div>
              <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {user.profile.facultyAdvisor.name}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Attendance */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
          <div className="flex items-center justify-between text-xs text-[#6E6E73] dark:text-[#98989D] mb-2">
            <span className="font-medium">Overall Attendance</span>
            <TrendingUp className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-semibold tracking-tight tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
              {overallPercent}%
            </span>
            <span className={`text-xs font-medium ${overallPercent >= 75 ? 'text-[#34C759] dark:text-[#30D158]' : 'text-[#FF3B30] dark:text-[#FF453A]'}`}>
              {overallPercent >= 75 ? '+Above 75%' : 'Below Cutoff'}
            </span>
          </div>
          <div className="mt-3 text-xs text-[#6E6E73] dark:text-[#98989D] tabular-nums">
            {totalPresent} of {totalConducted} total hours attended
          </div>
        </div>

        {/* Global Margin */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
          <div className="flex items-center justify-between text-xs text-[#6E6E73] dark:text-[#98989D] mb-2">
            <span className="font-medium">Attendance Margin</span>
            <CheckCircle2 className="w-4 h-4 text-[#34C759] dark:text-[#30D158]" />
          </div>
          <div className="text-2xl font-semibold tracking-tight tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
            {overallMargin.label}
          </div>
          <div className="mt-3 text-xs text-[#6E6E73] dark:text-[#98989D]">
            Relative to strict SRM 75% cutoff
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
          <div className="flex items-center justify-between text-xs text-[#6E6E73] dark:text-[#98989D] mb-2">
            <span className="font-medium">Courses Registered</span>
            <Calendar className="w-4 h-4 text-[#FF9500] dark:text-[#FF9F0A]" />
          </div>
          <div className="text-3xl font-semibold tracking-tight tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
            {user.attendance.length}
          </div>
          <div className="mt-3 text-xs text-[#6E6E73] dark:text-[#98989D]">
            Theory, Integrated Labs & Mandatory
          </div>
        </div>

        {/* Internal Marks Evaluated */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
          <div className="flex items-center justify-between text-xs text-[#6E6E73] dark:text-[#98989D] mb-2">
            <span className="font-medium">Evaluated Assessments</span>
            <Clock className="w-4 h-4 text-[#AF52DE]" />
          </div>
          <div className="text-3xl font-semibold tracking-tight tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
            {user.marks.reduce((acc, m) => acc + m.marks.length, 0)}
          </div>
          <div className="mt-3 text-xs text-[#6E6E73] dark:text-[#98989D]">
            FT-I, FT-II, FT-III & Lab components
          </div>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Attendance Margins Spotlight (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              Attendance Margins (75% Minimum Target)
            </h3>
            <button
              onClick={() => setActiveTab('attendance')}
              className="text-xs font-medium text-[#007AFF] dark:text-[#0A84FF] hover:underline flex items-center space-x-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {criticalCourses.map((c) => {
              const margin = c.marginInfo;
              const isDanger = margin.status === 'danger';
              const isBorderline = margin.status === 'borderline';

              return (
                <div
                  key={c.courseCode}
                  className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-[#007AFF] dark:text-[#0A84FF]">
                        {c.courseCode}
                      </span>
                      <span className="text-[11px] text-[#6E6E73] dark:text-[#98989D]">
                        Slot {c.slot} • {c.roomNo}
                      </span>
                    </div>
                    <div className="text-sm font-semibold truncate text-[#1D1D1F] dark:text-[#F5F5F7] mt-0.5">
                      {c.courseTitle}
                    </div>
                    <div className="text-xs text-[#6E6E73] dark:text-[#98989D] tabular-nums mt-1">
                      {c.hoursPresent} of {c.hoursConducted} hours attended
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                    <span className="text-lg font-semibold tracking-tight tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {c.attendancePercent}%
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium tabular-nums mt-1 ${isDanger
                        ? 'bg-[#FF3B30]/10 text-[#FF3B30] dark:text-[#FF453A] border border-[#FF3B30]/20'
                        : isBorderline
                          ? 'bg-[#FF9500]/10 text-[#FF9500] dark:text-[#FF9F0A] border border-[#FF9500]/20'
                          : 'bg-[#34C759]/10 text-[#34C759] dark:text-[#30D158] border border-[#34C759]/20'
                        }`}
                    >
                      {margin.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Today's Schedule (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              Today's Schedule {isHoliday ? '(Holiday)' : `(Day Order ${currentDayOrder})`}
            </h3>
            <button
              onClick={() => setActiveTab('timetable')}
              className="text-xs font-medium text-[#007AFF] dark:text-[#0A84FF] hover:underline flex items-center space-x-1"
            >
              <span>Full Week</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] divide-y divide-black/[0.06] dark:divide-white/[0.08]">
            {todayClasses.length === 0 ? (
              <div className="py-8 text-center text-sm text-[#6E6E73] dark:text-[#98989D]">
                {isHoliday ? 'Holiday — No lectures today' : `No lectures scheduled for Day Order ${currentDayOrder}`}
              </div>
            ) : (
              todayClasses.map((slot, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-start space-x-3">
                  <div className="w-20 shrink-0 text-xs tabular-nums text-[#6E6E73] dark:text-[#98989D] pt-0.5">
                    {(slot.timeRange || '').split(' - ')[0] || slot.timeRange}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
                      {formatCourseTitle(slot.courseTitle)}
                    </div>
                    <div className="text-[11px] text-[#6E6E73] dark:text-[#98989D] flex items-center space-x-2 mt-0.5">
                      {slot.room && <span>{slot.room}</span>}
                      {slot.room && slot.faculty && <span>•</span>}
                      {slot.faculty && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openFaculty(slot.faculty!);
                          }}
                          className="truncate hover:underline hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer text-left"
                          title="view faculty in finder"
                        >
                          {stripEmployeeId(slot.faculty)}
                        </button>
                      )}
                    </div>
                  </div>
                  {idx === 0 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#007AFF]/10 text-[#007AFF] dark:text-[#0A84FF] border border-[#007AFF]/20">
                      Next
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
