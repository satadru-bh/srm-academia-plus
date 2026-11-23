import React from 'react';
import { AnimatePresence } from 'framer-motion';
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
  const { user, activeTab, isLoading } = useSession();

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
      <AnimatePresence mode="wait" initial={false}>
        {renderActiveView()}
      </AnimatePresence>
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
