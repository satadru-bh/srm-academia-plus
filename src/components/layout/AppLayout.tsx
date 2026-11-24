import React, { useState, useEffect } from 'react';
import { useSession } from '../../context/SessionContext';
import { FloatingDock } from './FloatingDock';
import { Search } from 'lucide-react';
import { CommandPaletteModal } from '../modals/CommandPaletteModal';
import { GpaPredictorModal } from '../modals/GpaPredictorModal';
import { Keycap, useIsMac } from '../common/Keycap';
import { SpringPress } from '../common/motion/SpringPress';
import { WindowScrollResistance } from '../common/motion/ScrollResistance';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { activeTab, setActiveTab, user } = useSession();
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
        {/* Left: Clean Brand Logo and Name */}
        <div className="flex items-center space-x-3 shrink-0">
          <img
            src="/logo.png"
            alt="academia plus"
            className="w-7 h-7 rounded-xl object-contain shadow-xs shrink-0 select-none"
            loading="eager"
          />
          <span className="font-bold tracking-tight text-sm lowercase text-[#111111] dark:text-[#FAFAFA] whitespace-nowrap">
            academia plus
          </span>
        </div>

        {/* Right Side: Expanded search bar on mobile, fixed width on desktop */}
        <div className="flex items-center space-x-3 sm:space-x-4 ml-auto flex-1 justify-end max-w-xs sm:max-w-sm">
          {/* Command Palette Trigger Button (Ctrl + K / Cmd + K) */}
          <SpringPress
            onClick={() => setIsCommandPaletteOpen(true)}
            scaleHover={1.02}
            scaleTap={0.97}
            className="w-full max-w-[210px] sm:max-w-[240px] flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors border border-black/[0.04] dark:border-white/[0.04] cursor-pointer group shadow-2xs"
            title={`Search courses, views & actions (${isMac ? '⌘K' : 'Ctrl+K'})`}
          >
            <div className="flex items-center space-x-2 min-w-0">
              <Search className="w-3.5 h-3.5 shrink-0 group-hover:text-[#111111] dark:group-hover:text-[#FAFAFA] transition-colors" />
              <span className="text-xs lowercase truncate">search...</span>
            </div>
            <div className="hidden sm:inline-flex items-center space-x-1 pl-1 shrink-0">
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
          </SpringPress>
        </div>
      </header>

      {/* Main Page Content with Physical Spring Resistance at Limits */}
      <main className="w-full pb-32 sm:pb-24">
        <WindowScrollResistance>
          {children}
        </WindowScrollResistance>
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
