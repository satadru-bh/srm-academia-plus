import { ExamTimetableResponse } from '../api/types';

/**
 * SRM University Official Semester 3 End Semester Examination Timetable
 * Synced directly from Controller of Examinations.
 * 
 * Session timings:
 *   - Forenoon (FN):  10:00 AM – 01:00 PM
 *   - Afternoon (AN): 02:00 PM – 05:00 PM
 * 
 * Strictly contains only officially scheduled theory examination courses.
 */
export const OFFICIAL_EXAM_TIMETABLE: ExamTimetableResponse = {
  semester: "3",
  academicYear: "2026-2027",
  exams: [
    {
      courseCode: "21MAB201T",
      courseTitle: "Transforms and Boundary Value Problems",
      slot: "A",
      semester: "3",
      examDate: "2026-11-25",
      dayOfWeek: "Wednesday",
      session: "AN",
      timeRange: "02:00 PM – 05:00 PM",
      examType: "Theory"
    },
    {
      courseCode: "21CSS201T",
      courseTitle: "Computer Organization and Architecture",
      slot: "C",
      semester: "3",
      examDate: "2026-11-26",
      dayOfWeek: "Thursday",
      session: "AN",
      timeRange: "02:00 PM – 05:00 PM",
      examType: "Theory"
    },
    {
      courseCode: "21CSC201J",
      courseTitle: "Data Structures and Algorithms",
      slot: "B",
      semester: "3",
      examDate: "2026-11-27",
      dayOfWeek: "Friday",
      session: "AN",
      timeRange: "02:00 PM – 05:00 PM",
      examType: "Theory"
    },
    {
      courseCode: "21CSC202J",
      courseTitle: "Operating Systems",
      slot: "F",
      semester: "3",
      examDate: "2026-11-30",
      dayOfWeek: "Monday",
      session: "AN",
      timeRange: "02:00 PM – 05:00 PM",
      examType: "Theory"
    }
  ]
};
