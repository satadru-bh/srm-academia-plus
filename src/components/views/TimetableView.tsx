import React, { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { Calendar, MapPin } from 'lucide-react';
import { hasAssignedVenue } from '../../api/types';
import { stripEmployeeId } from '../../utils/facultyMatcher';

export const TimetableView: React.FC = () => {
  const { timetable, currentDayOrder, openFaculty } = useSession();
  const [selectedDayOrder, setSelectedDayOrder] = useState<number>(currentDayOrder);
  const [activeBatch, setActiveBatch] = useState<number>(2);

  const daysList = [1, 2, 3, 4, 5];
  const activeSlots = timetable?.days[selectedDayOrder] || [];

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Timetable & Day Orders
          </h2>
          <p className="text-sm text-[#6E6E73] dark:text-[#98989D] mt-1">
            SRM 5-day cycle schedule for Batch {activeBatch}
          </p>
        </div>

        {/* Day Order Cycle & Batch Selector */}
        <div className="flex flex-wrap items-center gap-2 self-start">
          <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
            <button
              onClick={() => setActiveBatch(1)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                activeBatch === 1
                  ? 'bg-[#007AFF] text-white dark:bg-[#0A84FF]'
                  : 'text-[#6E6E73] dark:text-[#98989D]'
              }`}
            >
              Batch 1
            </button>
            <button
              onClick={() => setActiveBatch(2)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                activeBatch === 2
                  ? 'bg-[#007AFF] text-white dark:bg-[#0A84FF]'
                  : 'text-[#6E6E73] dark:text-[#98989D]'
              }`}
            >
              Batch 2
            </button>
          </div>

          <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
            {daysList.map((day) => {
              const isSelected = selectedDayOrder === day;
              const isToday = currentDayOrder === day;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDayOrder(day)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-[#007AFF] text-white dark:bg-[#0A84FF]'
                      : 'text-[#6E6E73] dark:text-[#98989D] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                  }`}
                >
                  <span>Day {day}</span>
                  {isToday && (
                    <span className="ml-1 w-1.5 h-1.5 inline-block rounded-full bg-[#34C759] dark:bg-[#30D158]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slots Table / List */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.08] dark:border-white/[0.10]">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" />
            <span className="font-semibold text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
              Day Order {selectedDayOrder} Schedule
            </span>
          </div>
          <span className="text-xs text-[#6E6E73] dark:text-[#98989D]">
            {activeSlots.filter(s => s.courseTitle !== 'Free Period' && s.courseTitle !== 'No class' && hasAssignedVenue(s.room)).length} Lectures
          </span>
        </div>

        <div className="space-y-3">
          {activeSlots.map((slot, index) => {
            const isFree = slot.courseTitle === 'Free Period' || slot.courseTitle === 'No class' || !hasAssignedVenue(slot.room);

            return (
              <div
                key={index}
                className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                  isFree
                    ? 'bg-[#F5F5F7]/50 dark:bg-[#2C2C2E]/30 border-dashed border-black/[0.06] dark:border-white/[0.06] text-[#86868B]'
                    : 'bg-white dark:bg-[#2C2C2E] border-black/[0.08] dark:border-white/[0.10]'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-28 shrink-0">
                    <span className="text-xs font-semibold tabular-nums text-[#007AFF] dark:text-[#0A84FF] block">
                      {slot.timeRange}
                    </span>
                    <span className="text-[10px] text-[#86868B] uppercase tracking-wider">
                      {slot.slotName}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className={`text-sm font-semibold truncate ${isFree ? 'text-[#86868B]' : 'text-[#1D1D1F] dark:text-[#F5F5F7]'}`}>
                      {slot.courseTitle}
                    </div>
                    {!isFree && (
                      <div className="flex items-center space-x-2 text-xs text-[#6E6E73] dark:text-[#98989D] mt-0.5">
                        {slot.courseCode && slot.courseCode !== '-' && (
                          <span className="text-[#007AFF] dark:text-[#0A84FF]">{slot.courseCode}</span>
                        )}
                        {slot.faculty && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openFaculty(slot.faculty);
                            }}
                            className="hover:underline hover:text-[#007AFF] dark:hover:text-[#0A84FF] transition-colors cursor-pointer text-left"
                            title="view faculty in finder"
                          >
                            {stripEmployeeId(slot.faculty)}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {!isFree && (
                  <div className="flex items-center space-x-2 self-start sm:self-auto shrink-0">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#007AFF]/10 text-[#007AFF] dark:text-[#0A84FF] border border-[#007AFF]/20">
                      <MapPin className="w-3 h-3" />
                      <span>{slot.room}</span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
