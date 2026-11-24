import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '../../context/NotificationContext';
import { useSession } from '../../context/SessionContext';
import { Award, CheckCircle2, AlertTriangle, X, ArrowUpRight } from 'lucide-react';
import { formatCourseTitle } from '../../api/grades';

export const DynamicIslandToast: React.FC = () => {
  const { activeToast, dismissToast, markAsRead } = useNotifications();
  const { openCourseAttendance, openCourseMarks } = useSession();

  if (!activeToast) return null;

  const handleToastClick = () => {
    markAsRead(activeToast.id);
    if (activeToast.type === 'marks') {
      openCourseMarks(activeToast.courseCode);
    } else {
      openCourseAttendance(activeToast.courseCode);
    }
    dismissToast();
  };

  const isMarks = activeToast.type === 'marks';
  const isWarning = activeToast.changeType === 'warning';

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeToast.id}
          initial={{ opacity: 0, y: -36, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -24, scale: 0.92, filter: 'blur(8px)', transition: { duration: 0.2 } }}
          transition={{ type: 'spring', damping: 22, stiffness: 350, mass: 0.8 }}
          drag="y"
          dragConstraints={{ top: -80, bottom: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, info) => {
            if (info.offset.y < -20 || info.velocity.y < -300) {
              dismissToast();
            }
          }}
          onClick={handleToastClick}
          className={`pointer-events-auto relative w-full max-w-sm sm:max-w-md rounded-2xl p-3.5 sm:p-4 backdrop-blur-2xl shadow-2xl border transition-all cursor-pointer select-none group ${
            isWarning
              ? 'bg-rose-500/[0.08] dark:bg-[#181113]/95 border-rose-500/30 text-rose-950 dark:text-rose-100 shadow-rose-500/10'
              : isMarks
              ? 'bg-violet-500/[0.06] dark:bg-[#14121a]/95 border-violet-500/30 text-zinc-900 dark:text-zinc-100 shadow-violet-500/10'
              : 'bg-emerald-500/[0.06] dark:bg-[#101714]/95 border-emerald-500/30 text-zinc-900 dark:text-zinc-100 shadow-emerald-500/10'
          }`}
          style={{
            backgroundColor: isWarning
              ? undefined
              : 'var(--color-surface, rgba(255, 255, 255, 0.92))',
          }}
        >
          {/* Subtle Dynamic Ambient Ray Glow */}
          <div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-14 blur-2xl rounded-full pointer-events-none opacity-40 ${
              isWarning ? 'bg-rose-500' : isMarks ? 'bg-violet-500' : 'bg-emerald-500'
            }`}
          />

          <div className="relative z-10 flex items-start space-x-3">
            {/* Left Glowing Icon Badge */}
            <div
              className={`p-2.5 rounded-xl shrink-0 border ${
                isWarning
                  ? 'bg-rose-500/15 border-rose-500/30 text-rose-600 dark:text-rose-400'
                  : isMarks
                  ? 'bg-violet-500/15 border-violet-500/30 text-violet-600 dark:text-violet-400'
                  : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
              }`}
            >
              {isWarning ? (
                <AlertTriangle className="w-4 h-4 animate-bounce" />
              ) : isMarks ? (
                <Award className="w-4 h-4" />
              ) : (
                <CheckCircle2 className="w-4 h-4" />
              )}
            </div>

            {/* Middle Content Column */}
            <div className="min-w-0 flex-1">
              {/* Eyebrow: Course Code & Specific Component Name Pill */}
              <div className="flex flex-wrap items-center gap-1.5 leading-none mb-1">
                <span className="font-bold text-[11px] text-[#111111] dark:text-[#FAFAFA] tracking-tight">
                  {activeToast.courseCode}
                </span>

                {/* Explicit Evaluation / Test Component Name Pill */}
                {activeToast.componentName && (
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold lowercase border ${
                      isMarks
                        ? 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/25'
                        : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/25'
                    }`}
                  >
                    {activeToast.componentName}
                  </span>
                )}

                <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] ml-auto">
                  {activeToast.timestamp}
                </span>
              </div>

              {/* Subject Title */}
              <div className="text-xs font-semibold lowercase truncate text-[#111111] dark:text-[#FAFAFA]">
                {formatCourseTitle(activeToast.courseTitle)}
              </div>

              {/* Notification Message & Score Details */}
              <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] mt-0.5 lowercase line-clamp-2">
                {activeToast.message}
              </div>

              {/* Tap Prompt */}
              <div className="flex items-center space-x-1 mt-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 group-hover:underline">
                <span>{isMarks ? 'view in marks' : 'view in attendance'}</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dismissToast();
              }}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer shrink-0"
              title="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
