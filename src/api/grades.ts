import { CourseMarks } from './types';

export interface ProjectedGradeResult {
  grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
  gradePoint: number;
  projectedScore: number;
  bestPossibleTotal: number;
  hasEndSem: boolean;
  status: 'outstanding' | 'safe' | 'borderline' | 'danger';
  label: string;
}

export interface EndSemRequirement {
  hasEndSem: boolean;
  targetGrade: string;
  minMarksNeeded: number; // out of 100
  internalScore: number;
  marksNeededFromEndSem40: number; // out of 40
  requiredMarksOutOf75: number; // out of 75
  isAchievable: boolean;
  isAlreadySecured: boolean;
  displayText: string;
}

export interface BestPossibleGradeResult {
  grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
  gradePoint: number;
  bestPossibleTotal: number; // out of 100
  internalScore: number;
  maxInternalScore: number;
  hasEndSem: boolean;
  status: 'outstanding' | 'safe' | 'borderline' | 'danger';
  label: string;
  requirement75ForBestGrade: EndSemRequirement;
}

export interface CourseGpaBreakdown {
  courseCode: string;
  courseTitle: string;
  score: number;
  maxScore: number;
  bestPossibleTotal: number;
  hasEndSem: boolean;
  percentage: number;
  credits: number;
  grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
  gradePoint: number;
  weightedPoints: number;
  endSemRequirement: EndSemRequirement;
}

export interface CreditWeightedGpaResult {
  gpa: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
  totalCredits: number;
  totalWeightedPoints: number;
  courseBreakdown: CourseGpaBreakdown[];
}

/**
 * Standard course credit mapping for SRM Institute of Science and Technology
 * B.Tech Odd Semester (Regulation 2021) directly matched to CampusWeb source.
 */
export const SRM_COURSE_CREDITS: Record<string, number> = {
  '21MAB201T': 4,
  '21CSC201J': 4,
  '21CSS201T': 4, // 4 credits in SRM curriculum
  '21CSC203P': 4, // 4 credits in SRM curriculum
  '21CSC202J': 4,
  '21LEM202T': 3, // 3 credits in SRM curriculum
  '21LEM201T': 0, // 0 credits in SRM curriculum (Mandatory non-credit)
};

/**
 * SRM 10-Point Grading Scale thresholds (always decided on marks out of 100):
 *   >= 91  -> O  (10.0)
 *   81-90  -> A+ (9.0)
 *   71-80  -> A  (8.0)
 *   61-70  -> B+ (7.0)
 *   51-60  -> B  (6.0)
 *   50     -> C  (5.0)
 *   < 50   -> F  (0.0)
 */
export const GRADE_MIN_MARKS: Record<string, number> = {
  'O': 91,
  'A+': 81,
  'A': 71,
  'B+': 61,
  'B': 51,
  'C': 50,
  'F': 0,
};

export const GRADE_POINTS: Record<string, number> = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'F': 0,
};

export const GRADES_ORDER: Array<'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F'> = [
  'O', 'A+', 'A', 'B+', 'B', 'C', 'F'
];

/**
 * Infer or retrieve course credits automatically for ANY subject:
 * - Uses direct credit if present on the source object
 * - Looks up verified official SRM credit table (4 for MAB201T, CSC201J, CSS201T, CSC203P, CSC202J; 3 for LEM202T; 0 for LEM201T)
 * - Integrated theory + lab ('J') -> 4 credits
 * - Practical lab ('P' | 'L') -> 4 credits
 * - Theory ('T') -> 3 credits
 * - Default -> 3 credits
 */
export function inferCourseCredits(courseCode: string, directCredit?: number): number {
  if (typeof directCredit === 'number' && Number.isFinite(directCredit)) {
    return directCredit;
  }
  const code = (courseCode || '').trim().toUpperCase();
  if (typeof SRM_COURSE_CREDITS[code] === 'number') {
    return SRM_COURSE_CREDITS[code];
  }
  if (code.endsWith('J')) return 4;
  if (code.endsWith('P') || code.endsWith('L')) return 4;
  if (code.endsWith('T')) return 3;
  return 3;
}

