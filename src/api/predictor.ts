import { AttendanceItem, TimetableResponse, TimetableSlot } from './types';
import { calculateAttendanceMargin } from './margin';
import { getDayOrderForDate } from '../data/academicCalendar';

export interface ClassPredictionItem {
  courseCode: string;
  courseTitle: string;
  action: 'attend' | 'miss';
  date?: string;
  slot?: string;
  timeRange?: string;
}

export interface CoursePredictionResult {
  courseCode: string;
  courseTitle: string;
  currentConducted: number;
  currentPresent: number;
  currentPercent: number;
  predictedConducted: number;
  predictedPresent: number;
  predictedPercent: number;
  deltaPercent: number;
  marginLabel: string;
  status: 'safe' | 'borderline' | 'danger';
}

export interface OverallPredictionResult {
  currentOverallPercent: number;
  predictedOverallPercent: number;
  deltaPercent: number;
  totalConductedDelta: number;
  totalPresentDelta: number;
  status: 'safe' | 'borderline' | 'danger';
  marginLabel: string;
  courseBreakdown: CoursePredictionResult[];
}

export function calculatePrediction(
  courses: AttendanceItem[],
  predictions: ClassPredictionItem[]
): OverallPredictionResult {
  let initialTotalConducted = 0;
  let initialTotalPresent = 0;
  let finalTotalConducted = 0;
  let finalTotalPresent = 0;

  // Group prediction items by course code
  const predictionMap: Record<string, { attend: number; miss: number }> = {};
  for (const item of predictions) {
    if (!predictionMap[item.courseCode]) {
      predictionMap[item.courseCode] = { attend: 0, miss: 0 };
    }
    if (item.action === 'attend') {
      predictionMap[item.courseCode].attend += 1;
    } else {
      predictionMap[item.courseCode].miss += 1;
    }
  }

  const courseBreakdown: CoursePredictionResult[] = courses.map((course) => {
    const curConducted = course.hoursConducted;
    const curPresent = course.hoursPresent;
    const curPercent = curConducted > 0 
      ? Math.round((curPresent / curConducted) * 1000) / 10 
      : 100;

    const deltas = predictionMap[course.courseCode] || { attend: 0, miss: 0 };
    const addedConducted = deltas.attend + deltas.miss;
    const addedPresent = deltas.attend;

    const newConducted = curConducted + addedConducted;
    const newPresent = curPresent + addedPresent;
    const newPercent = newConducted > 0 
      ? Math.round((newPresent / newConducted) * 1000) / 10 
      : 100;

    const margin = calculateAttendanceMargin(newConducted, newPresent);
    const delta = Math.round((newPercent - curPercent) * 10) / 10;

    initialTotalConducted += curConducted;
    initialTotalPresent += curPresent;
    finalTotalConducted += newConducted;
    finalTotalPresent += newPresent;

    return {
      courseCode: course.courseCode,
      courseTitle: course.courseTitle,
      currentConducted: curConducted,
      currentPresent: curPresent,
      currentPercent: curPercent,
      predictedConducted: newConducted,
      predictedPresent: newPresent,
      predictedPercent: newPercent,
      deltaPercent: delta,
      marginLabel: margin.label,
      status: margin.status
    };
  });

  const curOverall = initialTotalConducted > 0 
    ? Math.round((initialTotalPresent / initialTotalConducted) * 1000) / 10 
    : 100;
  const predOverall = finalTotalConducted > 0 
    ? Math.round((finalTotalPresent / finalTotalConducted) * 1000) / 10 
    : 100;
  const overallMargin = calculateAttendanceMargin(finalTotalConducted, finalTotalPresent);

  return {
    currentOverallPercent: curOverall,
    predictedOverallPercent: predOverall,
    deltaPercent: Math.round((predOverall - curOverall) * 10) / 10,
    totalConductedDelta: finalTotalConducted - initialTotalConducted,
    totalPresentDelta: finalTotalPresent - initialTotalPresent,
    status: overallMargin.status,
    marginLabel: overallMargin.label,
    courseBreakdown
  };
}

export interface DayRangeSchedule {
  date: string;
  dayOrder: number;
  isWorkingDay: boolean;
  holidayName?: string;
  slots: TimetableSlot[];
}

export function getClassesForDateRange(
  startDateStr: string,
  endDateStr: string,
  timetable: TimetableResponse
): DayRangeSchedule[] {
  const result: DayRangeSchedule[] = [];
  const current = new Date(startDateStr);
  const end = new Date(endDateStr);

  // Guard against runaway ranges (max 30 days)
  let count = 0;
  while (current <= end && count < 30) {
    count++;
    const dateStr = current.toISOString().split('T')[0];
    const { dayOrder, isWorkingDay, holidayName } = getDayOrderForDate(dateStr);

    let slots: TimetableSlot[] = [];
    if (isWorkingDay && dayOrder > 0) {
      slots = (timetable.days[dayOrder] || []).filter(
        (s) => s.courseTitle && s.courseTitle !== 'Free Period' && s.courseTitle !== 'No class'
      );
    }

    result.push({
      date: dateStr,
      dayOrder,
      isWorkingDay,
      holidayName,
      slots
    });

    current.setDate(current.getDate() + 1);
  }

  return result;
}
