import React, { useState, useEffect } from 'react';
import { useSession } from '../../context/SessionContext';
import { Wrench, X, RotateCcw, Clock, Calendar, Play, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Checks whether the current environment is strictly localhost / 127.0.0.1.
 * Never executes on public production deployments.
 */
export const isLocalhost = (hostname?: string): boolean => {
  if (hostname !== undefined) {
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
  }
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1' || host === '[::1]';
};

interface PresetScenario {
  label: string;
  desc: string;
  date: string;
  time: string;
  badge: string;
}

const PRESET_SCENARIOS: PresetScenario[] = [
  {
    label: 'day 1 • period 6 (class live)',
    desc: 'transforms & bvp lecture ongoing',
    date: '2026-11-19',
    time: '12:45',
    badge: 'live lecture'
  },
  {
    label: 'day 1 • period 8 (class live)',
    desc: 'operating systems lecture ongoing',
    date: '2026-11-19',
    time: '14:30',
    badge: 'live lecture'
  },
  {
    label: 'day 3 • period 8 (lab live)',
    desc: 'advanced programming practice lab ongoing',
    date: '2026-11-17',
    time: '14:30',
    badge: 'live lab'
  },
  {
    label: 'study holiday (prep break)',
    desc: 'official study holiday before end-sems',
    date: '2026-11-24',
    time: '10:00',
    badge: 'study holiday'
  },
  {
    label: 'end-sem exam day (slot a)',
    desc: '21mab201t afternoon theory exam',
    date: '2026-11-25',
    time: '14:00',
    badge: 'end-sem exam'
  },
  {
    label: 'sunday weekend (holiday)',
    desc: 'regular weekend university holiday',
    date: '2026-11-22',
    time: '11:00',
    badge: 'holiday'
  }
];

export const DevConsole: React.FC<{ forceShow?: boolean }> = ({ forceShow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();
  const {
    todayDateStr,
    currentTime,
    currentDayOrder,
    isHoliday,
    holidayName,
    isSimulated,
    setSimulatedDate,
    setSimulatedTime,
    resetSimulation
  } = session;

  const [inputDate, setInputDate] = useState(todayDateStr);
  const [inputTime, setInputTime] = useState(currentTime.formattedTime);

  // Keep local inputs in sync when simulation changes externally
  useEffect(() => {
    setInputDate(todayDateStr);
  }, [todayDateStr]);

  useEffect(() => {
    setInputTime(currentTime.formattedTime);
  }, [currentTime.formattedTime]);

  // Global Ctrl + Shift + D shortcut to toggle console
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Strictly localhost check (never renders in non-localhost production environments)
  if (!forceShow && (typeof window === 'undefined' || !isLocalhost())) {
    return null;
  }

  const handleApplyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputDate) setSimulatedDate(inputDate);
    if (inputTime) setSimulatedTime(inputTime);
  };

  const handleApplyPreset = (preset: PresetScenario) => {
    setSimulatedDate(preset.date);
    setSimulatedTime(preset.time);
  };

  return (
    <>
      {/* Floating Mini Toggle Trigger Pill on Bottom-Left */}
      <div className="fixed bottom-5 left-5 z-50 select-none">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-md transition-all cursor-pointer border ${
            isSimulated
              ? 'bg-amber-500/15 border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/25'
              : 'bg-black/80 dark:bg-zinc-900/90 border-white/10 text-zinc-300 hover:bg-black dark:hover:bg-zinc-800'
          }`}
          title="Open Localhost Developer Scenario Console (Ctrl+Shift+D)"
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>dev</span>
          {isSimulated ? (
            <span className="flex items-center space-x-1 pl-1 text-[10px] font-bold text-amber-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>{currentTime.formattedTime}</span>
            </span>
          ) : (
            <span className="text-[10px] text-zinc-400">localhost</span>
          )}
        </button>
      </div>

      {/* Expandable Developer Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-start p-4 sm:p-6 pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs pointer-events-auto"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md bg-white dark:bg-[#141416] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl p-5 pointer-events-auto max-h-[90vh] overflow-y-auto space-y-4 text-[#111111] dark:text-[#FAFAFA]"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold lowercase tracking-tight">
                      developer scenario console
                    </h3>
                    <p className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                      localhost exclusive • date & time overrides
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5">
                  {isSimulated && (
                    <button
                      type="button"
                      onClick={resetSimulation}
                      className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer"
                      title="Reset to live real-time clock"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Current Active Status Indicator */}
              <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">
                    active session state
                  </div>
                  <div className="font-semibold text-xs mt-0.5 lowercase">
                    {todayDateStr} • {isHoliday ? `holiday (${holidayName || 'non-working'})` : `day order ${currentDayOrder}`}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">
                    clock
                  </div>
                  <div className="font-semibold text-xs mt-0.5 tabular-nums text-emerald-600 dark:text-emerald-400">
                    {currentTime.formattedTime}
                  </div>
                </div>
              </div>

              {/* Quick Scenario Presets */}
              <div className="space-y-2">
                <div className="text-xs font-semibold lowercase text-[#71717A] dark:text-[#A1A1AA] flex items-center justify-between">
                  <span>instant scenario presets</span>
                  <span className="text-[10px] text-amber-500 font-normal">tap to simulate</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {PRESET_SCENARIOS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyPreset(preset)}
                      className="w-full text-left p-2.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] hover:border-black/20 dark:hover:border-white/20 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-xs font-semibold lowercase truncate text-[#111111] dark:text-[#FAFAFA] group-hover:text-amber-500 transition-colors">
                          {preset.label}
                        </div>
                        <div className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase truncate">
                          {preset.desc}
                        </div>
                      </div>
                      <div className="shrink-0 flex items-center space-x-1.5">
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] font-mono">
                          {preset.time}
                        </span>
                        <Play className="w-3 h-3 text-[#71717A] group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Manual Date & Time Override Form */}
              <form onSubmit={handleApplyCustom} className="space-y-3 pt-2 border-t border-black/[0.06] dark:border-white/[0.06]">
                <div className="text-xs font-semibold lowercase text-[#71717A] dark:text-[#A1A1AA]">
                  manual override
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-medium text-[#71717A] dark:text-[#A1A1AA] mb-1 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>date</span>
                    </label>
                    <input
                      type="date"
                      value={inputDate}
                      onChange={(e) => setInputDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#111111] dark:text-[#FAFAFA] font-mono focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-[#71717A] dark:text-[#A1A1AA] mb-1 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>time</span>
                    </label>
                    <input
                      type="time"
                      value={inputTime}
                      onChange={(e) => setInputTime(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#111111] dark:text-[#FAFAFA] font-mono focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <button
                    type="submit"
                    className="flex-1 py-1.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>apply simulation</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetSimulation}
                    className="py-1.5 px-3 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] transition-colors cursor-pointer"
                  >
                    reset to live
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
