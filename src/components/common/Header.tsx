import React from 'react';
import { useSession } from '../../context/SessionContext';
import { 
  RefreshCw, 
  Sun, 
  Moon, 
  Calendar
} from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const { 
    isDarkMode, 
    toggleDarkMode, 
    isSyncing, 
    refreshData, 
    lastSyncedAt, 
    currentDayOrder,
    isHoliday
  } = useSession();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#F5F5F7] dark:bg-[#000000] border-b border-black/[0.08] dark:border-white/[0.10]">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs md:text-sm text-[#6E6E73] dark:text-[#98989D] mt-0.5">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Day Order / Holiday Badge */}
        <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#EBEBED] dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
          <Calendar className="w-3.5 h-3.5 text-[#007AFF] dark:text-[#0A84FF]" />
          <span>{isHoliday ? 'holiday' : `day order ${currentDayOrder}`}</span>
        </div>

        {/* Sync Status / Button */}
        <button
          onClick={refreshData}
          disabled={isSyncing}
          title={lastSyncedAt ? `Last synced: ${lastSyncedAt.toLocaleTimeString()}` : 'Sync with SRM'}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#EBEBED] dark:hover:bg-[#2C2C2E] transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#007AFF] dark:text-[#0A84FF] ${isSyncing ? 'animate-spin' : ''}`} />
          <span className="hidden md:inline">{isSyncing ? 'Syncing...' : 'Sync'}</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] text-[#6E6E73] dark:text-[#98989D] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-[#EBEBED] dark:hover:bg-[#2C2C2E] transition-colors"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-[#FF9F0A]" /> : <Moon className="w-4 h-4 text-[#007AFF]" />}
        </button>
      </div>
    </header>
  );
};
