import { FacultyMember } from '../data/facultyDirectory';
import { StudentUserResponse } from '../api/types';

export interface ParsedFacultyName {
  words: string[];
  initials: Set<string>;
  empId?: string;
}

/**
 * Normalizes and extracts substantive words, initials, and employee ID from any faculty name string.
 * Strips titles/honorifics (Dr, Mr, Ms, Mrs, Prof, etc.).
 * Correctly distinguishes words like "vidhya" from "srividhya" to prevent substring false-positives.
 */
export function parseFacultyTokens(nameStr: string): ParsedFacultyName {
  if (!nameStr) {
    return { words: [], initials: new Set() };
  }

  let clean = nameStr.toLowerCase();

  // 1. Extract employee ID e.g. "(102939)" or standalone 5-6 digit ID
  const empMatch = clean.match(/\b(\d{5,6})\b/);
  const empId = empMatch ? empMatch[1] : undefined;

  // 2. Remove employee ID and parentheses
  clean = clean.replace(/\(\s*\d+\s*\)/g, ' ').replace(/\b\d{5,6}\b/g, ' ');

  // 3. Remove common honorifics/prefixes at start or surrounded by boundaries
  clean = clean.replace(/(^|\s)(dr|mr|ms|mrs|prof|prof\s*\.?\s*dr)\.?\s+/gi, ' ');

  // 4. Replace non-alphanumeric chars with spaces
  clean = clean.replace(/[^a-z0-9\s]/g, ' ');

  // 5. Split into tokens
  const rawTokens = clean.split(/\s+/).filter(Boolean);
  const words: string[] = [];
  const initials = new Set<string>();

  for (const t of rawTokens) {
    if (t.length === 1) {
      initials.add(t);
    } else if (t.length === 2 && ['ar', 'sk', 'pk', 'vr', 'mr', 'pr', 'sr', 'gv', 'mk'].includes(t)) {
      // Common South Indian combined initials (e.g. A.R. -> AR)
      initials.add(t[0]);
      initials.add(t[1]);
    } else {
      words.push(t);
    }
  }

  words.sort();
  return { words, initials, empId };
}

/**
 * Checks whether candidate (from directory) matches target (from student attendance / advisor)
 */
export function isFacultyMatch(candidate: FacultyMember, targetParsed: ParsedFacultyName): boolean {
  const cParsed = parseFacultyTokens(candidate.name);
  const cEmp = candidate.empId || cParsed.empId;
  const tEmp = targetParsed.empId;

  // 1. Employee ID comparison (ground truth when available)
  if (cEmp && tEmp) {
    return cEmp === tEmp;
  }

  // 2. If neither or only one has employee ID, compare substantive name tokens
  if (cParsed.words.length === 0 || targetParsed.words.length === 0) {
    return false;
  }

  // Exact word-set match (e.g. ['vidhya'] === ['vidhya'], but NOT ['srividhya'] === ['vidhya'])
  const exactWords =
    cParsed.words.length === targetParsed.words.length &&
    cParsed.words.every((w, i) => w === targetParsed.words[i]);

  // Handle joined compound words e.g. "arunarani" vs "aruna rani"
  const joinedWords = cParsed.words.join('') === targetParsed.words.join('');

  if (!exactWords && !joinedWords) {
    return false;
  }

  // 3. Initials verification: if both have initials specified, they must share at least one initial
  if (cParsed.initials.size > 0 && targetParsed.initials.size > 0) {
    let hasIntersection = false;
    for (const init of cParsed.initials) {
      if (targetParsed.initials.has(init)) {
        hasIntersection = true;
        break;
      }
    }
    return hasIntersection;
  }

  return true;
}

/**
 * Dynamically resolves and matches faculty for the logged-in student.
 * Guarantees that:
 * 1. Exactly the student's actual course instructors and advisor have isMyFaculty = true.
 * 2. Unmatched faculty explicitly have isMyFaculty = false, roleBadge = undefined, coursesTaught = undefined.
 * 3. Never produces false-positive substring matches (e.g. Srividhya matching Vidhya).
 */
export function matchStudentFaculty(
  directory: FacultyMember[],
  user: StudentUserResponse | null
): FacultyMember[] {
  if (!user || !Array.isArray(user.attendance) || user.attendance.length === 0) {
    // When no logged-in student session, preserve default directory members with their default isMyFaculty
    return [...directory];
  }

  // 1. Parse all course instructors from attendance
  interface CourseTarget {
    code: string;
    title: string;
    slot?: string;
    parsed: ParsedFacultyName;
  }
  const courseTargets: CourseTarget[] = [];
  for (const c of user.attendance) {
    if (c.facultyName && c.facultyName.trim()) {
      courseTargets.push({
        code: c.courseCode,
        title: c.courseTitle,
        slot: c.slot,
        parsed: parseFacultyTokens(c.facultyName)
      });
    }
  }

  // 2. Parse advisor from profile if present
  let advisorParsed: ParsedFacultyName | null = null;
  const advisorProfile = user.profile?.facultyAdvisor;
  if (advisorProfile?.name && advisorProfile.name.trim()) {
    advisorParsed = parseFacultyTokens(advisorProfile.name);
  }

  // 3. Map directory entries: ONLY matched entries get isMyFaculty: true; all others get isMyFaculty: false
  return directory.map((f): FacultyMember => {
    // Check advisor match first
    if (advisorParsed && isFacultyMatch(f, advisorParsed)) {
      return {
        ...f,
        isMyFaculty: true,
        roleBadge: 'Faculty Advisor',
        email: advisorProfile?.email || f.email,
        phone: advisorProfile?.mobile || f.phone
      };
    }

    // Check course instructor matches
    const instructorCourses: { code: string; title: string; slot?: string }[] = [];
    for (const ct of courseTargets) {
      if (isFacultyMatch(f, ct.parsed)) {
        if (!instructorCourses.some(x => x.code === ct.code)) {
          instructorCourses.push({ code: ct.code, title: ct.title, slot: ct.slot });
        }
      }
    }
    if (instructorCourses.length > 0) {
      return {
        ...f,
        isMyFaculty: true,
        roleBadge: 'Course Instructor',
        coursesTaught: instructorCourses
      };
    }

    // Not matched: explicitly false to prevent stale/incorrect flags
    return {
      ...f,
      isMyFaculty: false,
      roleBadge: undefined,
      coursesTaught: undefined
    };
  });
}

/**
 * Strips employee ID (e.g. "(103240)", "[103240]", "- 103240") from faculty names for clean UI display.
 */
export function stripEmployeeId(nameStr: string | undefined | null): string {
  if (!nameStr) return '';
  return nameStr
    .replace(/\s*\(\s*\d+\s*\)/g, '')
    .replace(/\s*-\s*\d+\s*/g, '')
    .replace(/\s*\[\s*\d+\s*\]/g, '')
    .replace(/\s*\b\d{5,6}\b/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
