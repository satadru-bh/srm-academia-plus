import { ExamTimetableItem } from '../api/types';
import { OFFICIAL_EXAM_TIMETABLE } from './examTimetable';

export interface AcademicEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  endDate?: string;
  dayOrder?: number;
  category: 'exam' | 'holiday' | 'milestone' | 'cultural' | 'academic';
  description: string;
  isWorkingDay: boolean;
}

export const BASE_ACADEMIC_CALENDAR_EVENTS: AcademicEvent[] = [
  // July 2026
  {
    id: 'ev-jul-20',
    title: 'enrolment day - b.tech ii, iii, iv',
    date: '2026-07-20',
    category: 'milestone',
    description: 'official registration and course allocation verification for senior batches',
    isWorkingDay: false
  },
  {
    id: 'ev-jul-21',
    title: 'commencement of classes (day order 1)',
    date: '2026-07-21',
    category: 'milestone',
    description: 'inaugural academic cycle lecture schedule for odd semester 2026',
    isWorkingDay: true,
    dayOrder: 1
  },

  // August 2026
  {
    id: 'ev-aug-03',
    title: 'commencement of minor degree classes',
    date: '2026-08-03',
    category: 'academic',
    description: 'specialization and inter-disciplinary minor courses start',
    isWorkingDay: true,
    dayOrder: 5
  },
  {
    id: 'ev-aug-15',
    title: 'independence day - holiday',
    date: '2026-08-15',
    category: 'holiday',
    description: 'national holiday flag hoisting ceremony at srm kattankulathur',
    isWorkingDay: false
  },
  {
    id: 'ev-aug-24',
    title: 'chancellor birthday celebration - no classes',
    date: '2026-08-24',
    category: 'holiday',
    description: 'university celebration & academic holiday across all faculties',
    isWorkingDay: false
  },
  {
    id: 'ev-aug-26',
    title: 'milad - un - nabi - holiday',
    date: '2026-08-26',
    category: 'holiday',
    description: 'public holiday',
    isWorkingDay: false
  },

  // September 2026
  {
    id: 'ev-sep-04',
    title: 'krishna jayanthi - holiday',
    date: '2026-09-04',
    category: 'holiday',
    description: 'festival holiday',
    isWorkingDay: false
  },
  {
    id: 'ev-sep-14',
    title: 'vinayakar chathurthi - holiday',
    date: '2026-09-14',
    category: 'holiday',
    description: 'festival holiday',
    isWorkingDay: false
  },

  // October 2026
  {
    id: 'ev-oct-02',
    title: 'gandhi jayanthi - holiday',
    date: '2026-10-02',
    category: 'holiday',
    description: 'national holiday',
    isWorkingDay: false
  },
  {
    id: 'ev-oct-19',
    title: 'ayutha pooja - holiday',
    date: '2026-10-19',
    category: 'holiday',
    description: 'navratri festive break',
    isWorkingDay: false
  },
  {
    id: 'ev-oct-20',
    title: 'vijaya dasami - holiday',
    date: '2026-10-20',
    category: 'holiday',
    description: 'vijayadashami vacation',
    isWorkingDay: false
  },

  // November 2026 (Active Current Month)
  {
    id: 'ev-nov-08',
    title: 'deepavali - holiday',
    date: '2026-11-08',
    category: 'holiday',
    description: 'festival of lights',
    isWorkingDay: false
  },
  {
    id: 'ev-nov-09',
    title: 'deepavali holiday',
    date: '2026-11-09',
    category: 'holiday',
    description: 'special university post-diwali holiday',
    isWorkingDay: false
  },
  {
    id: 'ev-nov-20',
    title: 'last working day - b.tech ii, iii, iv',
    date: '2026-11-20',
    category: 'milestone',
    description: 'final attendance calculation cutoff (75% mandatory condonation threshold)',
    isWorkingDay: true,
    dayOrder: 2
  },
  {
    id: 'ev-nov-21-24-study',
    title: 'study holiday / exam prep',
    date: '2026-11-21',
    endDate: '2026-11-24',
    category: 'holiday',
    description: 'study holidays & preparatory leave for end-semester theory examinations',
    isWorkingDay: false
  },
  {
    id: 'ev-nov-23-study',
    title: 'study holiday',
    date: '2026-11-23',
    category: 'holiday',
    description: 'study holidays & preparatory leave for end-semester theory examinations',
    isWorkingDay: false
  },
  {
    id: 'ev-nov-24-study',
    title: 'study holiday',
    date: '2026-11-24',
    category: 'holiday',
    description: 'study holidays & preparatory leave for end-semester theory examinations',
    isWorkingDay: false
  },

  // November 2026 End-Semester Examinations (Official Controller of Examinations Schedule)
  {
    id: 'ev-nov-25-exam',
    title: 'end sem exam: transforms & bvp (21mab201t)',
    date: '2026-11-25',
    category: 'exam',
    description: 'afternoon session (02:00 pm – 05:00 pm) • slot a',
    isWorkingDay: true
  },
  {
    id: 'ev-nov-26-exam',
    title: 'end sem exam: computer organization & arch (21css201t)',
    date: '2026-11-26',
    category: 'exam',
    description: 'afternoon session (02:00 pm – 05:00 pm) • slot c',
    isWorkingDay: true
  },
  {
    id: 'ev-nov-27-exam',
    title: 'end sem exam: data structures & algos (21csc201j)',
    date: '2026-11-27',
    category: 'exam',
    description: 'afternoon session (02:00 pm – 05:00 pm) • slot b',
    isWorkingDay: true
  },
  {
    id: 'ev-nov-30-exam',
    title: 'end sem exam: operating systems (21csc202j)',
    date: '2026-11-30',
    category: 'exam',
    description: 'afternoon session (02:00 pm – 05:00 pm) • slot f',
    isWorkingDay: true
  },

  // December 2026
  {
    id: 'ev-dec-25',
    title: 'christmas - holiday',
    date: '2026-12-25',
    category: 'holiday',
    description: 'winter break & christmas vacation',
    isWorkingDay: false
  }
];

