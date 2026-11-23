import { describe, it, expect } from 'vitest';
import {
  parseFacultyTokens,
  isFacultyMatch,
  matchStudentFaculty
} from '../facultyMatcher';
import { FACULTY_DIRECTORY, FacultyMember } from '../../data/facultyDirectory';
import { REAL_STUDENT_DATA } from '../../data/studentData';

describe('facultyMatcher', () => {
  it('correctly parses name tokens without honorifics and extracts initials and empId', () => {
    const p1 = parseFacultyTokens('Dr. Vidhya S (102939)');
    expect(p1.words).toEqual(['vidhya']);
    expect(Array.from(p1.initials)).toEqual(['s']);
    expect(p1.empId).toBe('102939');

    const p2 = parseFacultyTokens('Dr. Srividhya S');
    expect(p2.words).toEqual(['srividhya']);
    expect(Array.from(p2.initials)).toEqual(['s']);
    expect(p2.empId).toBeUndefined();

    const p3 = parseFacultyTokens('Dr. Arunarani AR (102975)');
    expect(p3.words).toEqual(['arunarani']);
    expect(p3.initials.has('a')).toBe(true);
    expect(p3.initials.has('r')).toBe(true);
    expect(p3.empId).toBe('102975');
  });

  it('strictly prevents false-positive substring matches (e.g. Srividhya vs Vidhya)', () => {
    const srividhyaS: FacultyMember = {
      id: 'fac-srividhya-s',
      name: 'Dr. Srividhya S',
      designation: 'Assistant Professor',
      department: 'Computing Technologies'
    };

    const srividhyaB: FacultyMember = {
      id: 'fac-srividhya-b',
      name: 'Dr. Srividhya B',
      designation: 'Assistant Professor',
      department: 'Computing Technologies'
    };

    const targetVidhyaS = parseFacultyTokens('Dr.Vidhya S (102939)');
    const targetVidhyaB = parseFacultyTokens('Dr.Vidhya B (103387)');

    // Neither Srividhya S nor Srividhya B should match Vidhya S or Vidhya B
    expect(isFacultyMatch(srividhyaS, targetVidhyaS)).toBe(false);
    expect(isFacultyMatch(srividhyaS, targetVidhyaB)).toBe(false);
    expect(isFacultyMatch(srividhyaB, targetVidhyaS)).toBe(false);
    expect(isFacultyMatch(srividhyaB, targetVidhyaB)).toBe(false);

    // Actual Vidhya S and Vidhya B must match correctly
    const vidhyaS: FacultyMember = {
      id: 'fac-dr-s-vidhya',
      name: 'Dr. Vidhya S',
      empId: '102939',
      designation: 'Assistant Professor',
      department: 'Computing Technologies'
    };

    const vidhyaB: FacultyMember = {
      id: 'fac-dr-vidhya-b',
      name: 'Dr. Vidhya B',
      empId: '103387',
      designation: 'Assistant Professor',
      department: 'Computing Technologies'
    };

    expect(isFacultyMatch(vidhyaS, targetVidhyaS)).toBe(true);
    expect(isFacultyMatch(vidhyaB, targetVidhyaB)).toBe(true);
    // Across initial cross-check
    expect(isFacultyMatch(vidhyaS, targetVidhyaB)).toBe(false);
    expect(isFacultyMatch(vidhyaB, targetVidhyaS)).toBe(false);
  });

  it('matches exactly the 8 authentic student instructors and advisor from REAL_STUDENT_DATA with zero false positives', () => {
    const mapped = matchStudentFaculty(FACULTY_DIRECTORY, REAL_STUDENT_DATA as any);
    const myFaculty = mapped.filter((f) => f.isMyFaculty);

    expect(myFaculty.length).toBe(8);

    const matchedNames = myFaculty.map((f) => f.name);
    expect(matchedNames).toContain('Dr. Thenmozhi S');
    expect(matchedNames).toContain('Ms. Akilandasowmya G');
    expect(matchedNames).toContain('Mr. Nagarajan S');
    expect(matchedNames).toContain('Dr. Vidhya S');
    expect(matchedNames).toContain('Dr. Vidhya B');
    expect(matchedNames).toContain('Dr. Arunarani A R');
    expect(matchedNames).toContain('Dr. Nancy Prasanna Joseph');
    expect(matchedNames).toContain('Dr. Beena Godbin A');

    // Confirm neither Srividhya S nor Srividhya B is marked
    const srividhyaSMember = mapped.find((f) => f.id === 'fac-srividhya-s');
    expect(srividhyaSMember?.isMyFaculty).toBe(false);

    const srividhyaBMember = mapped.find((f) => f.id === 'fac-srividhya-b');
    expect(srividhyaBMember?.isMyFaculty).toBe(false);
  });
});
