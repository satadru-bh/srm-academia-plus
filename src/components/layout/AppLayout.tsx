import React, { useState, useEffect } from 'react';
import { useSession } from '../../context/SessionContext';
import { FloatingDock } from './FloatingDock';
import { RefreshCw, Search } from 'lucide-react';
import { CommandPaletteModal } from '../modals/CommandPaletteModal';
import { GpaPredictorModal } from '../modals/GpaPredictorModal';
import { Keycap, useIsMac } from '../common/Keycap';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { activeTab, setActiveTab, user, currentDayOrder, isHoliday, isSyncing } = useSession();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isGpaPredictorOpen, setIsGpaPredictorOpen] = useState(false);
  const isMac = useIsMac();

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] antialiased">
      {/* Subtle Minimal Top Bar */}
      <header
        className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.04] backdrop-blur-md gap-4"
        style={{ backgroundColor: 'var(--color-canvas)' }}
      >
        {/* Left: Logo & Campus Status */}
        <div className="flex items-center space-x-3 shrink-0">
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm shrink-0 transition-colors"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-accent-text)'
            }}
          >
            a+
          </div>
          <span className="font-bold tracking-tight text-sm lowercase text-[#111111] dark:text-[#FAFAFA] whitespace-nowrap">
            academia plus
          </span>
          <span className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-[#71717A] dark:text-[#A1A1AA] lowercase">
            {isSyncing ? (
              <>
                <RefreshCw className="w-2.5 h-2.5 animate-spin text-[#111111] dark:text-[#FAFAFA]" />
                <span>syncing...</span>
              </>
            ) : (
              <span>{isHoliday ? 'holiday' : `day order ${currentDayOrder}`}</span>
            )}
          </span>
        </div>

        {/* Right Side: Search bar pushed to the right, adjacent to user profile */}
        <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
          {/* Command Palette Trigger Button (Ctrl + K / Cmd + K) */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors border border-black/[0.04] dark:border-white/[0.04] cursor-pointer group shadow-2xs"
            title={`Search courses, views & actions (${isMac ? '⌘K' : 'Ctrl+K'})`}
          >
            <Search className="w-3.5 h-3.5 shrink-0 group-hover:text-[#111111] dark:group-hover:text-[#FAFAFA] transition-colors" />
            <span className="hidden sm:inline text-xs lowercase">search...</span>
            <div className="hidden sm:inline-flex items-center space-x-1 pl-1">
              {isMac ? (
                <>
                  <Keycap size="sm">⌘</Keycap>
                  <Keycap size="sm">K</Keycap>
                </>
              ) : (
                <>
                  <Keycap size="sm">Ctrl</Keycap>
                  <Keycap size="sm">K</Keycap>
                </>
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="w-full pb-32 sm:pb-24">
        {children}
      </main>

      {/* Floating Bottom Glass Pill Dock */}
      {user && (
        <FloatingDock activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {/* Global Command Palette (Ctrl+K) */}
      {isCommandPaletteOpen && (
        <CommandPaletteModal
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenGpaPredictor={() => {
            setIsCommandPaletteOpen(false);
            setIsGpaPredictorOpen(true);
          }}
        />
      )}

      {/* Global GPA Predictor Modal */}
      {isGpaPredictorOpen && (
        <GpaPredictorModal
          isOpen={isGpaPredictorOpen}
          onClose={() => setIsGpaPredictorOpen(false)}
        />
      )}
    </div>
  );
};
