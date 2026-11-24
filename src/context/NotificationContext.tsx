import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { AppNotification, NotificationContextType } from '../types/notifications';

const STORAGE_KEY = 'srm_notifications_v2';

const INITIAL_SEED_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'seed-notif-1',
    type: 'marks',
    title: 'new evaluation marks published',
    courseCode: '21CSC202J',
    courseTitle: 'operating systems',
    componentName: 'cycle test 2',
    score: 48,
    maxScore: 50,
    message: 'scored 48/50 in cycle test 2 • projected grade a+',
    timestamp: '10m ago',
    read: false
  },
  {
    id: 'seed-notif-2',
    type: 'attendance',
    title: 'attendance update recorded',
    courseCode: '21MAB201T',
    courseTitle: 'transforms and boundary value problems',
    hoursConducted: 32,
    hoursPresent: 28,
    attendancePercent: 87.5,
    previousPercent: 84.4,
    changeType: 'increase',
    message: 'present recorded • 28/32 hrs (87.5% • +1 hr)',
    timestamp: '1h ago',
    read: true
  }
];

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch {
        // ignore fallback
      }
    }
    return INITIAL_SEED_NOTIFICATIONS;
  });

  const [activeToast, setActiveToast] = useState<AppNotification | null>(null);

  // Sync to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
      } catch { }
    }
  }, [notifications]);

  // Auto-dismiss active toast after 6.5s
  useEffect(() => {
    if (!activeToast) return;
    const timer = setTimeout(() => {
      setActiveToast(null);
    }, 6500);
    return () => clearTimeout(timer);
  }, [activeToast]);

  const addNotification = useCallback((payload: Omit<AppNotification, 'id' | 'timestamp' | 'read'>) => {
    const newNotif: AppNotification = {
      ...payload,
      id: `notif-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: 'just now',
      read: false
    };

    setNotifications((prev) => [newNotif, ...prev]);
    setActiveToast(newNotif);
  }, []);

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
    setActiveToast(null);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch { }
    }
  }, []);

  const dismissToast = useCallback(() => {
    setActiveToast(null);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        activeToast,
        addNotification,
        markAsRead,
        markAllAsRead,
        clearAll,
        dismissToast
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
