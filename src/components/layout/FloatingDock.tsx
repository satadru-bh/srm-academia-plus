import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, THEME_DETAILS } from '../../context/SessionContext';
import {
  LayoutGrid,
  CheckCircle,
  Award,
  CalendarDays,
  CalendarRange,
  Calendar,
  User,
  RefreshCw,
  MoreHorizontal,
  BookOpen,
  Users
} from 'lucide-react';

interface FloatingDockProps {
  activeTab: 'overview' | 'attendance' | 'timetable' | 'marks' | 'calendar' | 'exam-timetable' | 'profile' | 'notes' | 'faculty';
  setActiveTab: (tab: 'overview' | 'attendance' | 'timetable' | 'marks' | 'calendar' | 'exam-timetable' | 'profile' | 'notes' | 'faculty') => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ activeTab, setActiveTab }) => {
  const { theme, cycleTheme, isSyncing, refreshData } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click or touch
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Primary 4 everyday tabs in the dock
  const primaryTabs = [
    { id: 'overview' as const, label: 'at a glance', icon: LayoutGrid },
    { id: 'attendance' as const, label: 'attendance', icon: CheckCircle },
    { id: 'timetable' as const, label: 'timetable', icon: CalendarDays },
    { id: 'marks' as const, label: 'marks', icon: Award },
  ];

  // Secondary items in the "more" menu
  const secondaryTabs = [
    { id: 'notes' as const, label: 'notes & pyqs', desc: 'unit-wise notes, slide decks & previous papers', icon: BookOpen },
    { id: 'faculty' as const, label: 'faculty finder', desc: 'cabins, contacts & advisors in tp & ub', icon: Users },
    { id: 'exam-timetable' as const, label: 'exam timetable', desc: 'semester 3 end semester dates & hall ticket', icon: CalendarRange },
    { id: 'calendar' as const, label: 'academic calendar', desc: '2026 day orders, holidays & milestones', icon: Calendar },
    { id: 'profile' as const, label: 'profile & portals', desc: 'academia & student portal authentication', icon: User },
  ];

  const isSecondaryActive = secondaryTabs.some(t => t.id === activeTab);
  const activeThemeInfo = THEME_DETAILS[theme] || THEME_DETAILS['light'];

  return (
    <div ref={menuRef} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none">
      {/* Animated Floating Popover "More" Menu: Explicitly fixed directly above the dock */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] sm:w-80 bento-card p-3 shadow-2xl border border-black/10 dark:border-white/10 backdrop-blur-xl z-50"
          >
            <div className="px-3 py-1.5 text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA] lowercase tracking-tight">
              more workspace views
            </div>

            <div className="space-y-1 mt-1">
              {secondaryTabs.map((item) => {
                const Icon = item.icon;
                const isSelected = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    style={
                      isSelected
                        ? {
                            backgroundColor: 'var(--color-accent)',
                            color: 'var(--color-accent-text)'
                          }
                        : undefined
                    }
                    className={`w-full flex items-center space-x-3 p-2.5 rounded-2xl text-left transition-colors ${
                      isSelected
                        ? 'dock-item-selected font-bold'
                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#111111] dark:text-[#FAFAFA]'
                    }`}
                  >
                    <div
                      style={
                        isSelected
                          ? {
                              backgroundColor: 'var(--color-accent-sub)',
                              color: 'var(--color-accent-text)'
                            }
                          : undefined
                      }
                      className={`p-2 rounded-xl ${
                        isSelected
                          ? 'palette-icon-box font-semibold'
                          : 'bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold lowercase">
                        {item.label}
                      </div>
                      <div
                        style={isSelected ? { color: 'var(--color-accent-text)' } : undefined}
                        className={`text-[10px] truncate ${
                          isSelected ? 'opacity-85' : 'text-[#71717A] dark:text-[#A1A1AA]'
                        }`}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Glass Capsule Dock */}
      <nav className="flex items-center p-1.5 rounded-full glass-dock max-w-[95vw] shadow-2xl">
        <div className="flex items-center space-x-1">
          {primaryTabs.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className="relative h-9 px-3 sm:px-4 rounded-full text-xs font-semibold transition-all inline-flex items-center justify-center overflow-hidden active:scale-95 cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-dock-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
                    className="absolute inset-0 rounded-full bg-[var(--color-bento-sub)] dark:bg-[#202025] border border-black/10 dark:border-white/10 shadow-sm"
                  />
                )}
                <span
                  className={`relative z-10 inline-flex items-center justify-center gap-2 text-xs font-semibold leading-none ${
                    isActive
                      ? 'text-[#09090B] dark:text-[#FAFAFA]'
                      : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="hidden sm:inline lowercase tracking-tight">{item.label}</span>
                </span>
              </button>
            );
          })}

          {/* More Menu Pill Button */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            title="more views & options"
            aria-label="more options"
            className={`relative h-9 px-3 sm:px-4 rounded-full text-xs font-semibold transition-colors inline-flex items-center justify-center gap-2 leading-none ${
              isSecondaryActive || isMenuOpen
                ? 'bg-black/10 dark:bg-white/10 text-[#09090B] dark:text-[#FAFAFA]'
                : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
            }`}
          >
            <MoreHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline lowercase tracking-tight">more</span>
          </button>
        </div>

        <div className="h-4 w-px bg-black/10 dark:bg-white/10 mx-2 shrink-0" />

        {/* Sync and Theme Quick Controls */}
        <div className="flex items-center space-x-1 pr-1">
          <button
            onClick={refreshData}
            disabled={isSyncing}
            title="sync live student data"
            aria-label="sync live student data"
            className="p-2 rounded-full text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:bg-black/5 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
          </button>

          {/* Theme Quick Cycle Button */}
          <button
            onClick={cycleTheme}
            title={`current theme: ${activeThemeInfo.name} • click to cycle`}
            aria-label="cycle theme"
            className="p-2 rounded-full text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center"
          >
            <span
              className="w-3.5 h-3.5 rounded-full border border-black/20 dark:border-white/20 transition-transform hover:scale-110 shadow-sm"
              style={{ backgroundColor: activeThemeInfo.accent }}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};