/**
 * Detects whether a subject has an end-semester written examination
 * (60 internal marks + 40 end-sem marks) or is a 100% internal course.
 */
export function hasEndSemExam(courseCode: string, maxTotalScore?: number): boolean {
  if (typeof maxTotalScore === 'number' && maxTotalScore > 0) {
    // Subjects with max internal score <= 75 (typically 60) have a 40-mark end-sem exam
    return maxTotalScore <= 75;
  }
  const code = (courseCode || '').trim().toUpperCase();
  if (code.endsWith('P') || code.endsWith('L') || code === '21LEM201T' || code === '21LEM202T') {
    return false;
  }
  return true;
}

/**
 * Calculates the required marks out of 75 in the end-semester exam
 * to achieve a specified target grade (out of 100).
 * 
 * Formula:
 *   - Target total out of 100: T = GRADE_MIN_MARKS[targetGrade]
 *   - Internal score out of 60: I = internalScore
 *   - Marks needed from 40: E_40 = max(0, T - I)
 *   - Converted to 75 scale: E_75 = ceil(E_40 * (75 / 40)) = ceil(E_40 * 1.875)
 */
export function calculateEndSemRequirement(
  internalScore: number,
  targetGrade: string,
  hasEndSem = true
): EndSemRequirement {
  const target = GRADE_MIN_MARKS[targetGrade] ?? 50;

  if (!hasEndSem) {
    return {
      hasEndSem: false,
      targetGrade,
      minMarksNeeded: target,
      internalScore,
      marksNeededFromEndSem40: 0,
      requiredMarksOutOf75: 0,
      isAchievable: true,
      isAlreadySecured: true,
      displayText: '100% internal'
    };
  }

  const marksNeededFromEndSem40 = Math.max(0, target - internalScore);
  const requiredMarksOutOf75 = Math.ceil(marksNeededFromEndSem40 * 1.875);

  if (marksNeededFromEndSem40 <= 0) {
    return {
      hasEndSem: true,
      targetGrade,
      minMarksNeeded: target,
      internalScore,
      marksNeededFromEndSem40: 0,
      requiredMarksOutOf75: 0,
      isAchievable: true,
      isAlreadySecured: true,
      displayText: '0 / 75 (secured)'
    };
  }

  if (requiredMarksOutOf75 > 75) {
    return {
      hasEndSem: true,
      targetGrade,
      minMarksNeeded: target,
      internalScore,
      marksNeededFromEndSem40,
      requiredMarksOutOf75,
      isAchievable: false,
      isAlreadySecured: false,
      displayText: `> 75 / 75 (not achievable)`
    };
  }

  return {
    hasEndSem: true,
    targetGrade,
    minMarksNeeded: target,
    internalScore,
    marksNeededFromEndSem40,
    requiredMarksOutOf75,
    isAchievable: true,
    isAlreadySecured: false,
    displayText: `needs ${requiredMarksOutOf75} / 75 in end sem`
  };
}

/**
 * Calculates the best POSSIBLE scenario grade for a course:
 * - 60 internal + 40 end-sem: student can score 75/75 in end sem (40/40),
 *   yielding best possible total = internalScore + 40 (out of 100).
 * - 100% internal: best possible total = internalScore + remaining (up to 100).
 * Decided strictly on marks out of 100 using SRM's official 10-point scale.
 */
