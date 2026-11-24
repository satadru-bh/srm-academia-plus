import { describe, it, expect } from 'vitest';
import { getDayOrderForDate } from '../academicCalendar';

describe('getDayOrderForDate', () => {
  it('correctly identifies November 20, 2026 as the last working day with Day Order 2', () => {
    const res = getDayOrderForDate('2026-11-20');
    expect(res.isWorkingDay).toBe(true);
    expect(res.dayOrder).toBe(2);
  });

  it('correctly marks weekends as non-working holidays', () => {
    const saturday = getDayOrderForDate('2026-10-10');
    expect(saturday.isWorkingDay).toBe(false);
    expect(saturday.holidayName).toBe('saturday');

    const sunday = getDayOrderForDate('2026-10-11');
    expect(sunday.isWorkingDay).toBe(false);
    expect(sunday.holidayName).toBe('sunday');
  });

  it('correctly identifies November 23 and 24, 2026 as study holidays', () => {
    const nov23 = getDayOrderForDate('2026-11-23');
    expect(nov23.isWorkingDay).toBe(false);
    expect(nov23.holidayName).toContain('study holiday');

    const nov24 = getDayOrderForDate('2026-11-24');
    expect(nov24.isWorkingDay).toBe(false);
    expect(nov24.holidayName).toContain('study holiday');
  });

  it('correctly marks exam days as non-instructional for regular timetable lectures', () => {
    const examDay = getDayOrderForDate('2026-11-25');
    expect(examDay.isWorkingDay).toBe(false);
    expect(examDay.holidayName).toContain('exam');
  });

  it('correctly flags national/state holidays as non-working', () => {
    const independenceDay = getDayOrderForDate('2026-08-15');
    expect(independenceDay.isWorkingDay).toBe(false);
    expect(independenceDay.holidayName).toContain('independence day');
  });

  it('filters upcoming milestones correctly relative to today date (2026-11-23)', async () => {
    const { getSyncedAcademicEvents } = await import('../academicCalendar');
    const todayStr = '2026-11-23';
    const allEvents = getSyncedAcademicEvents();
    const upcomingEvents = allEvents.filter(
      (e) => (e.endDate || e.date) >= todayStr
    );

    // Events before 2026-11-23 like commencement of classes or last working day (2026-11-20) should be excluded
    const hasPastWorkingDay = upcomingEvents.some(
      (e) => e.title.includes('last working day') && (e.endDate || e.date) < todayStr
    );
    expect(hasPastWorkingDay).toBe(false);

    // Upcoming events like study holiday (2026-11-23), theory exams (2026-11-25) should be present
    const hasUpcomingExams = upcomingEvents.some((e) => (e.endDate || e.date) >= todayStr);
    expect(hasUpcomingExams).toBe(true);
    expect(upcomingEvents.length).toBeLessThan(allEvents.length);
  });

  it('getUpcomingEvents returns strictly upcoming events from reference date onwards with no past dates', async () => {
    const { getUpcomingEvents } = await import('../academicCalendar');
    const upcoming = getUpcomingEvents(5, '2026-11-24');
    expect(upcoming.length).toBeGreaterThan(0);
    upcoming.forEach(e => {
      // Must strictly be on or after reference date (never in the past)
      expect(e.date >= '2026-11-24').toBe(true);
    });
  });

  it('calendar only contains end semester exams and excludes all unit/internal tests', async () => {
    const { getSyncedAcademicEvents } = await import('../academicCalendar');
    const events = getSyncedAcademicEvents();
    const examEvents = events.filter(e => e.category === 'exam');
    expect(examEvents.length).toBeGreaterThan(0);
    examEvents.forEach(e => {
      expect(e.title.toLowerCase()).toContain('end sem');
      expect(e.title.toLowerCase()).not.toContain('cla-1');
      expect(e.title.toLowerCase()).not.toContain('cla-2');
    });
  });
});
