import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { SessionProvider, useSession } from './context/SessionContext';
import { AppLayout } from './components/layout/AppLayout';
import { SignInBentoView } from './components/views/SignInBentoView';
import { AtAGlanceView } from './components/views/AtAGlanceView';
import { AttendanceBentoView } from './components/views/AttendanceBentoView';
import { TimetableBentoView } from './components/views/TimetableBentoView';
import { MarksBentoView } from './components/views/MarksBentoView';
import { CalendarBentoView } from './components/views/CalendarBentoView';
import { ExamTimetableBentoView } from './components/views/ExamTimetableBentoView';
import { ProfileBentoView } from './components/views/ProfileBentoView';
import { NotesBentoView } from './components/views/NotesBentoView';
import { FacultyFinderBentoView } from './components/views/FacultyFinderBentoView';

export const ORDERED_TABS = [
  'overview',
  'attendance',
  'timetable',
  'marks',
  'notes',
  'faculty',
  'exam-timetable',
  'calendar',
  'profile'
] as const;

// Buttery smooth Apple-grade spring slide with cinematic motion blur
const pageMotionVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 36 : -36,
    opacity: 0,
    filter: 'blur(5px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring' as const, stiffness: 380, damping: 32 },
      opacity: { duration: 0.16, ease: 'easeOut' },
      filter: { duration: 0.16, ease: 'easeOut' },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -36 : 36,
    opacity: 0,
    filter: 'blur(5px)',
    transition: {
      x: { duration: 0.14, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.14, ease: 'easeIn' },
      filter: { duration: 0.14, ease: 'easeIn' },
    },
  }),
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App render error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[var(--color-canvas)] text-[var(--color-text-primary)]">
          <div className="max-w-md w-full bento-card p-8 text-center space-y-4">
            <h2 className="text-xl font-semibold tracking-tight lowercase">something went wrong</h2>
            <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
              {this.state.error?.message || 'an unexpected rendering error occurred.'}
            </p>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="px-4 py-2 rounded-2xl bg-[#111111] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#09090B] text-xs lowercase transition-opacity hover:opacity-90"
            >
              reload application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const MainApp: React.FC = () => {
  const { user, activeTab, setActiveTab, isLoading } = useSession();

  // Track page transition direction
  const prevTabRef = useRef(activeTab);
  const prevIndex = ORDERED_TABS.indexOf(prevTabRef.current as any);
  const currentIndex = ORDERED_TABS.indexOf(activeTab as any);
  const direction = currentIndex >= prevIndex ? 1 : -1;

  useEffect(() => {
    prevTabRef.current = activeTab;
  }, [activeTab]);

  // Mobile horizontal swipe navigation (buttery smooth with directional spring)
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    const target = touch.target as HTMLElement | null;

    if (target) {
      const tag = target.tagName.toLowerCase();
      if (['input', 'textarea', 'select', 'button'].includes(tag) || target.closest('button, input, textarea, select, [data-no-swipe]')) {
        touchStartRef.current = null;
        return;
      }
      // Check for horizontal scrollable containers (e.g. timetable grid or tabs pill row)
      const scrollable = target.closest('.overflow-x-auto, [data-scrollable]');
      if (scrollable && scrollable.scrollWidth > scrollable.clientWidth) {
        touchStartRef.current = null;
        return;
      }
    }

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.changedTouches.length !== 1) {
      touchStartRef.current = null;
      return;
    }

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;
    touchStartRef.current = null;

    // Threshold: at least 42px horizontal, predominantly horizontal vs vertical, under 450ms
    if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3 && deltaTime < 450) {
      const currIdx = ORDERED_TABS.indexOf(activeTab as any);
      if (currIdx === -1) return;

      if (deltaX < 0) {
        // Swiped Left -> Move forward
        if (currIdx < ORDERED_TABS.length - 1) {
          setActiveTab(ORDERED_TABS[currIdx + 1]);
        }
      } else {
        // Swiped Right -> Move backward
        if (currIdx > 0) {
          setActiveTab(ORDERED_TABS[currIdx - 1]);
        }
      }
    }
  };

  if (isLoading && !user) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-8 h-8 border-2 border-black/20 dark:border-white/20 border-t-black dark:border-t-white rounded-full animate-spin" />
          <div className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
            hydrating academia workspace...
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <SignInBentoView />;
  }

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview':
        return <AtAGlanceView key="overview" />;
      case 'attendance':
        return <AttendanceBentoView key="attendance" />;
      case 'timetable':
        return <TimetableBentoView key="timetable" />;
      case 'marks':
        return <MarksBentoView key="marks" />;
      case 'calendar':
        return <CalendarBentoView key="calendar" />;
      case 'exam-timetable':
        return <ExamTimetableBentoView key="exam-timetable" />;
      case 'notes':
        return <NotesBentoView key="notes" />;
      case 'faculty':
        return <FacultyFinderBentoView key="faculty" />;
      case 'profile':
        return <ProfileBentoView key="profile" />;
      default:
        return <AtAGlanceView key="default" />;
    }
  };

  return (
    <AppLayout>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full min-h-[calc(100vh-60px)] touch-pan-y"
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={pageMotionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full will-change-[transform,opacity,filter]"
            style={{ transform: 'translateZ(0)' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </AppLayout>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <SessionProvider>
        <MainApp />
      </SessionProvider>
    </ErrorBoundary>
  );
}

export default App;
