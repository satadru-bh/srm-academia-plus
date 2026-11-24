import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { DynamicIslandToast } from '../DynamicIslandToast';
import { NotificationBell } from '../NotificationBell';
import { AppNotification } from '../../../types/notifications';

const mockNotification: AppNotification = {
  id: 'test-1',
  type: 'marks',
  title: 'marks published',
  courseCode: '21CSC202J',
  courseTitle: 'operating systems',
  componentName: 'cycle test 2',
  score: 48,
  maxScore: 50,
  message: 'scored 48/50 in cycle test 2 • projected grade a+',
  timestamp: 'just now',
  read: false
};

const mockAttendanceNotification: AppNotification = {
  id: 'test-2',
  type: 'attendance',
  title: 'critical attendance alert',
  courseCode: '21CSS201T',
  courseTitle: 'computer organization and architecture',
  hoursConducted: 30,
  hoursPresent: 22,
  attendancePercent: 73.3,
  changeType: 'warning',
  message: 'absent recorded • 22/30 hrs (73.3% • below 75% cutoff!)',
  timestamp: '5m ago',
  read: false
};

let currentToast: AppNotification | null = mockNotification;
let notificationList: AppNotification[] = [mockNotification, mockAttendanceNotification];

vi.mock('../../../context/NotificationContext', () => ({
  useNotifications: () => ({
    notifications: notificationList,
    unreadCount: notificationList.filter((n) => !n.read).length,
    activeToast: currentToast,
    addNotification: vi.fn(),
    markAsRead: vi.fn(),
    markAllAsRead: vi.fn(),
    clearAll: vi.fn(),
    dismissToast: vi.fn(),
  }),
}));

vi.mock('../../../context/SessionContext', () => ({
  useSession: () => ({
    openCourseAttendance: vi.fn(),
    openCourseMarks: vi.fn(),
  }),
}));

describe('Notification System Suite', () => {
  beforeEach(() => {
    currentToast = mockNotification;
    notificationList = [mockNotification, mockAttendanceNotification];
  });

  it('renders DynamicIslandToast with explicit component name and score', () => {
    const html = renderToString(React.createElement(DynamicIslandToast));

    // Course code
    expect(html).toContain('21CSC202J');

    // Component name pill strictly present
    expect(html).toContain('cycle test 2');

    // Message & view prompt
    expect(html).toContain('scored 48/50 in cycle test 2');
    expect(html).toContain('view in marks');
  });

  it('renders NotificationBell with unread indicator dot and opaque popover', () => {
    const html = renderToString(React.createElement(NotificationBell));

    // Bell trigger renders
    expect(html).toContain('button');
    // Unread indicator dot
    expect(html).toContain('bg-emerald-500');
  });

  it('renders DynamicIslandToast without bulky icon badges or enclosed pills', () => {
    const html = renderToString(React.createElement(DynamicIslandToast));

    // No left bulky icon badge
    expect(html).not.toContain('lucide-award');
    // No pill background classes
    expect(html).not.toContain('rounded-full text-[10px]');
    // Solid opaque background
    expect(html).toContain('bg-white');
  });

  it('renders warning state for attendance cutoff notification', () => {
    currentToast = mockAttendanceNotification;
    const html = renderToString(React.createElement(DynamicIslandToast));

    expect(html).toContain('21CSS201T');
    expect(html).toContain('below 75% cutoff');
    expect(html).toContain('view in attendance');
  });
});
