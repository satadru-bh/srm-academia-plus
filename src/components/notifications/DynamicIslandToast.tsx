import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '../../context/NotificationContext';
import { useSession } from '../../context/SessionContext';
import { X, ArrowUpRight } from 'lucide-react';
import { formatCourseTitle } from '../../api/grades';

export const DynamicIslandToast: React.FC = () => {
  const { activeToast, dismissToast, markAsRead } = useNotifications();
  const { openCourseAttendance, openCourseMarks } = useSession();

  const handleToastClick = () => {
    if (!activeToast) return;
    markAsRead(activeToast.id);
    if (activeToast.type === 'marks') {
      openCourseMarks(activeToast.courseCode);
    } else {
      openCourseAttendance(activeToast.courseCode);
    }
    dismissToast();
  };

  const isMarks = activeToast?.type === 'marks';
  const isWarning = activeToast?.changeType === 'warning';

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <AnimatePresence>
        {activeToast && (
          <motion.div
            key={activeToast.id}
            initial={{ opacity: 0, y: -28, scale: 0.92, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{
              opacity: 0,
              y: -24,
              scale: 0.92,
              filter: 'blur(8px)',
              transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.8 }}
            drag="y"
            dragConstraints={{ top: -80, bottom: 0 }}
            dragElastic={0.25}
            onDragEnd={(_, info) => {
              if (info.offset.y < -20 || info.velocity.y < -300) {
                dismissToast();
              }
            }}
            onClick={handleToastClick}
            className={`pointer-events-auto relative w-full max-w-sm sm:max-w-md rounded-2xl p-4 shadow-2xl border transition-all cursor-pointer select-none group bg-white dark:bg-[#18181B] text-[#111111] dark:text-[#FAFAFA] ${
              isWarning
                ? 'border-rose-500/40 shadow-rose-500/10'
                : 'border-black/10 dark:border-white/10'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              {/* Clean Content Column (NO bulky square icon badge, NO pills) */}
              <div className="min-w-0 flex-1 space-y-1">
                {/* Eyebrow: Course Code & Component Name as clean text */}
                <div className="flex items-center space-x-1.5 text-xs">
                  <span className="font-bold text-[#111111] dark:text-[#FAFAFA]">
                    {activeToast.courseCode}
                  </span>

                  {/* Explicit Evaluation / Test Component Name as plain text */}
                  {activeToast.componentName && (
                    <span className="text-[#71717A] dark:text-[#A1A1AA] lowercase font-medium">
                      • {activeToast.componentName}
                    </span>
                  )}

                  <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] ml-auto tabular-nums">
                    {activeToast.timestamp}
                  </span>
                </div>

                {/* Subject Title */}
                <div className="text-sm font-semibold lowercase truncate text-[#111111] dark:text-[#FAFAFA]">
                  {formatCourseTitle(activeToast.courseTitle)}
                </div>

                {/* Notification Message & Score Details */}
                <div className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase leading-snug">
                  {activeToast.message}
                </div>

                {/* Tap Prompt (plain text link) */}
                <div className="pt-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 group-hover:underline flex items-center space-x-1">
                  <span>{isMarks ? 'view in marks' : 'view in attendance'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Dismiss Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  dismissToast();
                }}
                className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer shrink-0"
                title="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
