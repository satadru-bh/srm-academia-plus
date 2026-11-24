import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '../../context/NotificationContext';
import { useSession } from '../../context/SessionContext';
import { Bell, ArrowUpRight } from 'lucide-react';
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
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#121214]" />
        )}
      </SpringPress>

      {/* Floating Notification Drawer Popover: 100% SOLID OPAQUE, NO TRANSPARENCY BLEED */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 360 }}
            className="absolute right-0 mt-2.5 w-80 sm:w-96 rounded-2xl bg-white dark:bg-[#18181B] border border-black/10 dark:border-white/10 shadow-2xl p-4 z-50 text-[#111111] dark:text-[#FAFAFA]"
          >
            {/* Popover Header (NO pills) */}
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center space-x-2">
                <h3 className="text-xs font-bold lowercase tracking-tight">
                  updates & notifications
                </h3>
                {unreadCount > 0 && (
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 lowercase font-medium">
                    ({unreadCount} new)
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <button
                    type="button"
                    onClick={markAllAsRead}
                    className="hover:underline text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer text-[11px] lowercase"
                  >
                    read all
                  </button>
                )}
                {notifications.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="hover:underline text-[#71717A] dark:text-[#A1A1AA] hover:text-rose-500 transition-colors cursor-pointer text-[11px] lowercase"
                  >
                    clear
                  </button>
                )}
              </div>
            </div>

            {/* Notification Items List */}
            <div className="divide-y divide-black/[0.04] dark:divide-white/[0.04] max-h-80 overflow-y-auto my-1">
              {notifications.length === 0 ? (
                /* Empty state: NO circular bell badge icon */
                <div className="py-8 text-center space-y-1">
                  <div className="text-xs font-medium lowercase text-[#111111] dark:text-[#FAFAFA]">
                    all caught up
                  </div>
                  <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                    no new marks or attendance updates
                  </div>
                </div>
              ) : (
                notifications.map((notif) => {
                  return (
                    <div
                      key={notif.id}
                      onClick={() => handleItemClick(notif)}
                      className={`py-3 px-2 rounded-xl transition-colors cursor-pointer ${
                        notif.read
                          ? 'hover:bg-black/[0.03] dark:hover:bg-white/[0.03] opacity-75'
                          : 'bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                      }`}
                    >
                      {/* Course Code & Component Name (NO icon, NO pill) */}
                      <div className="flex items-center space-x-1.5 text-xs mb-1">
                        <span className="font-bold text-[#111111] dark:text-[#FAFAFA]">
                          {notif.courseCode}
                        </span>
                        {notif.componentName && (
                          <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase font-medium">
                            • {notif.componentName}
                          </span>
                        )}
                        <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] ml-auto tabular-nums">
                          {notif.timestamp}
                        </span>
                      </div>

                      <div className="text-xs font-semibold lowercase truncate text-[#111111] dark:text-[#FAFAFA]">
                        {formatCourseTitle(notif.courseTitle)}
                      </div>

                      <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] mt-0.5 lowercase line-clamp-2">
                        {notif.message}
                      </div>

                      <div className="flex items-center space-x-1 text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                        <span>{notif.type === 'marks' ? 'view marks' : 'view attendance'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
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
