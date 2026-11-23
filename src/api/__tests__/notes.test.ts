import { describe, it, expect } from 'vitest';
import { 
  getAllSubjects, 
  searchNotes, 
  findNotesForCourse,
  extractGoogleDrivePreviewUrl,
  formatPyqPaperTitle,
  getCourseCodeForSubject
} from '../notes';

describe('Notes Query Engine', () => {
  it('loads all catalogued subjects', () => {
    const subjects = getAllSubjects();
    expect(subjects.length).toBeGreaterThan(90);
    expect(subjects.some((s) => s.name.includes('Transforms'))).toBe(true);
  });

  it('searches subjects by query tokens', () => {
    const results = searchNotes('data structures');
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0].name.toLowerCase()).toContain('data structures');
    expect(results[0].notes.length).toBeGreaterThan(0);
  });

  it('filters by semester correctly', () => {
    const sem3Results = searchNotes('', 3);
    expect(sem3Results.length).toBeGreaterThan(0);
    sem3Results.forEach((s) => {
      expect(s.semester).toBe(3);
    });
  });

  it('accurately matches enrolled student course codes to catalogue entry', () => {
    // 21MAB201T -> Transforms and Boundary Value Problems
    const tbvp = findNotesForCourse('21MAB201T', 'transforms and boundary value problems');
    expect(tbvp).toBeDefined();
    expect(tbvp?.name).toContain('Transforms');
    expect(tbvp?.notes.length).toBe(5); // 5 units
    expect(tbvp?.papers.length).toBeGreaterThan(0);

    // 21CSC201J -> Data Structures and Algorithms
    const dsa = findNotesForCourse('21CSC201J', 'data structures and algorithms');
    expect(dsa).toBeDefined();
    expect(dsa?.name).toContain('Data Structures');

    // 21CSC202J -> Operating Systems
    const os = findNotesForCourse('21CSC202J', 'operating systems');
    expect(os).toBeDefined();
    expect(os?.name).toContain('Operating Systems');

    // 21CSS201T -> Computer Organization and Architecture
    const coa = findNotesForCourse('21CSS201T', 'computer organization and architecture');
    expect(coa).toBeDefined();
    expect(coa?.name).toContain('Computer Organization');

    // 21CSC203P -> Advanced Programming Practice
    const app = findNotesForCourse('21CSC203P', 'advanced programming practice');
    expect(app).toBeDefined();
    expect(app?.name).toContain('Advanced Programming');
  });

  it('generates secure Google Drive preview URLs from file IDs or URLs', () => {
    const fromId = extractGoogleDrivePreviewUrl('1yB4vRF4qjKsyvb24tzt0lYYvA96CEUqC');
    expect(fromId).toBe('https://drive.google.com/file/d/1yB4vRF4qjKsyvb24tzt0lYYvA96CEUqC/preview');

    const fromUrl = extractGoogleDrivePreviewUrl('https://drive.google.com/file/d/1OBnc8BsJYTNGutwGYpC1ov7QqtFeWQ-J/view');
    expect(fromUrl).toBe('https://drive.google.com/file/d/1OBnc8BsJYTNGutwGYpC1ov7QqtFeWQ-J/preview');
  });

  it('formats live PYQ paper titles with session and year', () => {
    expect(formatPyqPaperTitle({
      id: '1',
      course_id: 'c1',
      title: 'DSA',
      exam_year: 2025,
      exam_month: 7,
      exam_term: 'may_june',
      session_label: 'May-June',
      source_subject_url: null,
      source_item_url: '',
      publisher: null,
      created_at: ''
    })).toBe('may-june 2025 exam paper');

    expect(formatPyqPaperTitle({
      id: '2',
      course_id: 'c1',
      title: 'Data Structures and Algorithms',
      exam_year: 2024,
      exam_month: null,
      exam_term: null,
      session_label: null,
      source_subject_url: null,
      source_item_url: '',
      publisher: null,
      created_at: ''
    })).toBe('2024 exam paper');
  });

  it('finds course codes for catalogued subjects via aliases', () => {
    const code = getCourseCodeForSubject('Data Structures and Algorithms (DSA)');
    expect(code).toBe('21CSC201J');
  });
});
