// Strongly typed CampusWeb / SRM Academia & Student Portal models

export interface StudentProfile {
  name: string;
  regNo: string;
  department: string;
  program: string;
  semester: number | string;
  section?: string;
  comboBatch?: string; // e.g. "2/2" (Batch 2)
  batch?: number | string;
  facultyAdvisor?: {
    name: string;
    email?: string;
    mobile?: string;
  };
  mobile?: string;
  email?: string;
}

export interface AttendanceItem {
  courseCode: string;
  courseTitle: string;
  courseCategory?: string;
  facultyName: string;
  slot?: string;
  roomNo?: string;
  hoursConducted: number;
  hoursPresent: number;
  hoursAbsent: number;
  attendancePercent: number;
  credit?: number;
}

export interface MarkComponent {
  testName: string; // e.g. "FT-I", "FT-II", "FT-III", "FT-IV", "LLT-I"
  score: number;
  maxScore: number;
  weightage?: number;
}

export interface CourseMarks {
  courseCode: string;
  courseTitle: string;
  marks: MarkComponent[];
  totalScore?: number;
  maxTotalScore?: number;
  credit?: number;
}

export interface StudentUserResponse {
  profile: StudentProfile;
  attendance: AttendanceItem[];
  marks: CourseMarks[];
  rawAttendance?: Record<string, unknown>[];
  rawMarks?: Record<string, unknown>[];
}

export interface TimetableSlot {
  slotName: string;
  timeRange: string;
  courseCode: string;
  courseTitle: string;
  faculty: string;
  room: string;
  dayOrder: number; // 1 to 5
}

/**
 * Check if a room/venue is assigned and valid (skips unallotted, pending, or TBA venues)
 */
export function hasAssignedVenue(room: string | undefined | null): boolean {
  if (!room) return false;
  const r = room.trim().toLowerCase();
  return !(
    r === '' ||
    r === '-' ||
    r === 'n/a' ||
    r === 'na' ||
    r === 'tba' ||
    r === 'tbd' ||
    r.includes('to be allot') ||
    r.includes('to be announce')
  );
}

export interface TimetableDay {
  dayOrder: number;
  slots: TimetableSlot[];
}

export interface TimetableResponse {
  batch: number;
  days: Record<number, TimetableSlot[]>;
}

export interface DayOrderInfo {
  dayOrder: number;
  date: string;
  isHoliday: boolean;
  holidayReason?: string;
}

export interface AuthLoginResponse {
  success: boolean;
  user?: StudentUserResponse;
  sessionToken?: string;
  csrfToken?: string;
  rawCookies?: string;
  message?: string;
}

export interface SPLoginResponse {
  success: boolean;
  message?: string;
  spSessionId?: string;
}

export interface ExamTimetableItem {
  courseCode: string;
  courseTitle: string;
  slot: string;
  semester: string | number;
  examDate: string; // YYYY-MM-DD
  dayOfWeek: string;
  session: 'FN' | 'AN'; // Forenoon (10:00 AM - 01:00 PM) or Afternoon (02:00 PM - 05:00 PM)
  timeRange: string;
  venue?: string;
  examType: 'Theory' | 'Practical' | 'Online';
  hallTicketStatus?: 'Released' | 'Verified';
}

export interface ExamTimetableResponse {
  semester: string;
  academicYear: string;
  exams: ExamTimetableItem[];
}
