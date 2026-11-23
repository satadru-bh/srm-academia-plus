import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { StudentUserResponse, TimetableResponse } from '../api/types';
import { apiClient } from '../api/client';
import { defaultCache } from '../api/cache';
import { getDayOrderForDate } from '../data/academicCalendar';

export type ThemeMode = 'oled' | 'batman' | 'slate' | 'barbie' | 'tropicana' | 'matcha' | 'blue-ice' | 'banana' | 'light';

export const THEME_LIST: ThemeMode[] = [
  'oled',
  'batman',
  'slate',
  'barbie',
  'tropicana',
  'matcha',
  'blue-ice',
  'banana',
  'light'
];

export const DARK_THEMES: ThemeMode[] = ['oled', 'batman', 'slate'];

export interface ThemeInfo {
  id: ThemeMode;
  name: string;
  desc: string;
  accent: string;
  previewBg: string;
  isDark: boolean;
}

export const THEME_DETAILS: Record<ThemeMode, ThemeInfo> = {
  oled: { id: 'oled', name: 'oled black', desc: 'darkness, imprisoning me', accent: '#FFFFFF', previewBg: '#000000', isDark: true },
  batman: { id: 'batman', name: 'batman', desc: 'i\'m batman', accent: '#71717A', previewBg: '#000000', isDark: true },
  slate: { id: 'slate', name: 'slate dark', desc: 'classic gray dark mode', accent: '#E4E4E7', previewBg: '#121214', isDark: true },
  barbie: { id: 'barbie', name: 'barbie', desc: 'i\'m a barbie girl', accent: '#EC4899', previewBg: '#FCE7F3', isDark: false },
  tropicana: { id: 'tropicana', name: 'tropicana', desc: 'light orange theme', accent: '#F97316', previewBg: '#FFEDD5', isDark: false },
  matcha: { id: 'matcha', name: 'matcha', desc: 'not performative at all', accent: '#16A34A', previewBg: '#DCFCE7', isDark: false },
  'blue-ice': { id: 'blue-ice', name: 'blue ice', desc: 'light blue theme', accent: '#0EA5E9', previewBg: '#E0F2FE', isDark: false },
  banana: { id: 'banana', name: 'banana oo-na-na', desc: 'half of  my heart is in banana', accent: '#EAB308', previewBg: '#FEF9C3', isDark: false },
  light: { id: 'light', name: 'minimal light', desc: 'apple monochrome daylight', accent: '#111111', previewBg: '#FAFAFA', isDark: false }
};

