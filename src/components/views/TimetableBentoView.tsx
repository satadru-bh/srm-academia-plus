import React, { useState, useRef } from 'react';
import { useSession } from '../../context/SessionContext';
import { MapPin, LayoutGrid, ListFilter } from 'lucide-react';
import { TimetableSlot, hasAssignedVenue } from '../../api/types';
import { formatCourseTitle } from '../../api/grades';
import { REAL_TIMETABLE_DATA } from '../../data/studentData';
import {
  InteractiveBentoCard,
  StaggerContainer,
  StaggerItem,
  SpringPress,
} from '../common/motion';

export const TimetableBentoView: React.FC = () => {
  const { user, timetable, currentDayOrder, openFaculty } = useSession();
  const [viewMode, setViewMode] = useState<'grid' | 'cards'>('grid');
  const [selectedDayOrder, setSelectedDayOrder] = useState<number>(currentDayOrder > 0 ? currentDayOrder : 1);
  const timetableRef = useRef<HTMLDivElement>(null);

  // Automatic batch detection from student profile (locks to allocated batch)
  const activeBatch = user?.profile?.batch
    ? Number(user.profile.batch)
    : (user?.profile?.comboBatch?.startsWith('1') ? 1 : 2);

  const daysList = [1, 2, 3, 4, 5];

  // Standard SRM Periods & Timings
  const periods = [
    { id: 1, name: 'period 1', time: '08:00 - 08:50', batch: 'b1' },
    { id: 2, name: 'period 2', time: '08:50 - 09:40', batch: 'b1' },
    { id: 3, name: 'period 3', time: '09:45 - 10:35', batch: 'b1' },
    { id: 4, name: 'period 4', time: '10:40 - 11:30', batch: 'b1' },
    { id: 5, name: 'period 5', time: '11:35 - 12:25', batch: 'b1' },
    { id: 6, name: 'period 6', time: '12:30 - 01:20', batch: 'b2' },
    { id: 7, name: 'period 7', time: '01:25 - 02:15', batch: 'b2' },
    { id: 8, name: 'period 8', time: '02:20 - 03:10', batch: 'b2' },
    { id: 9, name: 'period 9', time: '03:10 - 04:00', batch: 'b2' },
    { id: 10, name: 'period 10', time: '04:00 - 04:50', batch: 'b2' },
    { id: 11, name: 'period 11', time: '04:50 - 05:30', batch: 'b2' },
    { id: 12, name: 'period 12', time: '05:30 - 06:10', batch: 'b2' },
  ];

  // Check if current time falls within startPeriod to endPeriod on dayOrder during active session
  const isSlotOngoing = (dayOrder: number, startPeriodId: number, endPeriodId: number): boolean => {
    if (dayOrder !== currentDayOrder || currentDayOrder <= 0) return false;
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const periodTimes: Record<number, { start: number; end: number }> = {
      1: { start: 8 * 60, end: 8 * 60 + 50 },
      2: { start: 8 * 60 + 50, end: 9 * 60 + 40 },
      3: { start: 9 * 60 + 45, end: 10 * 60 + 35 },
      4: { start: 10 * 60 + 40, end: 11 * 60 + 30 },
      5: { start: 11 * 60 + 35, end: 12 * 60 + 25 },
      6: { start: 12 * 60 + 30, end: 13 * 60 + 20 },
      7: { start: 13 * 60 + 25, end: 14 * 60 + 15 },
      8: { start: 14 * 60 + 20, end: 15 * 60 + 10 },
      9: { start: 15 * 60 + 10, end: 16 * 60 },
      10: { start: 16 * 60, end: 16 * 60 + 50 },
      11: { start: 16 * 60 + 50, end: 17 * 60 + 30 },
      12: { start: 17 * 60 + 30, end: 18 * 60 + 10 },
    };

    const start = periodTimes[startPeriodId]?.start;
    const end = periodTimes[endPeriodId]?.end;
    if (start === undefined || end === undefined) return false;

    return currentMinutes >= start && currentMinutes < end;
  };

  // Helper to find slot for a specific day and period with foolproof fallback
  const getSlotForDayAndPeriod = (dayOrder: number, periodIdx: number): TimetableSlot | undefined => {
    const rawSlots = timetable?.days?.[dayOrder];
    const daySlots = (rawSlots && rawSlots.length === 12 && rawSlots.some((s) => s.courseCode && s.courseCode !== '-'))
      ? rawSlots
      : (REAL_TIMETABLE_DATA.days[dayOrder] || []);
    return daySlots[periodIdx];
  };

  // Helper to identify lab/practical slots vs theory slots dynamically
  const isLabSlot = (slot: TimetableSlot | undefined): boolean => {
    if (!slot || !slot.courseCode || slot.courseCode === '-') return false;
    const code = slot.courseCode.toUpperCase().trim();
    const title = (slot.courseTitle || '').toLowerCase();
    const room = (slot.room || '').toLowerCase();

    if (code.endsWith('P') || code.endsWith('L')) return true;
    if (title.includes('lab') || title.includes('practical')) return true;
    if (room.includes('lab') || room.includes('ub 7') || room.includes('ub-7') || room.startsWith('ub')) return true;

    return false;
  };

  interface MergedPeriodGroup {
    slot: TimetableSlot;
    colSpan: number;
    startPeriod: typeof periods[0];
    endPeriod: typeof periods[0];
    isLab: boolean;
    hasClass: boolean;
    timeRangeDisplay: string;
    slotRangeDisplay: string;
  }

  // Merge consecutive periods of the EXACT same class into single grouped cells
  const getGroupedSlotsForDay = (day: number): MergedPeriodGroup[] => {
    const groups: MergedPeriodGroup[] = [];
    let pIdx = 0;

    while (pIdx < periods.length) {
      const currentPeriod = periods[pIdx];
      const slot = getSlotForDayAndPeriod(day, pIdx);
      const hasClass = Boolean(
        slot &&
        slot.courseCode &&
        slot.courseCode !== '-' &&
        slot.courseTitle &&
        slot.courseTitle !== 'Free Period' &&
        slot.courseTitle !== 'No class' &&
        hasAssignedVenue(slot.room)
      );

      if (!hasClass || !slot) {
        groups.push({
          slot: slot || {
            slotName: currentPeriod.name,
            timeRange: currentPeriod.time,
            courseCode: '-',
            courseTitle: 'Free Period',
            faculty: '',
            room: '',
            dayOrder: day,
          },
          colSpan: 1,
          startPeriod: currentPeriod,
          endPeriod: currentPeriod,
          isLab: false,
          hasClass: false,
          timeRangeDisplay: currentPeriod.time,
          slotRangeDisplay: 'free',
        });
        pIdx++;
        continue;
      }

      // Merge consecutive periods of the exact same class (same courseCode and room)
      let lookAhead = pIdx + 1;
      while (lookAhead < periods.length) {
        const nextSlot = getSlotForDayAndPeriod(day, lookAhead);
        if (
          nextSlot &&
          nextSlot.courseCode === slot.courseCode &&
          (nextSlot.room || '') === (slot.room || '')
        ) {
          lookAhead++;
        } else {
          break;
        }
      }

      const span = lookAhead - pIdx;
      const startPeriod = currentPeriod;
      const endPeriod = periods[lookAhead - 1];

      const startTime = startPeriod.time.split('-')[0].trim();
      const endTime = endPeriod.time.split('-')[1]?.trim() || endPeriod.time;
      const timeRangeDisplay = span > 1 ? `${startTime} - ${endTime}` : slot.timeRange;

      const startSlotNum = slot.slotName.replace(/\D/g, '');
      const endSlotNum = getSlotForDayAndPeriod(day, lookAhead - 1)?.slotName.replace(/\D/g, '') || startSlotNum;
      const slotRangeDisplay = span > 1 ? `s${startSlotNum}–s${endSlotNum}` : `s${startSlotNum}`;

      const isLab = isLabSlot(slot);

      groups.push({
        slot,
        colSpan: span,
        startPeriod,
        endPeriod,
        isLab,
        hasClass: true,
        timeRangeDisplay,
        slotRangeDisplay,
      });

      pIdx = lookAhead;
    }

    return groups;
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
            cycle timetable
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
            srm official 5-day cycle schedule
          </p>
        </div>

        {/* Controls: Automatic Batch Indicator & View Mode */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Automatic Allocated Batch Badge */}
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-xs font-medium lowercase">
            <span className="font-bold text-[#111111] dark:text-[#FAFAFA]">combo batch {activeBatch}</span>
            <span className="text-[#71717A] dark:text-[#A1A1AA]">
              ({activeBatch === 2 ? 'afternoon theory' : 'morning theory'})
            </span>
          </div>

          {/* View mode switcher with tactile spring buttons */}
          <div className="flex items-center space-x-1 p-1 rounded-2xl bg-[var(--color-bento-card)] border border-black/[0.06] dark:border-white/[0.06]">
            <SpringPress
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium lowercase flex items-center space-x-1.5 transition-colors ${viewMode === 'grid'
                ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA] font-bold'
                : 'text-[#71717A] dark:text-[#A1A1AA]'
                }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>grid layout</span>
            </SpringPress>
            <SpringPress
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium lowercase flex items-center space-x-1.5 transition-colors ${viewMode === 'cards'
                ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA] font-bold'
                : 'text-[#71717A] dark:text-[#A1A1AA]'
                }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>day cards</span>
            </SpringPress>
          </div>
        </div>
      </div>

      {/* View Mode 1: Traditional Grid-Based Timetable Layout */}
      {viewMode === 'grid' && (
        <div ref={timetableRef} data-timetable="true" className="bento-card p-4 sm:p-6 overflow-hidden rounded-3xl">
          {/* Minimal Legend (No banner text, no viewing day text) */}
          <div className="flex items-center justify-end pb-3 text-[10px] text-[#71717A] dark:text-[#A1A1AA] space-x-3">
            <span className="flex items-center space-x-1 font-bold">
              <span className="text-blue-500 dark:text-blue-400">T</span>
              <span className="text-[#71717A] dark:text-[#A1A1AA] font-normal font-sans">theory</span>
            </span>
            <span className="flex items-center space-x-1 font-bold">
              <span className="text-emerald-500 dark:text-emerald-400">L</span>
              <span className="text-[#71717A] dark:text-[#A1A1AA] font-normal font-sans">lab</span>
            </span>
          </div>

          {/* Desktop & Tablet: Horizontally Scrollable Traditional Grid Table */}
          <div className="hidden md:block overflow-x-auto pb-4" style={{ contain: 'paint' }}>
            <table className="w-full min-w-[1360px] table-fixed border-collapse text-left">
              <colgroup>
                <col style={{ width: '112px' }} />
                {periods.map((p) => (
                  <col key={p.id} style={{ width: '104px' }} />
                ))}
              </colgroup>
              <thead>
                <tr className="border-b border-black/[0.08] dark:border-white/[0.08]">
                  {/* Sticky Day Order Column */}
                  <th className="p-3 text-xs font-bold lowercase text-[#111111] dark:text-[#FAFAFA] w-28 bg-[#FFFFFF] dark:bg-[#131316] sticky left-0 z-20">
                    day order
                  </th>

                  {/* Period Timing Headers (Zero Lunch Column) with Single-Line Whitespace-Nowrap */}
                  {periods.map((p) => (
                    <th key={p.id} className={`px-2 py-2.5 text-center ${(activeBatch === 2 && p.batch === 'b2') || (activeBatch === 1 && p.batch === 'b1')
                      ? 'bg-black/[0.02] dark:bg-white/[0.02]'
                      : 'opacity-70'
                      }`}>
                      <div className="text-[11px] font-bold text-[#111111] dark:text-[#FAFAFA] lowercase whitespace-nowrap">
                        {p.name}
                      </div>
                      <div className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] tabular-nums mt-0.5 whitespace-nowrap">
                        {p.time}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
                {daysList.map((day) => {
                  const isCurrentDay = currentDayOrder === day;

                  return (
                    <tr
                      key={day}
                      className={`transition-colors ${isCurrentDay
                        ? 'bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06]'
                        : 'hover:bg-black/[0.01] dark:hover:bg-white/[0.01]'
                        }`}
                    >
                      {/* Sticky Day Order Cell */}
                      <td className={`p-3 text-xs font-bold sticky left-0 z-10 ${isCurrentDay ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#FFFFFF] dark:bg-[#131316] text-[#111111] dark:text-[#FAFAFA]'
                        }`}>
                        <div className="flex items-center space-x-1.5">
                          <span>{`day ${day}`}</span>
                          {isCurrentDay && (
                            <span className="text-[10px] lowercase text-emerald-400 font-bold">(today)</span>
                          )}
                        </div>
                      </td>

                      {/* Merged Period Cells with Strictly Uniform Height & Interactive Bento Card Treatment */}
                      {getGroupedSlotsForDay(day).map((group) => {
                        const { slot, colSpan, isLab, hasClass, slotRangeDisplay } = group;
                        const isOngoing = hasClass && isSlotOngoing(day, group.startPeriod.id, group.endPeriod.id);

                        return (
                          <td
                            key={group.startPeriod.id}
                            colSpan={colSpan}
                            className="p-1 align-top h-[92px]"
                          >
                            {hasClass ? (
                              <InteractiveBentoCard
                                enableTilt={false}
                                className={`p-2 rounded-[3px] timetable-period-card flex flex-col justify-between h-[92px] max-h-[92px] overflow-hidden transition-all select-none ${isOngoing
                                  ? 'ring-2 ring-emerald-500/50 shadow-sm shadow-emerald-500/20'
                                  : ''
                                  } ${isLab
                                    ? 'bg-emerald-500/[0.05] dark:bg-emerald-500/[0.10]'
                                    : 'bg-blue-500/[0.04] dark:bg-blue-500/[0.08]'
                                  }`}
                              >
                                {/* Top Row: Course Code, Live Indicator & Clean Colored T/L Tag */}
                                <div className="flex items-center justify-between gap-1 leading-none shrink-0">
                                  <div className="flex items-center space-x-1.5 truncate">
                                    <span className="font-bold text-[11px] text-[#111111] dark:text-[#FAFAFA] truncate">
                                      {slot.courseCode}
                                    </span>
                                    {isOngoing && (
                                      <span className="inline-flex items-center space-x-1 px-1 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-[8px] font-bold text-emerald-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                        <span className="leading-none">live</span>
                                      </span>
                                    )}
                                  </div>
                                  <span
                                    className={`font-bold text-xs shrink-0 ${isLab ? 'text-emerald-500 dark:text-emerald-400' : 'text-blue-500 dark:text-blue-400'
                                      }`}
                                    title={isLab ? 'Lab' : 'Theory'}
                                  >
                                    {isLab ? 'L' : 'T'}
                                  </span>
                                </div>

                                {/* Middle Area: Maximum Vertical Space for Subject Name */}
                                <div className="flex-1 my-auto flex items-center overflow-hidden py-0.5">
                                  <div className="text-[10px] font-medium text-[#71717A] dark:text-[#A1A1AA] lowercase leading-snug line-clamp-2">
                                    {formatCourseTitle(slot.courseTitle)}
                                  </div>
                                </div>

                                {/* Bottom Row: Room & Slot Range Packed Tightly at Bottom with No Divider */}
                                <div className="flex items-center justify-between text-[9px] text-[#71717A] dark:text-[#A1A1AA] leading-none shrink-0 pt-0.5">
                                  <span className="truncate max-w-[65%]">{slot.room || 'tp 706'}</span>
                                  <span
                                    className={`font-bold tabular-nums shrink-0 ${isLab ? 'text-emerald-500 dark:text-emerald-400' : 'text-blue-500 dark:text-blue-400'
                                      }`}
                                  >
                                    {slotRangeDisplay}
                                  </span>
                                </div>
                              </InteractiveBentoCard>
                            ) : (
                              <div className="h-[92px] max-h-[92px] w-full rounded-[3px] bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center text-[10px] text-[#71717A] dark:text-[#52525B]">
                                free
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile / Vertical Mode: Timetable Vertical with StaggerContainer */}
          <StaggerContainer className="block md:hidden space-y-4">
            {daysList.map((day) => {
              const dayGroups = getGroupedSlotsForDay(day);
              const classesForDay = dayGroups.filter((g) => g.hasClass);
              const isCurrentDay = currentDayOrder === day;

              return (
                <StaggerItem
                  key={day}
                  className={`p-4 rounded-2xl timetable-day-card transition-all ${isCurrentDay
                    ? 'bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05]'
                    : 'bg-[#FFFFFF] dark:bg-[#131316]'
                    }`}
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA] lowercase">
                        {`day ${day}`}
                      </span>
                      {isCurrentDay && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 lowercase">
                          today
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                      {classesForDay.length} {classesForDay.length === 1 ? 'class' : 'classes'}
                    </span>
                  </div>

                  {classesForDay.length === 0 ? (
                    <div className="py-6 text-center text-xs text-[#71717A] dark:text-[#52525B]">
                      no lectures scheduled
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {classesForDay.map((group) => {
                        const { slot, isLab, startPeriod, endPeriod, slotRangeDisplay } = group;
                        const startTime = startPeriod.time.split(' - ')[0];
                        const endTime = endPeriod.time.split(' - ')[1];
                        const isOngoing = isSlotOngoing(day, startPeriod.id, endPeriod.id);

                        return (
                          <InteractiveBentoCard
                            key={group.startPeriod.id}
                            enableTilt={false}
                            className={`p-3 rounded-[3px] timetable-period-card flex flex-col gap-1.5 transition-all ${isOngoing ? 'ring-2 ring-emerald-500/50 shadow-sm shadow-emerald-500/20' : ''
                              } ${isLab
                                ? 'bg-emerald-500/[0.05] dark:bg-emerald-500/[0.10]'
                                : 'bg-blue-500/[0.04] dark:bg-blue-500/[0.08]'
                              }`}
                          >
                            <div className="flex items-center justify-between gap-2 leading-none">
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-xs text-[#111111] dark:text-[#FAFAFA]">
                                  {slot.courseCode}
                                </span>
                                {isOngoing && (
                                  <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-bold text-emerald-500">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span>live</span>
                                  </span>
                                )}
                                <span
                                  className={`font-bold text-xs ${isLab ? 'text-emerald-500 dark:text-emerald-400' : 'text-blue-500 dark:text-blue-400'
                                    }`}
                                  title={isLab ? 'Lab' : 'Theory'}
                                >
                                  {isLab ? 'L' : 'T'}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                                <span className="tabular-nums">{startTime} – {endTime}</span>
                                <span
                                  className={`font-bold ${isLab ? 'text-emerald-500 dark:text-emerald-400' : 'text-blue-500 dark:text-blue-400'
                                    }`}
                                >
                                  {slotRangeDisplay}
                                </span>
                              </div>
                            </div>

                            <div className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] lowercase leading-snug">
                              {formatCourseTitle(slot.courseTitle)}
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA] pt-1 border-t border-black/[0.04] dark:border-white/[0.04]">
                              <span>{slot.room || 'tp 706'}</span>
                              {slot.faculty ? (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openFaculty(slot.faculty);
                                  }}
                                  className="truncate max-w-[60%] hover:underline hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer text-right"
                                  title="view faculty in finder"
                                >
                                  {slot.faculty}
                                </button>
                              ) : (
                                <span className="truncate max-w-[60%]"></span>
                              )}
                            </div>
                          </InteractiveBentoCard>
                        );
                      })}
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Watermark at the bottom of the card */}
          <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
            <span>academia plus • srm academic intelligence</span>
            <span>batch {activeBatch} • 5-day cycle timetable</span>
          </div>
        </div>
      )}

      {/* View Mode 2: Day-by-Day Cards View */}
      {viewMode === 'cards' && (
        <div data-timetable="true" className="space-y-6">
          {/* Day Selector Pills with SpringPress tactile feedback */}
          <div className="flex items-center space-x-1.5 p-1 rounded-2xl bg-[#FFFFFF] dark:bg-[#131316] border border-black/[0.06] dark:border-white/[0.06] self-start overflow-x-auto">
            {daysList.map((day) => {
              const isSelected = selectedDayOrder === day;
              const isToday = currentDayOrder === day;

              return (
                <SpringPress
                  key={day}
                  onClick={() => setSelectedDayOrder(day)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium lowercase transition-colors shrink-0 flex items-center space-x-1.5 ${isSelected
                    ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA] font-bold'
                    : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                    }`}
                >
                  <span>{`day ${day}`}</span>
                  {isToday && (
                    <span className="text-[10px] text-emerald-400 font-bold lowercase">today</span>
                  )}
                </SpringPress>
              );
            })}
          </div>

          {/* Cards for selected day wrapped in StaggerContainer & StaggerItem */}
          {getGroupedSlotsForDay(selectedDayOrder).filter((g) => g.hasClass).length === 0 ? (
            <InteractiveBentoCard className="p-12 text-center text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase rounded-[4px] timetable-day-card">
              no lectures scheduled for day order {selectedDayOrder}
            </InteractiveBentoCard>
          ) : (
            <StaggerContainer
              key={selectedDayOrder}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {getGroupedSlotsForDay(selectedDayOrder)
                .filter((g) => g.hasClass)
                .map((group, index) => {
                  const { slot, isLab, slotRangeDisplay, timeRangeDisplay } = group;
                  const isOngoing = isSlotOngoing(selectedDayOrder, group.startPeriod.id, group.endPeriod.id);

                  return (
                    <StaggerItem key={index}>
                      <InteractiveBentoCard
                        className={`p-6 flex flex-col justify-between rounded-[4px] timetable-period-card ${isOngoing ? 'ring-2 ring-emerald-500/50 shadow-sm shadow-emerald-500/20' : ''
                          } ${isLab
                            ? 'bg-emerald-500/[0.03] dark:bg-emerald-500/[0.06]'
                            : 'bg-blue-500/[0.03] dark:bg-blue-500/[0.05]'
                          }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3 text-xs">
                            <div className="flex items-center space-x-2">
                              <span
                                className={`font-bold tabular-nums ${isLab ? 'text-emerald-500 dark:text-emerald-400' : 'text-blue-500 dark:text-blue-400'
                                  }`}
                              >
                                {timeRangeDisplay}
                              </span>
                              {isOngoing && (
                                <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 text-[10px] font-bold border border-emerald-500/25">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                  <span>live</span>
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span
                                className={`font-bold text-xs ${isLab ? 'text-emerald-500 dark:text-emerald-400' : 'text-blue-500 dark:text-blue-400'
                                  }`}
                                title={isLab ? 'Lab' : 'Theory'}
                              >
                                {isLab ? 'L' : 'T'}
                              </span>
                              <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] uppercase">
                                {slotRangeDisplay}
                              </span>
                            </div>
                          </div>

                          <h3 className="text-base font-bold lowercase text-[#111111] dark:text-[#FAFAFA]">
                            {formatCourseTitle(slot.courseTitle)}
                          </h3>

                          {slot.courseCode && (
                            <div className="mt-1.5 text-xs text-[#71717A] dark:text-[#A1A1AA]">
                              {slot.courseCode}
                            </div>
                          )}
                        </div>

                        <div className="mt-6 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs">
                          {slot.room ? (
                            <span className="inline-flex items-center space-x-1 text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
                              <MapPin className="w-3 h-3 text-emerald-400" />
                              <span>{slot.room}</span>
                            </span>
                          ) : (
                            <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
                              classroom pending
                            </span>
                          )}
                          {slot.faculty ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                openFaculty(slot.faculty);
                              }}
                              className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:underline transition-colors cursor-pointer"
                              title="view faculty in finder"
                            >
                              {slot.faculty}
                            </button>
                          ) : (
                            <span className="text-[11px] text-emerald-400 lowercase">
                              scheduled
                            </span>
                          )}
                        </div>
                      </InteractiveBentoCard>
                    </StaggerItem>
                  );
                })}
            </StaggerContainer>
          )}
        </div>
      )}
    </div>
  );
};
