import { describe, it, expect } from 'vitest';
import { 
  calculatePrediction, 
  getClassesForDateRange, 
  ClassPredictionItem 
} from '../predictor';
import { AttendanceItem, TimetableResponse } from '../types';

describe('Attendance Predictor Engine', () => {
  const sampleAttendance: AttendanceItem[] = [
    {
      courseCode: '21MAB201T',
      courseTitle: 'Transforms and Boundary Value Problems',
      facultyName: 'Dr. Thenmozhi S',
      hoursConducted: 50,
      hoursPresent: 40, // 80.0%
      hoursAbsent: 10,
      attendancePercent: 80.0
    },
    {
      courseCode: '21CSC201J',
      courseTitle: 'Data Structures and Algorithms',
      facultyName: 'Akilandasowmya',
      hoursConducted: 60,
      hoursPresent: 45, // 75.0%
      hoursAbsent: 15,
      attendancePercent: 75.0
    }
  ];

  it('calculates impact of attending upcoming classes', () => {
    const predictions: ClassPredictionItem[] = [
      { courseCode: '21MAB201T', courseTitle: 'Transforms', action: 'attend' },
      { courseCode: '21MAB201T', courseTitle: 'Transforms', action: 'attend' },
      { courseCode: '21CSC201J', courseTitle: 'DSA', action: 'attend' }
    ];

    const result = calculatePrediction(sampleAttendance, predictions);

    // Initial total: 110 conducted, 85 present -> 77.27%
    // New total: 113 conducted, 88 present -> 77.88%
    expect(result.predictedOverallPercent).toBeGreaterThan(result.currentOverallPercent);
    expect(result.deltaPercent).toBeGreaterThan(0);
    expect(result.status).toBe('borderline');

    // Check individual course updates
    const mab = result.courseBreakdown.find(c => c.courseCode === '21MAB201T');
    expect(mab).toBeDefined();
    expect(mab?.predictedConducted).toBe(52);
    expect(mab?.predictedPresent).toBe(42);
    expect(mab?.predictedPercent).toBe(80.8);
  });

  it('calculates impact of missing classes and warns on danger threshold', () => {
    const predictions: ClassPredictionItem[] = [
      { courseCode: '21CSC201J', courseTitle: 'DSA', action: 'miss' },
      { courseCode: '21CSC201J', courseTitle: 'DSA', action: 'miss' }
    ];

    const result = calculatePrediction(sampleAttendance, predictions);

    // DSA was at 75.0% (45/60). Missing 2 classes -> 45/62 = 72.58% -> DANGER (<75%)
    const dsa = result.courseBreakdown.find(c => c.courseCode === '21CSC201J');
    expect(dsa).toBeDefined();
    expect(dsa?.predictedConducted).toBe(62);
    expect(dsa?.predictedPresent).toBe(45);
    expect(dsa?.predictedPercent).toBe(72.6);
    expect(dsa?.status).toBe('danger');
    expect(dsa?.marginLabel).toContain('attend next');
  });

  it('resolves date ranges against timetable correctly', () => {
    const testTimetable: TimetableResponse = {
      batch: 2,
      days: {
        1: [
          {
            slotName: 'Slot 6',
            timeRange: '12:30 - 01:20',
            courseCode: '21MAB201T',
            courseTitle: 'Transforms',
            faculty: 'Dr. Thenmozhi',
            room: 'TP 706',
            dayOrder: 1
          }
        ],
        2: [
          {
            slotName: 'Slot 6',
            timeRange: '12:30 - 01:20',
            courseCode: '21CSC201J',
            courseTitle: 'DSA',
            faculty: 'Akilandasowmya',
            room: 'TP 706',
            dayOrder: 2
          }
        ]
      }
    };

    // Range spanning 2 weekdays
    const schedule = getClassesForDateRange('2026-11-23', '2026-11-24', testTimetable);
    expect(schedule.length).toBeGreaterThan(0);
    expect(schedule[0].slots).toBeDefined();
  });
});
