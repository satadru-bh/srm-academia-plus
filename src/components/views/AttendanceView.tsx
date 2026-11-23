import React, { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { calculateAttendanceMargin } from '../../api/margin';
import { 
  Search, 
  Building,
  User
} from 'lucide-react';

export const AttendanceView: React.FC = () => {
  const { user } = useSession();
  const [filterType, setFilterType] = useState<'all' | 'safe' | 'borderline' | 'danger'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (!user) return null;

  const coursesWithMargins = user.attendance.map((c) => ({
    ...c,
    margin: calculateAttendanceMargin(c.hoursConducted, c.hoursPresent)
  }));

  const filtered = coursesWithMargins.filter((c) => {
    const matchesFilter = filterType === 'all' || c.margin.status === filterType;
    const q = searchTerm.toLowerCase();
    const courseTitle = c.courseTitle || '';
    const courseCode = c.courseCode || '';
    const facultyName = c.facultyName || '';
    const matchesSearch = 
      courseTitle.toLowerCase().includes(q) ||
      courseCode.toLowerCase().includes(q) ||
      facultyName.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
      {/* View Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Attendance Margins
          </h2>
          <p className="text-sm text-[#6E6E73] dark:text-[#98989D] mt-1">
            Real-time buffer and catch-up calculator calibrated to SRM's mandatory 75% attendance threshold
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] self-start">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterType === 'all'
                ? 'bg-[#007AFF] text-white dark:bg-[#0A84FF]'
                : 'text-[#6E6E73] dark:text-[#98989D] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
            }`}
          >
            All ({coursesWithMargins.length})
          </button>
          <button
            onClick={() => setFilterType('safe')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterType === 'safe'
                ? 'bg-[#34C759] text-white dark:bg-[#30D158]'
                : 'text-[#6E6E73] dark:text-[#98989D] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
            }`}
          >
            Safe ≥80%
          </button>
          <button
            onClick={() => setFilterType('borderline')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterType === 'borderline'
                ? 'bg-[#FF9500] text-white dark:bg-[#FF9F0A]'
                : 'text-[#6E6E73] dark:text-[#98989D] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
            }`}
          >
            Borderline 75–79%
          </button>
          <button
            onClick={() => setFilterType('danger')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterType === 'danger'
                ? 'bg-[#FF3B30] text-white dark:bg-[#FF453A]'
                : 'text-[#6E6E73] dark:text-[#98989D] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
            }`}
          >
            Danger &lt;75%
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#86868B]" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by course name, code, or faculty..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF]"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => {
          const isDanger = item.margin.status === 'danger';
          const isBorderline = item.margin.status === 'borderline';

          return (
            <div
              key={item.courseCode}
              className="p-5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] flex flex-col justify-between"
            >
              <div>
                {/* Header row: Course Code & Margin Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#007AFF] dark:text-[#0A84FF]">
                    {item.courseCode}
                  </span>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tabular-nums ${
                      isDanger
                        ? 'bg-[#FF3B30]/15 text-[#FF3B30] dark:text-[#FF453A] border border-[#FF3B30]/30'
                        : isBorderline
                        ? 'bg-[#FF9500]/15 text-[#FF9500] dark:text-[#FF9F0A] border border-[#FF9500]/30'
                        : 'bg-[#34C759]/15 text-[#34C759] dark:text-[#30D158] border border-[#34C759]/30'
                    }`}
                  >
                    {item.margin.label}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] line-clamp-2">
                  {item.courseTitle}
                </h3>

                {/* Faculty & Meta */}
                <div className="text-xs text-[#6E6E73] dark:text-[#98989D] mt-2 space-y-1">
                  <div className="flex items-center space-x-1.5 truncate">
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.facultyName}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Building className="w-3.5 h-3.5 shrink-0" />
                    <span>Slot {item.slot} • Room {item.roomNo}</span>
                  </div>
                </div>
              </div>

              {/* Attendance Progress & Figures */}
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="text-xs text-[#6E6E73] dark:text-[#98989D] tabular-nums">
                    <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">{item.hoursPresent}</span>
                    <span> / {item.hoursConducted} hours</span>
                    <span className="ml-1 text-[11px] text-[#FF3B30] dark:text-[#FF453A]">({item.hoursAbsent} absent)</span>
                  </div>
                  <div className="text-xl font-bold tracking-tight tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {item.attendancePercent}%
                  </div>
                </div>

                {/* Progress Bar with 75% tick marker */}
                <div className="relative w-full h-2 rounded-full bg-[#EBEBED] dark:bg-[#2C2C2E] overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isDanger
                        ? 'bg-[#FF3B30] dark:bg-[#FF453A]'
                        : isBorderline
                        ? 'bg-[#FF9500] dark:bg-[#FF9F0A]'
                        : 'bg-[#34C759] dark:bg-[#30D158]'
                    }`}
                    style={{ width: `${Math.min(100, item.attendancePercent)}%` }}
                  />
                  {/* 75% Cutoff Tick Marker */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white dark:bg-black z-10"
                    style={{ left: '75%' }}
                    title="75% Mandatory Cutoff"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
