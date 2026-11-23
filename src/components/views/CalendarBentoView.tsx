import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { 
  getSyncedAcademicEvents, 
  AcademicEvent, 
  getDayOrderForDate 
} from '../../data/academicCalendar';
import { formatCourseTitle } from '../../api/grades';
import { hasAssignedVenue } from '../../api/types';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export const CalendarBentoView: React.FC = () => {
  const { timetable } = useSession();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'exam' | 'holiday' | 'milestone' | 'cultural'>('all');
  
  // Default to November 2026 (current active semester month)
  const [currentYear, setCurrentYear] = useState<number>(() => new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(() => new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  });

  // Synchronized academic events including official exam timetable
  const allEvents = useMemo(() => getSyncedAcademicEvents(), []);

  const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleGoToToday = () => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    setCurrentMonth(now.getMonth());
    setSelectedDate(todayStr);
  };

  // Generate calendar days for current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sun
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Adjust so Monday is 0: (day + 6) % 7
  const startOffset = (firstDayOfMonth + 6) % 7;

  const calendarCells = [];
  for (let i = 0; i < startOffset; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const monthStr = String(currentMonth + 1).padStart(2, '0');
    const dayStr = String(d).padStart(2, '0');
    const dateStr = `${currentYear}-${monthStr}-${dayStr}`;
    calendarCells.push(dateStr);
  }

  // Filter only upcoming events from today onwards by default
  const todayStr = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }, []);

  const [showUpcomingOnly, setShowUpcomingOnly] = useState<boolean>(true);

  // Filtered list of events
  const filteredEvents = allEvents.filter(e => {
    if (showUpcomingOnly) {
      const eventEndOrDate = e.endDate || e.date;
      if (eventEndOrDate < todayStr) return false;
    }
    if (selectedCategory === 'all') return true;
    return e.category === selectedCategory;
  });

  // Selected date details
  const selectedDayInfo = getDayOrderForDate(selectedDate);
  const selectedEvents = allEvents.filter(e => {
    if (e.date === selectedDate) return true;
    if (e.endDate && selectedDate >= e.date && selectedDate <= e.endDate) return true;
    return false;
  });

  const selectedClasses = (timetable && selectedDayInfo.dayOrder > 0)
    ? (timetable.days[selectedDayInfo.dayOrder] || []).filter(
        s => s.courseTitle && s.courseTitle !== 'Free Period' && s.courseTitle !== 'No class' && hasAssignedVenue(s.room)
      )
    : [];

  const getCategoryBadge = (cat: AcademicEvent['category']) => {
    switch (cat) {
      case 'exam':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'holiday':
        return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'milestone':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'cultural':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
      className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
            academic calendar
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
            srm university official schedule, day order cycles & examination milestones
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#FFFFFF] dark:bg-[#131316] border border-black/[0.06] dark:border-white/[0.06]">
          {(['all', 'exam', 'holiday', 'milestone', 'cultural'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs lowercase transition-colors ${
                selectedCategory === cat
                  ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA] font-bold'
                  : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(180px,auto)] [grid-auto-flow:dense]">
        
        {/* 1. Monthly Calendar Grid (col-span-12 lg:col-span-7) */}
        <div className="col-span-12 lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Month Header Nav */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-4 h-4 text-[#71717A] dark:text-[#A1A1AA]" />
                <h2 className="text-base sm:text-lg font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                  {monthNames[currentMonth]} {currentYear}
                </h2>
              </div>
              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={handleGoToToday}
                  className="px-2.5 py-1 text-xs font-medium rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-[#111111] dark:text-[#FAFAFA] transition-colors cursor-pointer mr-1"
                >
                  today
                </button>
                <button
                  onClick={handlePrevMonth}
                  className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] transition-colors"
                  aria-label="previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] transition-colors"
                  aria-label="next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 text-center py-2 text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] lowercase">
              <span>mon</span>
              <span>tue</span>
              <span>wed</span>
              <span>thu</span>
              <span>fri</span>
              <span>sat</span>
              <span>sun</span>
            </div>

            {/* Calendar Cells */}
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5 pt-1">
              {calendarCells.map((dateStr, idx) => {
                if (!dateStr) {
                  return <div key={`empty-${idx}`} className="h-14 sm:h-16" />;
                }

                const dayNum = parseInt(dateStr.split('-')[2], 10);
                const isSelected = dateStr === selectedDate;
                const dayOrderInfo = getDayOrderForDate(dateStr);
                
                // Check if any event falls on this date
                const hasEvents = allEvents.filter(e => {
                  if (e.date === dateStr) return true;
                  if (e.endDate && dateStr >= e.date && dateStr <= e.endDate) return true;
                  return false;
                });

                const hasHoliday = hasEvents.some(e => e.category === 'holiday') || !dayOrderInfo.isWorkingDay;
                const hasExam = hasEvents.some(e => e.category === 'exam');

                return (
                  <button
                    key={dateStr}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`h-14 sm:h-16 p-1 sm:p-1.5 rounded-2xl flex flex-col justify-between items-center transition-all ${
                      isSelected
                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-md font-bold'
                        : 'bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/5 dark:hover:bg-white/5 border border-black/[0.04] dark:border-white/[0.04]'
                    }`}
                  >
                    <span className="text-xs tabular-nums leading-none">
                      {dayNum}
                    </span>

                    <div className="flex flex-col items-center space-y-0.5">
                      {dayOrderInfo.isWorkingDay && dayOrderInfo.dayOrder > 0 ? (
                        <span className={`text-[9px] px-1 rounded ${
                          isSelected 
                            ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black font-semibold' 
                            : 'text-[#71717A] dark:text-[#A1A1AA]'
                        }`}>
                          do {dayOrderInfo.dayOrder}
                        </span>
                      ) : (
                        <span className="text-[9px] text-rose-500/70">off</span>
                      )}

                      {/* Event dot indicators */}
                      {hasEvents.length > 0 && (
                        <div className="flex items-center space-x-0.5">
                          {hasExam && <span className="w-1 h-1 rounded-full bg-amber-400" />}
                          {hasHoliday && <span className="w-1 h-1 rounded-full bg-rose-400" />}
                          {!hasExam && !hasHoliday && <span className="w-1 h-1 rounded-full bg-indigo-400" />}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-xs text-[#71717A] dark:text-[#A1A1AA]">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>examinations</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>holidays</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>milestones</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>fests</span>
            </span>
          </div>
        </div>

        {/* 2. Selected Date Detail (col-span-12 lg:col-span-5) */}
        <div className="col-span-12 lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
              <span className="text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA] lowercase">
                selected date overview
              </span>
              <span className="text-xs font-bold text-[#111111] dark:text-[#FAFAFA]">
                {selectedDate}
              </span>
            </div>

            {/* Day Order / Holiday Status Banner */}
            <div className="my-4 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                    {selectedDayInfo.isWorkingDay ? `cycle day order ${selectedDayInfo.dayOrder}` : 'holiday / non-instructional'}
                  </div>
                  <div className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-0.5 lowercase">
                    {selectedDayInfo.holidayName || 'regular academic cycle'}
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                  selectedDayInfo.isWorkingDay 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                }`}>
                  {selectedDayInfo.isWorkingDay ? 'classes scheduled' : 'recess'}
                </span>
              </div>
            </div>

            {/* Events on this date */}
            {selectedEvents.length > 0 && (
              <div className="space-y-2 mb-4">
                <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
                  scheduled milestones on this date
                </span>
                {selectedEvents.map(e => (
                  <div key={e.id} className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">{e.title}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getCategoryBadge(e.category)}`}>
                        {e.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] mt-1 lowercase">
                      {e.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Classes scheduled on this day */}
            <div>
              <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase mb-2 block">
                timetable lectures ({selectedClasses.length})
              </span>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedClasses.length === 0 ? (
                  <div className="py-4 text-center text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
                    no classes scheduled
                  </div>
                ) : (
                  selectedClasses.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs">
                      <div className="min-w-0 pr-2">
                        <div className="font-semibold truncate lowercase text-[#111111] dark:text-[#FAFAFA]">
                          {formatCourseTitle(s.courseTitle)}
                        </div>
                        <div className="text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                          {s.courseCode} • {s.timeRange}
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] shrink-0">
                        {s.room}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Upcoming Semester Milestones & Examinations (col-span-12) */}
        <div className="col-span-12 bento-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06] gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                {showUpcomingOnly ? 'upcoming semester milestones' : 'semester milestones & deadlines'} ({filteredEvents.length})
              </h2>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                {showUpcomingOnly
                  ? 'chronological roadmap of upcoming internal tests, university examinations and vacations'
                  : 'chronological roadmap of internal tests, university examinations and university vacations'}
              </p>
            </div>

            <div className="flex items-center space-x-1.5 self-start sm:self-center">
              <button
                type="button"
                onClick={() => setShowUpcomingOnly(true)}
                className={`px-2.5 py-1 rounded-xl text-xs lowercase transition-colors cursor-pointer ${
                  showUpcomingOnly
                    ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA] font-bold'
                    : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                upcoming only
              </button>
              <button
                type="button"
                onClick={() => setShowUpcomingOnly(false)}
                className={`px-2.5 py-1 rounded-xl text-xs lowercase transition-colors cursor-pointer ${
                  !showUpcomingOnly
                    ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA] font-bold'
                    : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                all semester
              </button>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="p-12 text-center text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
              no upcoming milestones or deadlines scheduled for this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {filteredEvents.map(e => (
                <div
                  key={e.id}
                  onClick={() => setSelectedDate(e.date)}
                  className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] hover:border-black/20 dark:hover:border-white/20 cursor-pointer transition-all flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getCategoryBadge(e.category)}`}>
                        {e.category}
                      </span>
                      <span className="text-xs font-bold text-[#111111] dark:text-[#FAFAFA]">
                        {e.date}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold lowercase text-[#111111] dark:text-[#FAFAFA] mt-2">
                      {e.title}
                    </h3>
                    <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1 leading-relaxed">
                      {e.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px]">
                    <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase">
                      {e.isWorkingDay ? (e.dayOrder ? `day order ${e.dayOrder}` : 'instructional') : 'non-working'}
                    </span>
                    <span className="text-indigo-400 lowercase">select date →</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
};