export const ACADEMIC_CALENDAR_EVENTS = BASE_ACADEMIC_CALENDAR_EVENTS;

const STORAGE_KEY = 'academia_plus_exam_schedule_v3';

/**
 * Returns academic calendar events dynamically synchronized with the user's exam timetable.
 * Checks localStorage for customized/live exam entries, falling back to official COE timetable.
 */
export function getSyncedAcademicEvents(customExams?: ExamTimetableItem[]): AcademicEvent[] {
  let activeExams: ExamTimetableItem[] = customExams || [];

  if (activeExams.length === 0 && typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          activeExams = parsed;
        }
      }
    } catch {
      // ignore
    }
  }

  if (activeExams.length === 0) {
    activeExams = OFFICIAL_EXAM_TIMETABLE.exams;
  }

  // Filter to valid exams that have a confirmed exam date
  const validScheduledExams = activeExams.filter(
    (ex) => Boolean(ex.examDate && ex.examDate.trim() !== '' && ex.examDate !== 'TBD' && ex.examDate !== 'N/A' && ex.examDate !== '- -')
  );

  // Exclude default base exams so dynamic exams take precedence
  const nonExamEvents = BASE_ACADEMIC_CALENDAR_EVENTS.filter(
    (e) => !e.id.includes('-exam')
  );

  const examEvents: AcademicEvent[] = validScheduledExams.map((ex) => ({
    id: `ev-exam-${ex.courseCode.toLowerCase()}-${ex.examDate}`,
    title: `end sem exam: ${ex.courseTitle.toLowerCase()} (${ex.courseCode.toLowerCase()})`,
    date: ex.examDate,
    category: 'exam',
    description: `${ex.session === 'AN' ? 'afternoon session' : 'forenoon session'} (${ex.timeRange}) • slot ${ex.slot.toLowerCase()}`,
    isWorkingDay: true
  }));

  const allEvents = [...nonExamEvents, ...examEvents]
    .filter((e) => {
      // Calendar only allows end-semester exams (all internal/unit exams excluded)
      if (e.category === 'exam') {
        return e.title.toLowerCase().includes('end sem');
      }
      return true;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return allEvents;
}

/**
 * Returns upcoming academic events strictly from today (or reference date) onwards.
 * Strictly ensures no displayed event date is in the past.
 */
export function getUpcomingEvents(limit = 5, referenceDateStr?: string, customExams?: ExamTimetableItem[]): AcademicEvent[] {
  const todayStr = referenceDateStr || (() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  })();

  const allEvents = getSyncedAcademicEvents(customExams);

  return allEvents
    .filter(ev => {
      // Must not be in the past: ev.date must be >= todayStr
      return ev.date >= todayStr;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);
}

/**
 * Get Day Order for a date using academic calendar and cycle calculation.
 * Accurately reflects official working days, holidays, weekends, and study holidays.
 */
export function getDayOrderForDate(dateStr: string): { dayOrder: number; isWorkingDay: boolean; holidayName?: string } {
  // Check exact date or date within event range in synced events
  const events = getSyncedAcademicEvents();
  const matchingEvent = events.find(e => {
    if (e.date === dateStr) return true;
    if (e.endDate && dateStr >= e.date && dateStr <= e.endDate) return true;
    return false;
  });

  if (matchingEvent) {
    if (!matchingEvent.isWorkingDay || matchingEvent.category === 'holiday') {
      return { dayOrder: 0, isWorkingDay: false, holidayName: matchingEvent.title.toLowerCase() };
    }
    // Exam days have examinations scheduled, but are not normal timetable instructional day orders
    if (matchingEvent.category === 'exam') {
      return { dayOrder: 0, isWorkingDay: false, holidayName: 'end-sem exam' };
    }
    if (matchingEvent.dayOrder) {
      return { dayOrder: matchingEvent.dayOrder, isWorkingDay: true };
    }
  }

  const d = new Date(dateStr);
  const dayOfWeek = d.getDay(); // 0 = Sun, 6 = Sat
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return { dayOrder: 0, isWorkingDay: false, holidayName: dayOfWeek === 0 ? 'sunday' : 'saturday' };
  }

  // After the last working day (2026-11-20), regular semester lectures have concluded
  if (dateStr > '2026-11-20') {
    return { dayOrder: 0, isWorkingDay: false, holidayName: 'study holiday' };
  }

  // Before commencement of classes (2026-07-21)
  if (dateStr < '2026-07-21') {
    return { dayOrder: 0, isWorkingDay: false, holidayName: 'pre-semester break' };
  }

  // Deterministic 5-day cycle based on day of year
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = (d.getTime() - start.getTime()) + ((start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const dayOrder = ((dayOfYear % 5) + 1);
  return { dayOrder, isWorkingDay: true };
}
