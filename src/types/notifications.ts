export type NotificationType = 'marks' | 'attendance';

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  courseCode: string;
  courseTitle: string;
  // Specific evaluation/test component name (e.g. "cycle test 2", "assignment 1", "surprise test")
  componentName?: string;
  score?: number;
  maxScore?: number;
  previousScore?: number;
  // For attendance:
  hoursConducted?: number;
  hoursPresent?: number;
  attendancePercent?: number;
  previousPercent?: number;
  changeType?: 'increase' | 'decrease' | 'warning';
  message: string;
  timestamp: string;
  read: boolean;
}

export interface NotificationContextType {
  notifications: AppNotification[];
  unreadCount: number;
  activeToast: AppNotification | null;
  addNotification: (notif: Omit<AppNotification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
  dismissToast: () => void;
}