export function calculateBestPossibleGrade(
  courseCode: string,
  internalScore: number,
  maxInternalScore: number
): BestPossibleGradeResult {
  const hasEndSem = hasEndSemExam(courseCode, maxInternalScore);

  let bestPossibleTotal: number;
  if (hasEndSem) {
    bestPossibleTotal = Math.min(100, Math.round((internalScore + 40) * 10) / 10);
  } else {
    const remaining = Math.max(0, 100 - maxInternalScore);
    bestPossibleTotal = Math.min(100, Math.round((internalScore + remaining) * 10) / 10);
  }

  let grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F' = 'F';
  let gradePoint = 0;
  let status: 'outstanding' | 'safe' | 'borderline' | 'danger' = 'danger';
  let label = 'needs recovery';

  if (bestPossibleTotal >= 91) {
    grade = 'O';
    gradePoint = 10;
    status = 'outstanding';
    label = 'outstanding';
  } else if (bestPossibleTotal >= 81) {
    grade = 'A+';
    gradePoint = 9;
    status = 'safe';
    label = 'excellent';
  } else if (bestPossibleTotal >= 71) {
    grade = 'A';
    gradePoint = 8;
    status = 'safe';
    label = 'very good';
  } else if (bestPossibleTotal >= 61) {
    grade = 'B+';
    gradePoint = 7;
    status = 'borderline';
    label = 'good';
  } else if (bestPossibleTotal >= 51) {
    grade = 'B';
    gradePoint = 6;
    status = 'borderline';
    label = 'above average';
  } else if (bestPossibleTotal >= 50) {
    grade = 'C';
    gradePoint = 5;
    status = 'borderline';
    label = 'pass';
  } else {
    grade = 'F';
    gradePoint = 0;
    status = 'danger';
    label = 'needs recovery';
  }

  const req = calculateEndSemRequirement(internalScore, grade, hasEndSem);

  return {
    grade,
    gradePoint,
    bestPossibleTotal,
    internalScore,
    maxInternalScore,
    hasEndSem,
    status,
    label,
    requirement75ForBestGrade: req
  };
}

/**
 * Calculates continuous evaluation projected grade on raw percentage.
 */
export function calculateProjectedGrade(score: number, maxScore: number, courseCode = ''): ProjectedGradeResult {
  if (maxScore <= 0) {
    return {
      grade: 'O',
      gradePoint: 10,
      projectedScore: 100,
      bestPossibleTotal: 100,
      hasEndSem: false,
      status: 'outstanding',
      label: 'perfect evaluation'
    };
  }

  const rawPercentage = (score / maxScore) * 100;
  const projectedScore = Math.round(rawPercentage * 10) / 10;
  const hasEndSem = hasEndSemExam(courseCode, maxScore);
  const best = calculateBestPossibleGrade(courseCode, score, maxScore);

  let grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F' = 'F';
  let gradePoint = 0;
  let status: 'outstanding' | 'safe' | 'borderline' | 'danger' = 'danger';
  let label = 'needs recovery';

  if (projectedScore >= 91) {
    grade = 'O';
    gradePoint = 10;
    status = 'outstanding';
    label = 'outstanding';
  } else if (projectedScore >= 80.5) {
    grade = 'A+';
    gradePoint = 9;
    status = 'safe';
    label = 'excellent';
  } else if (projectedScore >= 70.5) {
    grade = 'A';
    gradePoint = 8;
    status = 'safe';
    label = 'very good';
  } else if (projectedScore >= 60.5) {
    grade = 'B+';
    gradePoint = 7;
    status = 'borderline';
    label = 'good';
  } else if (projectedScore >= 50.5) {
    grade = 'B';
    gradePoint = 6;
    status = 'borderline';
    label = 'above average';
  } else if (projectedScore >= 49.5) {
    grade = 'C';
    gradePoint = 5;
    status = 'borderline';
    label = 'pass cutoff';
  } else {
    grade = 'F';
    gradePoint = 0;
    status = 'danger';
    label = 'needs recovery';
  }

  return {
    grade,
    gradePoint,
    projectedScore,
    bestPossibleTotal: best.bestPossibleTotal,
    hasEndSem,
    status,
    label
  };
}

/**
 * Calculates credit-weighted predicted GPA and internal marks aggregate
 * based on all enrolled courses, considering the best POSSIBLE scenario grade by default.
 */
