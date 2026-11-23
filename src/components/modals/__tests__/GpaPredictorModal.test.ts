import { describe, it, expect } from 'vitest';
import { REAL_STUDENT_DATA } from '../../../data/studentData';
import { calculateProjectedGrade } from '../../../api/grades';

describe('GpaPredictorModal logic verification', () => {
  it('should process all user marks without throwing', () => {
    const user = REAL_STUDENT_DATA;
    expect(user).toBeDefined();
    expect(user.marks).toBeDefined();

    const initialCourseGrades: Record<string, { credit: number; grade: string; defaultGrade: string }> = {};

    user.marks.forEach((m) => {
      const courseAtt = user.attendance.find((c) => c.courseCode === m.courseCode);
      const credit = (courseAtt as { credit?: number } | undefined)?.credit ? Number((courseAtt as { credit?: number }).credit) : 4;
      const totalScore = m.totalScore || 0;
      const maxScore = m.maxTotalScore || 100;
      const projected = calculateProjectedGrade(totalScore, maxScore);

      initialCourseGrades[m.courseCode] = {
        credit,
        grade: projected.grade,
        defaultGrade: projected.grade
      };
    });

    expect(Object.keys(initialCourseGrades).length).toBeGreaterThan(0);

    // Now test pacing logic
    const applyPacing = (pacing: 'current' | 'steady' | 'ambitious' | 'perfection') => {
      const updated: Record<string, { credit: number; grade: string; defaultGrade: string }> = {};
      Object.entries(initialCourseGrades).forEach(([code, data]) => {
        let g = data.defaultGrade;
        if (pacing === 'steady') {
          if (g === 'A+') g = 'O';
          else if (g === 'A') g = 'A+';
          else if (g === 'B+') g = 'A';
          else if (g === 'B') g = 'B+';
          else if (g === 'C') g = 'B';
        } else if (pacing === 'ambitious') {
          g = ['O', 'A+'].includes(data.defaultGrade) ? 'O' : 'A+';
        } else if (pacing === 'perfection') {
          g = 'O';
        }
        updated[code] = { ...data, grade: g };
      });
      return updated;
    };

    const steadyState = applyPacing('steady');
    expect(steadyState).toBeDefined();

    // Test GPA calculation
    const currentCourses = initialCourseGrades;
    let earnedPoints = 0;
    let creditsSum = 0;
    Object.entries(currentCourses).forEach(([_, data]) => {
      if (data.credit > 0) {
        // Look at GRADE_POINTS! Does GRADE_POINTS exist in grades.ts or GpaPredictorModal?
        const GRADE_POINTS_LOCAL: Record<string, number> = {
          'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'F': 0
        };
        const pts = GRADE_POINTS_LOCAL[data.grade] ?? 0;
        earnedPoints += data.credit * pts;
        creditsSum += data.credit;
      }
    });
    expect(creditsSum).toBeGreaterThan(0);
  });
});
