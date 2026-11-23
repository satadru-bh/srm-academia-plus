import { describe, it, expect } from 'vitest';
import { 
  calculateProjectedGrade, 
  calculateBestPossibleGrade,
  calculateEndSemRequirement,
  hasEndSemExam,
  inferCourseCredits, 
  calculateCreditWeightedGpa,
  formatCourseTitle
} from '../grades';
import { CourseMarks } from '../types';

describe('calculateProjectedGrade (SRM 10-Point Scale on raw percentage)', () => {
  it('projects O grade for scores >= 91%', () => {
    const res = calculateProjectedGrade(95.45, 100);
    expect(res.grade).toBe('O');
    expect(res.gradePoint).toBe(10);
    expect(res.projectedScore).toBe(95.5);
    expect(res.status).toBe('outstanding');
  });

  it('projects A+ grade for scores between 81% and 90%', () => {
    const res = calculateProjectedGrade(48.3, 60);
    expect(res.grade).toBe('A+');
    expect(res.gradePoint).toBe(9);
    expect(res.projectedScore).toBe(80.5);
    expect(res.status).toBe('safe');
  });

  it('projects A grade for scores between 71% and 80%', () => {
    const res = calculateProjectedGrade(46.4, 60);
    expect(res.grade).toBe('A');
    expect(res.gradePoint).toBe(8);
    expect(res.status).toBe('safe');
  });

  it('projects B+ grade for scores between 61% and 70%', () => {
    const res = calculateProjectedGrade(62, 100);
    expect(res.grade).toBe('B+');
    expect(res.gradePoint).toBe(7);
    expect(res.status).toBe('borderline');
  });

  it('projects B or lower for scores near 50%', () => {
    const res = calculateProjectedGrade(31.1, 60);
    expect(res.grade).toBe('B');
    expect(res.gradePoint).toBe(6);
    expect(res.status).toBe('borderline');
  });

  it('projects F grade for scores below 50%', () => {
    const res = calculateProjectedGrade(20, 60);
    expect(res.grade).toBe('F');
    expect(res.gradePoint).toBe(0);
    expect(res.status).toBe('danger');
  });

  it('handles edge case when maxScore is 0', () => {
    const res = calculateProjectedGrade(0, 0);
    expect(res.grade).toBe('O');
    expect(res.projectedScore).toBe(100);
  });
});

describe('calculateBestPossibleGrade (SRM 100-mark scale: 60 internal + 40 end-sem)', () => {
  it('adds 40 marks from 75/75 end sem for 60-internal theory course', () => {
    // 21MAB201T: 48.3 / 60 internal -> 48.3 + 40 = 88.3 / 100 -> Grade A+
    const res = calculateBestPossibleGrade('21MAB201T', 48.3, 60);
    expect(res.hasEndSem).toBe(true);
    expect(res.bestPossibleTotal).toBe(88.3);
    expect(res.grade).toBe('A+');
    expect(res.gradePoint).toBe(9);
    expect(res.requirement75ForBestGrade.requiredMarksOutOf75).toBe(62);
  });

  it('handles lower-scoring internals with best possible scenario', () => {
    // 21CSS201T: 31.1 / 60 internal -> 31.1 + 40 = 71.1 / 100 -> Grade A
    const res = calculateBestPossibleGrade('21CSS201T', 31.1, 60);
    expect(res.hasEndSem).toBe(true);
    expect(res.bestPossibleTotal).toBe(71.1);
    expect(res.grade).toBe('A');
    expect(res.gradePoint).toBe(8);
  });

  it('evaluates 100% internal subjects directly on 100-mark scale', () => {
    // 21LEM202T: 95.45 / 100 -> Grade O
    const res = calculateBestPossibleGrade('21LEM202T', 95.45, 100);
    expect(res.hasEndSem).toBe(false);
    expect(res.bestPossibleTotal).toBe(95.5);
    expect(res.grade).toBe('O');
    expect(res.gradePoint).toBe(10);
    expect(res.requirement75ForBestGrade.displayText).toBe('100% internal');
  });
});

describe('calculateEndSemRequirement (75 marks converted to 40)', () => {
  it('calculates required marks out of 75 for achievable target grade', () => {
    // To get A+ (81) with 48.3 internal: needed from 40 = 32.7. Out of 75 = ceil(32.7 * 1.875) = 62
    const req = calculateEndSemRequirement(48.3, 'A+', true);
    expect(req.isAchievable).toBe(true);
    expect(req.requiredMarksOutOf75).toBe(62);
    expect(req.displayText).toBe('needs 62 / 75 in end sem');
  });

  it('reports not achievable when required marks exceed 75', () => {
    // To get O (91) with 48.3 internal: needed from 40 = 42.7. Out of 75 = ceil(42.7 * 1.875) = 81 > 75
    const req = calculateEndSemRequirement(48.3, 'O', true);
    expect(req.isAchievable).toBe(false);
    expect(req.requiredMarksOutOf75).toBe(81);
    expect(req.displayText).toContain('not achievable');
  });

  it('reports already secured when internal score exceeds grade threshold', () => {
    // Threshold for C is 50. Internal score = 52.
    const req = calculateEndSemRequirement(52, 'C', true);
    expect(req.isAlreadySecured).toBe(true);
    expect(req.requiredMarksOutOf75).toBe(0);
    expect(req.displayText).toBe('0 / 75 (secured)');
  });

  it('handles 100% internal subjects with no end sem', () => {
    const req = calculateEndSemRequirement(74.4, 'A', false);
    expect(req.hasEndSem).toBe(false);
    expect(req.displayText).toBe('100% internal');
  });
});

