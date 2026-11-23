import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { AtAGlanceView } from '../AtAGlanceView';
import { AttendanceBentoView } from '../AttendanceBentoView';
import { REAL_STUDENT_DATA } from '../../../data/studentData';

vi.mock('../../../context/SessionContext', () => ({
  useSession: () => ({
    user: REAL_STUDENT_DATA,
    timetable: null,
    currentDayOrder: 2,
    isHoliday: false,
    activeTab: 'overview',
    setActiveTab: vi.fn(),
    lastSyncedAt: new Date(),
    openCourseAttendance: vi.fn(),
    openCourseMarks: vi.fn(),
    todayDateStr: '2026-11-24',
    focusedCourseCode: null,
    setFocusedCourseCode: vi.fn(),
    attendanceTargetPercent: 75,
    setAttendanceTargetPercent: vi.fn(),
  }),
}));

describe('Living Overview & Attendance Bento Views Suite', () => {
  describe('AtAGlanceView Living Motion', () => {
    it('renders with living motion primitives and spotlight bento cards', () => {
      const html = renderToString(React.createElement(AtAGlanceView));

      // Bento cards with spotlight class
      expect(html).toContain('bento-card');
      expect(html).toContain('card-spotlight');

      // Student name button micro-interaction
      expect(html).toContain('view student profile');

      // Tabular numbers for animated attendance & GPA
      expect(html).toContain('tabular-nums');

      // Progress bars rendered for metrics
      expect(html).toContain('role="progressbar"');

      // Quick action cards
      expect(html).toContain('study material &amp; past papers');
      expect(html).toContain('faculty finder');
      expect(html).toContain('academic milestones');
    });
  });

  describe('AttendanceBentoView Living Motion', () => {
    it('renders with motion primitives, interactive cards, and action buttons', () => {
      const html = renderToString(React.createElement(AttendanceBentoView));

      // Core action buttons with SpringPress
      expect(html).toContain('attendance predictor');
      expect(html).toContain('target:');
      expect(html).toMatch(/target:.*75.*%/);

      // Course cards with id and card-spotlight
      expect(html).toContain('id="attendance-card-21MAB201T"');
      expect(html).toContain('card-spotlight');

      // Animated numbers for percentages and margins
      expect(html).toContain('tabular-nums');

      // Search bar
      expect(html).toContain('filter courses...');
    });
  });
});