export function calculateCreditWeightedGpa(
  courseMarksList: CourseMarks[],
  mode: 'best-possible' | 'current-ratio' = 'best-possible'
): CreditWeightedGpaResult {
  if (!courseMarksList || courseMarksList.length === 0) {
    return {
      gpa: 10.0,
      totalScore: 0,
      maxScore: 0,
      percentage: 100,
      totalCredits: 0,
      totalWeightedPoints: 0,
      courseBreakdown: []
    };
  }

  let aggregateScore = 0;
  let aggregateMax = 0;
  let totalCredits = 0;
  let totalWeightedPoints = 0;

  const breakdown: CourseGpaBreakdown[] = courseMarksList.map((c) => {
    const score = c.totalScore ?? c.marks.reduce((sum, m) => sum + m.score, 0);
    const maxScore = c.maxTotalScore ?? c.marks.reduce((sum, m) => sum + m.maxScore, 0);
    const rawPct = maxScore > 0 ? (score / maxScore) * 100 : 100;
    const percentage = Math.round(rawPct * 10) / 10;

    const credits = inferCourseCredits(c.courseCode, c.credit);
    const hasEndSem = hasEndSemExam(c.courseCode, maxScore);

    let grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
    let gradePoint: number;
    let bestPossibleTotal: number;

    if (mode === 'best-possible') {
      const best = calculateBestPossibleGrade(c.courseCode, score, maxScore);
      grade = best.grade;
      gradePoint = best.gradePoint;
      bestPossibleTotal = best.bestPossibleTotal;
    } else {
      bestPossibleTotal = percentage;
      const proj = calculateProjectedGrade(score, maxScore, c.courseCode);
      grade = proj.grade;
      gradePoint = proj.gradePoint;
    }

    const weightedPoints = gradePoint * credits;
    const endSemReq = calculateEndSemRequirement(score, grade, hasEndSem);

    aggregateScore += score;
    aggregateMax += maxScore;
    totalCredits += credits;
    totalWeightedPoints += weightedPoints;

    return {
      courseCode: c.courseCode,
      courseTitle: c.courseTitle,
      score: Math.round(score * 100) / 100,
      maxScore: Math.round(maxScore * 100) / 100,
      bestPossibleTotal,
      hasEndSem,
      percentage,
      credits,
      grade,
      gradePoint,
      weightedPoints,
      endSemRequirement: endSemReq
    };
  });

  const gpa = totalCredits > 0 
    ? Math.round((totalWeightedPoints / totalCredits) * 100) / 100 
    : 10.0;

  const percentage = aggregateMax > 0 
    ? Math.round((aggregateScore / aggregateMax) * 1000) / 10 
    : 100;

  return {
    gpa,
    totalScore: Math.round(aggregateScore * 100) / 100,
    maxScore: Math.round(aggregateMax * 100) / 100,
    percentage,
    totalCredits,
    totalWeightedPoints,
    courseBreakdown: breakdown
  };
}

/**
 * Shortens excessively long or verbose course titles dynamically on the fly.
 * Keeps card titles clean, prevents multi-line overflow, and ensures uniform grid alignment.
 * e.g. "UHV-II: Universal Human Values – Understanding Harmony and Ethical Human Conduct" -> "uhv-ii: universal human values"
 */
/**
 * Universal dynamic course title formatter.
 * Works generically for any subject ever:
 * - Trims and normalizes excessive spaces
 * - Dynamically extracts primary course title when followed by verbose subtitles (after ' – ', ' - ', or ': ')
 * - Strips redundant trailing academic parentheticals like (Theory), (Practical)
 */
export function formatCourseTitle(title: string): string {
  if (!title) return '';
  let cleaned = title.trim();

  // Strip excessive trailing explanatory parentheticals like "(Theory)", "(Practical)" if present
  cleaned = cleaned.replace(/\s*\((theory|practical|lab)\)\s*$/i, '');

  // If title has a dash/hyphen or colon with a verbose subtitle (> 28 chars)
  if (cleaned.length > 28) {
    if (cleaned.includes(' – ')) {
      const parts = cleaned.split(' – ');
      if (parts[0].length >= 4) cleaned = parts[0].trim();
    } else if (cleaned.includes(' - ')) {
      const parts = cleaned.split(' - ');
      if (parts[0].length >= 4) cleaned = parts[0].trim();
    } else if (cleaned.includes(': ')) {
      const parts = cleaned.split(': ');
      if (parts.length > 2) {
        cleaned = `${parts[0]}: ${parts[1]}`.trim();
      }
    }
  }

  return cleaned.toLowerCase();
}