describe('hasEndSemExam detection', () => {
  it('identifies 60-internal theory courses as having end sem', () => {
    expect(hasEndSemExam('21MAB201T', 60)).toBe(true);
    expect(hasEndSemExam('21CSC201J', 60)).toBe(true);
    expect(hasEndSemExam('21CSS201T', 60)).toBe(true);
  });

  it('identifies 100-internal practical and ethics courses as having no end sem', () => {
    expect(hasEndSemExam('21CSC203P', 100)).toBe(false);
    expect(hasEndSemExam('21LEM202T', 100)).toBe(false);
    expect(hasEndSemExam('21LEM201T', 100)).toBe(false);
  });
});

describe('inferCourseCredits', () => {
  it('uses exact course credit map for known courses', () => {
    expect(inferCourseCredits('21MAB201T')).toBe(4);
    expect(inferCourseCredits('21CSC201J')).toBe(4);
    expect(inferCourseCredits('21CSS201T')).toBe(4);
    expect(inferCourseCredits('21CSC203P')).toBe(4);
    expect(inferCourseCredits('21LEM202T')).toBe(3);
    expect(inferCourseCredits('21LEM201T')).toBe(0);
  });

  it('infers from suffix for unknown courses', () => {
    expect(inferCourseCredits('21CSE999J')).toBe(4);
    expect(inferCourseCredits('21CSE999T')).toBe(3);
    expect(inferCourseCredits('21CSE999P')).toBe(4);
  });
});

describe('calculateCreditWeightedGpa', () => {
  const testCourses: CourseMarks[] = [
    {
      courseCode: '21MAB201T',
      courseTitle: 'Transforms and Boundary Value Problems',
      totalScore: 48.3,
      maxTotalScore: 60,
      marks: []
    },
    {
      courseCode: '21CSC201J',
      courseTitle: 'Data Structures and Algorithms',
      totalScore: 46.4,
      maxTotalScore: 60,
      marks: []
    },
    {
      courseCode: '21CSS201T',
      courseTitle: 'Computer Organization and Architecture',
      totalScore: 31.1,
      maxTotalScore: 60,
      marks: []
    },
    {
      courseCode: '21CSC203P',
      courseTitle: 'Advanced Programming Practice',
      totalScore: 74.4,
      maxTotalScore: 100,
      marks: []
    },
    {
      courseCode: '21CSC202J',
      courseTitle: 'Operating Systems',
      totalScore: 36.05,
      maxTotalScore: 60,
      marks: []
    },
    {
      courseCode: '21LEM202T',
      courseTitle: 'UHV-II',
      totalScore: 95.45,
      maxTotalScore: 100,
      marks: []
    },
    {
      courseCode: '21LEM201T',
      courseTitle: 'Professional Ethics',
      totalScore: 62.0,
      maxTotalScore: 100,
      marks: []
    }
  ];

  it('calculates best-possible scenario weighted GPA by default', () => {
    const result = calculateCreditWeightedGpa(testCourses);

    // Total credits: 4 + 4 + 4 + 4 + 4 + 3 + 0 = 23
    expect(result.totalCredits).toBe(23);
    expect(result.totalScore).toBe(393.7);
    expect(result.maxScore).toBe(540);

    // Best-possible scenario:
    // 21MAB201T: A+ (9) * 4 = 36
    // 21CSC201J: A+ (9) * 4 = 36
    // 21CSS201T: A (8) * 4 = 32
    // 21CSC203P: A (8) * 4 = 32
    // 21CSC202J: A (8) * 4 = 32
    // 21LEM202T: O (10) * 3 = 30
    // 21LEM201T: B+ (7) * 0 = 0
    // Sum = 198. GPA = 198 / 23 = 8.61
    expect(result.totalWeightedPoints).toBe(198);
    expect(result.gpa).toBe(8.61);
  });

  it('supports current-ratio mode for historic comparison', () => {
    const result = calculateCreditWeightedGpa(testCourses, 'current-ratio');
    expect(result.totalCredits).toBe(23);
    expect(result.totalWeightedPoints).toBe(178);
    expect(result.gpa).toBe(7.74);
  });

  it('handles empty course list safely', () => {
    const result = calculateCreditWeightedGpa([]);
    expect(result.gpa).toBe(10.0);
    expect(result.totalCredits).toBe(0);
    expect(result.totalScore).toBe(0);
  });
});

describe('formatCourseTitle (Dynamic Title Shortener on the Fly)', () => {
  it('shortens UHV-II excessively long course title cleanly', () => {
    const raw = 'UHV-II: Universal Human Values – Understanding Harmony and Ethical Human Conduct';
    expect(formatCourseTitle(raw)).toBe('uhv-ii: universal human values');
  });

  it('shortens any long title with long subtitle after dash or colon', () => {
    const raw = 'Introduction to Quantum Information – Fundamentals and Practical Implementation';
    expect(formatCourseTitle(raw)).toBe('introduction to quantum information');
  });

  it('keeps short and normal titles intact while lowercasing', () => {
    expect(formatCourseTitle('Operating Systems')).toBe('operating systems');
    expect(formatCourseTitle('Data Structures and Algorithms')).toBe('data structures and algorithms');
  });

  it('handles empty and null strings safely', () => {
    expect(formatCourseTitle('')).toBe('');
  });
});
