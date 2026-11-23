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

// Buttery smooth Apple-grade spring slide without heavy blur hitches
const pageMotionVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 32 : -32,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 380, damping: 34, mass: 0.8 },
      opacity: { duration: 0.15, ease: 'easeOut' },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -32 : 32,
    opacity: 0,
    transition: {
      x: { duration: 0.12, ease: [0.25, 1, 0.5, 1] },
      opacity: { duration: 0.12, ease: 'easeIn' },
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
    window.scrollTo({ top: 0, behavior: 'instant' });
    prevTabRef.current = activeTab;
  }, [activeTab]);

  // Mobile horizontal swipe navigation (buttery smooth with directional spring)
  const touchStartRef = useRef<{
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
    time: number;
  } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    const target = touch.target as HTMLElement | null;

    // Only exclude active form inputs where dragging selects text or slides
    if (target && target.closest('input, textarea, select, [contenteditable="true"], [data-no-swipe]')) {
      touchStartRef.current = null;
      return;
    }

    touchStartRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      currentX: touch.clientX,
      currentY: touch.clientY,
      time: Date.now()
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchStartRef.current.currentX = touch.clientX;
    touchStartRef.current.currentY = touch.clientY;
  };

  const processSwipe = () => {
    if (!touchStartRef.current) return;
    const { startX, startY, currentX, currentY, time } = touchStartRef.current;
    touchStartRef.current = null;

    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const deltaTime = Date.now() - time;

    // Minimum 38px horizontal flick, predominantly horizontal vs vertical (dx > dy * 1.15), under 600ms
    if (Math.abs(deltaX) >= 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15 && deltaTime < 600) {
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

  const handleTouchEnd = () => {
    processSwipe();
  };

  const handleTouchCancel = () => {
    processSwipe();
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
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        className="w-full min-h-[calc(100vh-64px)] overflow-x-clip"
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={pageMotionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full overflow-x-clip"
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