interface SessionContextType {
  user: StudentUserResponse | null;
  timetable: TimetableResponse | null;
  activeTab: 'overview' | 'attendance' | 'timetable' | 'marks' | 'calendar' | 'exam-timetable' | 'profile' | 'notes' | 'faculty';
  setActiveTab: (tab: 'overview' | 'attendance' | 'timetable' | 'marks' | 'calendar' | 'exam-timetable' | 'profile' | 'notes' | 'faculty') => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isLoading: boolean;
  isSyncing: boolean;
  lastSyncedAt: Date | null;
  error: string | null;
  isAcademiaActive: boolean;
  isStudentPortalActive: boolean;
  login: (netId: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  loginStudentPortal: (pass: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  refreshData: () => Promise<void>;
  currentDayOrder: number;
  isHoliday: boolean;
  holidayName?: string;
  todayDateStr: string;
  inspectedNotesSubjectId: string | null;
  setInspectedNotesSubjectId: (id: string | null) => void;
  openNotesSubject: (subjectIdOrCode: string) => void;
  focusedCourseCode: string | null;
  setFocusedCourseCode: (code: string | null) => void;
  openCourseAttendance: (courseCode: string) => void;
  openCourseMarks: (courseCode: string) => void;
  attendanceTargetPercent: number;
  setAttendanceTargetPercent: (target: number) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Synchronous instant rehydration from persistent storage (strictly dynamic per user)
  const [user, setUser] = useState<StudentUserResponse | null>(() => {
    try {
      const cached = defaultCache.get<StudentUserResponse>('user_snapshot');
      return cached.data || null;
    } catch {
      return null;
    }
  });

  const [timetable, setTimetable] = useState<TimetableResponse | null>(() => {
    try {
      if (typeof window !== 'undefined') {
        // Clear poisoned legacy cache keys from localStorage
        ['timetable_1', 'timetable_2', 'timetable_v2_1', 'timetable_v2_2', 'timetable_v3_1', 'timetable_v3_2'].forEach((k) => {
          try {
            window.localStorage.removeItem(`srm_academia_${k}`);
          } catch { }
        });
      }
      const cached = defaultCache.get<TimetableResponse>('timetable_v4_2') || defaultCache.get<TimetableResponse>('timetable_v4_1');
      if (
        cached &&
        cached.data &&
        cached.data.days &&
        cached.data.days[1] &&
        cached.data.days[1].length === 12 &&
        Object.values(cached.data.days).some((slots) => slots.some((s) => s.courseCode && s.courseCode !== '-'))
      ) {
        return cached.data;
      }
      return null;
    } catch {
      return null;
    }
  });

  const [isStudentPortalActive, setIsStudentPortalActive] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return Boolean(window.localStorage.getItem('srm_sp_session'));
    }
    return false;
  });

  const [activeTab, setActiveTabState] = useState<'overview' | 'attendance' | 'timetable' | 'marks' | 'calendar' | 'exam-timetable' | 'profile' | 'notes' | 'faculty'>('overview');
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('cw_theme_v3') as ThemeMode;
      if (savedTheme && THEME_LIST.includes(savedTheme)) return savedTheme;
      const legacyTheme = window.localStorage.getItem('cw_theme');
      if (legacyTheme === 'dark') return 'oled';
      if (legacyTheme === 'light') return 'light';
    }
    return 'light'; // Default to crisp, modern Light Mode
  });
  const isDarkMode = DARK_THEMES.includes(theme);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('cw_theme_v3', newTheme);
        window.localStorage.setItem('cw_theme', DARK_THEMES.includes(newTheme) ? 'dark' : 'light');
      } catch { }
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const currIdx = THEME_LIST.indexOf(prev);
      const nextTheme = THEME_LIST[(currIdx + 1) % THEME_LIST.length];
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem('cw_theme_v3', nextTheme);
          window.localStorage.setItem('cw_theme', DARK_THEMES.includes(nextTheme) ? 'dark' : 'light');
        } catch { }
      }
      return nextTheme;
    });
  }, []);

  const toggleDarkMode = useCallback(() => {
    setTheme(DARK_THEMES.includes(theme) ? 'light' : 'oled');
  }, [theme, setTheme]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(() => {
    const cached = defaultCache.get<StudentUserResponse>('user_snapshot');
    return cached.lastFetched ? new Date(cached.lastFetched) : null;
  });
  const [error, setError] = useState<string | null>(null);
  const [inspectedNotesSubjectId, setInspectedNotesSubjectId] = useState<string | null>(null);
  const [focusedCourseCode, setFocusedCourseCode] = useState<string | null>(null);

  const [attendanceTargetPercent, setAttendanceTargetPercentState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('srm_attendance_target');
      if (saved) {
        const parsed = Number(saved);
        if (!isNaN(parsed) && parsed >= 50 && parsed <= 99) {
          return parsed;
        }
      }
    }
    return 75;
  });

  const setAttendanceTargetPercent = useCallback((target: number) => {
    const clamped = Math.max(50, Math.min(99, Math.round(target)));
    setAttendanceTargetPercentState(clamped);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('srm_attendance_target', String(clamped));
    }
  }, []);

  const setActiveTab = useCallback((tab: 'overview' | 'attendance' | 'timetable' | 'marks' | 'calendar' | 'exam-timetable' | 'profile' | 'notes' | 'faculty') => {
    setActiveTabState(tab);
    setFocusedCourseCode(null);
  }, []);

  const openNotesSubject = useCallback((subjectIdOrCode: string) => {
    setActiveTabState('notes');
    setInspectedNotesSubjectId(subjectIdOrCode);
  }, []);

  const openCourseAttendance = useCallback((courseCode: string) => {
    setActiveTabState('attendance');
    setFocusedCourseCode(courseCode);
  }, []);

  const openCourseMarks = useCallback((courseCode: string) => {
    setActiveTabState('marks');
    setFocusedCourseCode(courseCode);
  }, []);

  // Dynamically resolve today's date & day order / holiday status
  const todayDateStr = React.useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const todayStatus = React.useMemo(() => {
    return getDayOrderForDate(todayDateStr);
  }, [todayDateStr]);

  const currentDayOrder = todayStatus.isWorkingDay ? todayStatus.dayOrder : 0;
  const isHoliday = !todayStatus.isWorkingDay;
  const holidayName = todayStatus.holidayName;

  // Sync active theme class on <html> and persist preference
  useEffect(() => {
    const root = document.documentElement;
    THEME_LIST.forEach((t) => {
      root.classList.remove(`theme-${t}`);
    });
    ['obsidian', 'midnight', 'emerald', 'sunset', 'amber', 'glacier', 'violet'].forEach((t) => {
      root.classList.remove(`theme-${t}`);
    });

    if (DARK_THEMES.includes(theme)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  // Background silent revalidation on mount (never blocks UI or wipes valid cached state)
  useEffect(() => {
    const backgroundRevalidate = async () => {
      const sessionInfo = apiClient.getSessionInfo();
      if (!sessionInfo.isAuthenticated) {
        return;
      }

      try {
        const userData = await apiClient.fetchUser(false);
        const ttData = await apiClient.fetchTimetable(
          userData.profile?.batch ? Number(userData.profile.batch) : 2,
          false
        );
        setUser(userData);
        setTimetable(ttData);
        setLastSyncedAt(new Date());
      } catch (err: unknown) {
        // ONLY clear session if server explicitly rejected auth credentials (401 Unauthorized)
        if (err instanceof Error && err.message === 'UNAUTHORIZED') {
          apiClient.clearSession();
          setUser(null);
          setTimetable(null);
          setIsStudentPortalActive(false);
        }
        // If it was a network drop, 503, or offline, KEEP THE STUDENT LOGGED IN with their cached data!
      }
    };

    backgroundRevalidate();
  }, []);

  const login = async (netId: string, pass: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await apiClient.login(netId, pass);
      if (res.success && res.user) {
        setUser(res.user);
        const tt = await apiClient.fetchTimetable(res.user.profile.batch ? Number(res.user.profile.batch) : 2, false);
        setTimetable(tt);
        setLastSyncedAt(new Date());
        return { success: true };
      } else {
        setError(res.message || 'Login failed. Check your credentials.');
        return { success: false, message: res.message || 'Invalid credentials' };
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      return { success: false, message };
    } finally {
      setIsLoading(false);
    }
  };

  const loginStudentPortal = async (password: string) => {
    if (!user) return { success: false, message: 'Please sign into Academia first' };
    setIsSyncing(true);
    try {
      const netId = user.profile.regNo || (user.profile.email ? user.profile.email.split('@')[0] : 'student');
      const res = await apiClient.loginStudentPortal(netId, password);
      if (res.success) {
        setIsStudentPortalActive(true);
        return { success: true };
      } else {
        return { success: false, message: res.message || 'Student Portal login failed' };
      }
    } finally {
      setIsSyncing(false);
    }
  };

  const logout = () => {
    apiClient.clearSession();
    setUser(null);
    setTimetable(null);
    setIsStudentPortalActive(false);
    setActiveTab('overview');
    setError(null);
  };

  const refreshData = useCallback(async () => {
    if (!user) return;
    setIsSyncing(true);
    setError(null);
    try {
      const userData = await apiClient.fetchUser(true);
      const ttData = await apiClient.fetchTimetable(userData.profile?.batch ? Number(userData.profile.batch) : 2, true);
      setUser(userData);
      setTimetable(ttData);
      setLastSyncedAt(new Date());
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'UNAUTHORIZED') {
        logout();
      } else {
        const message = err instanceof Error ? err.message : 'Sync unavailable';
        setError(message);
      }
    } finally {
      setIsSyncing(false);
    }
  }, [user]);

  return (
    <SessionContext.Provider
      value={{
        user,
        timetable,
        activeTab,
        setActiveTab,
        theme,
        setTheme,
        cycleTheme,
        isDarkMode,
        toggleDarkMode,
        isLoading,
        isSyncing,
        lastSyncedAt,
        error,
        isAcademiaActive: Boolean(user),
        isStudentPortalActive,
        login,
        loginStudentPortal,
        logout,
        refreshData,
        currentDayOrder,
        isHoliday,
        holidayName,
        todayDateStr,
        inspectedNotesSubjectId,
        setInspectedNotesSubjectId,
        openNotesSubject,
        focusedCourseCode,
        setFocusedCourseCode,
        openCourseAttendance,
        openCourseMarks,
        attendanceTargetPercent,
        setAttendanceTargetPercent
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
