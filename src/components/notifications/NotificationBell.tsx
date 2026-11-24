import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '../../context/NotificationContext';
import { useSession } from '../../context/SessionContext';
import { Bell, Award, CheckCircle2, AlertTriangle, CheckCheck, Trash2, ArrowUpRight } from 'lucide-react';
import { SpringPress } from '../common/motion/SpringPress';
import { formatCourseTitle } from '../../api/grades';

export const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { notifications, unreadCount, markAsRead, markAllAsRead, clearAll } = useNotifications();
  const { openCourseAttendance, openCourseMarks } = useSession();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleItemClick = (notif: typeof notifications[0]) => {
    markAsRead(notif.id);
    if (notif.type === 'marks') {
      openCourseMarks(notif.courseCode);
    } else {
      openCourseAttendance(notif.courseCode);
    }
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Bell Trigger Button */}
      <SpringPress
        onClick={() => setIsOpen((prev) => !prev)}
        scaleHover={1.05}
        scaleTap={0.94}
        className={`relative p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center border ${
          isOpen
            ? 'bg-black/10 dark:bg-white/10 border-black/15 dark:border-white/15 text-[#111111] dark:text-[#FAFAFA]'
            : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border-black/[0.04] dark:border-white/[0.04] text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
        }`}
        title="View notifications & updates"
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white shadow-xs">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </SpringPress>

      {/* Floating Notification Drawer Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: 'spring', damping: 24, stiffness: 350 }}
            className="absolute right-0 mt-2.5 w-80 sm:w-96 rounded-2xl bg-white/95 dark:bg-[#141416]/95 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-2xl p-4 z-50 text-[#111111] dark:text-[#FAFAFA]"
          >
            {/* Popover Header */}
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center space-x-2">
                <h3 className="text-xs font-bold lowercase tracking-tight">
                  updates & notifications
                </h3>
                {unreadCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                    {unreadCount} new
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                {unreadCount > 0 && (
                  <button
                    type="button"
                    onClick={markAllAsRead}
                    className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer text-[10px] lowercase flex items-center space-x-1"
                    title="Mark all as read"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">read all</span>
                  </button>
                )}
                {notifications.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-rose-500 transition-colors cursor-pointer text-[10px] lowercase flex items-center space-x-1"
                    title="Clear all notifications"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Notification Items List */}
            <div className="divide-y divide-black/[0.04] dark:divide-white/[0.04] max-h-80 overflow-y-auto my-1">
              {notifications.length === 0 ? (
                <div className="py-10 text-center space-y-1.5">
                  <div className="inline-flex p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                    <Bell className="w-5 h-5 opacity-40" />
                  </div>
                  <div className="text-xs font-medium lowercase text-[#111111] dark:text-[#FAFAFA]">
                    all caught up
                  </div>
                  <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                    no new marks or attendance updates
                  </div>
                </div>
              ) : (
                notifications.map((notif) => {
                  const isMarks = notif.type === 'marks';
                  const isWarning = notif.changeType === 'warning';
                  return (
                    <div
                      key={notif.id}
                      onClick={() => handleItemClick(notif)}
                      className={`py-2.5 px-2 rounded-xl flex items-start space-x-3 transition-colors cursor-pointer group ${
                        notif.read
                          ? 'hover:bg-black/[0.03] dark:hover:bg-white/[0.03] opacity-80'
                          : 'bg-emerald-500/[0.04] dark:bg-emerald-500/[0.08] hover:bg-emerald-500/[0.08] dark:hover:bg-emerald-500/[0.14]'
                      }`}
                    >
                      {/* Category Icon */}
                      <div
                        className={`p-2 rounded-xl shrink-0 mt-0.5 border ${
                          isWarning
                            ? 'bg-rose-500/15 border-rose-500/30 text-rose-500'
                            : isMarks
                            ? 'bg-violet-500/15 border-violet-500/30 text-violet-500'
                            : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-500'
                        }`}
                      >
                        {isWarning ? (
                          <AlertTriangle className="w-3.5 h-3.5" />
                        ) : isMarks ? (
                          <Award className="w-3.5 h-3.5" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 leading-none mb-1">
                          <span className="font-bold text-[11px] text-[#111111] dark:text-[#FAFAFA]">
                            {notif.courseCode}
                          </span>
                          {/* Component Name Pill */}
                          {notif.componentName && (
                            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold lowercase bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                              {notif.componentName}
                            </span>
                          )}
                          <span className="text-[9px] text-[#71717A] dark:text-[#A1A1AA] ml-auto">
                            {notif.timestamp}
                          </span>
                        </div>

                        <div className="text-xs font-semibold lowercase truncate text-[#111111] dark:text-[#FAFAFA]">
                          {formatCourseTitle(notif.courseTitle)}
                        </div>

                        <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] mt-0.5 lowercase line-clamp-2">
                          {notif.message}
                        </div>
                      </div>

                      <ArrowUpRight className="w-3 h-3 text-[#71717A] group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
