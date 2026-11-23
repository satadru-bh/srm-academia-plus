import notesData from '../data/notesCatalogue.json';
import { getPapersForCourse, getPaperFiles, getDownloadUrl, type PyqPaper } from './pyqClient';

export interface NoteResource {
  name: string;
  fileId: string;
  url: string;
  unit?: number;
  isLive?: boolean;
  examYear?: number | null;
  examMonth?: number | null;
  examTerm?: string | null;
  sessionLabel?: string | null;
  paperId?: string;
  publisher?: string | null;
}

export interface SubjectCatalogue {
  id: string;
  name: string;
  semester: number | null;
  notes: NoteResource[];
  papers: NoteResource[];
  syllabus: NoteResource[];
  counts: {
    notes: number;
    papers: number;
    syllabus: number;
    total: number;
  };
}

export interface NotesCatalogueData {
  updatedAt: string;
  totalSubjects: number;
  subjects: SubjectCatalogue[];
}

const catalogue: NotesCatalogueData = notesData as NotesCatalogueData;

/**
 * Returns all catalogued subjects across all semesters
 */
export function getAllSubjects(): SubjectCatalogue[] {
  return catalogue.subjects || [];
}

/**
 * Find subject by unique slug/id
 */
export function getSubjectById(id: string): SubjectCatalogue | undefined {
  return catalogue.subjects.find((s) => s.id === id);
}

/**
 * Normalizes text for search and matching
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Search subjects and resources by query tokens and filters
 */
export function searchNotes(
  query: string,
  semester?: number | 'all',
  category?: 'all' | 'notes' | 'papers' | 'syllabus'
): SubjectCatalogue[] {
  const normQuery = normalizeText(query);
  const tokens = normQuery ? normQuery.split(' ').filter(Boolean) : [];

  return catalogue.subjects.filter((subject) => {
    // 1. Filter by semester
    if (typeof semester === 'number') {
      if (subject.semester !== semester) return false;
    }

    // 2. Filter by category
    if (category && category !== 'all') {
      if (category === 'notes' && subject.counts.notes === 0) return false;
      if (category === 'papers' && subject.counts.papers === 0) return false;
      if (category === 'syllabus' && subject.counts.syllabus === 0) return false;
    }

    // 3. Match query tokens against subject name, notes titles, and paper names
    if (tokens.length === 0) return true;

    const subjectNormName = normalizeText(subject.name);
    const allMatches = tokens.every((token) => {
      if (subjectNormName.includes(token)) return true;
      if (subject.notes.some((n) => normalizeText(n.name).includes(token))) return true;
      if (subject.papers.some((p) => normalizeText(p.name).includes(token))) return true;
      return false;
    });

    return allMatches;
  });
}

/**
 * Maps known course acronyms and titles to catalogue subject names
 */
export const COURSE_ALIASES: Record<string, string> = {
  '21mab201t': 'Transforms and Boundary Value Problems (TBVP)',
  '21csc201j': 'Data Structures and Algorithms (DSA)',
  '21csc202j': 'Operating Systems (OS)',
  '21css201t': 'Computer Organization and Architecture (COA)',
  '21csc203p': 'Advanced Programming Practice (APP)',
  '21lem202t': 'Universal Human Values',
  '21lem201t': 'Professional Ethics'
};

/**
 * Finds the canonical course code for a subject name or catalogue entry
 */
export function getCourseCodeForSubject(subjectIdOrName: string): string | undefined {
  if (!subjectIdOrName) return undefined;
  const norm = normalizeText(subjectIdOrName);

  // 1. Check direct code match in alias keys
  const upper = subjectIdOrName.trim().toUpperCase();
  if (COURSE_ALIASES[upper.toLowerCase()]) {
    return upper;
  }

  // 2. Match against alias values
  for (const [code, alias] of Object.entries(COURSE_ALIASES)) {
    const normAlias = normalizeText(alias);
    if (normAlias.includes(norm) || norm.includes(normAlias)) {
      return code.toUpperCase();
    }
  }

  // 3. Fallback: match by subject name in catalogue
  const subject = catalogue.subjects.find(
    (s) => s.id === subjectIdOrName || normalizeText(s.name) === norm
  );
  if (subject) {
    const normSub = normalizeText(subject.name);
    for (const [code, alias] of Object.entries(COURSE_ALIASES)) {
      if (normalizeText(alias).includes(normSub) || normSub.includes(normalizeText(alias))) {
        return code.toUpperCase();
      }
    }
  }

  return undefined;
}

/**
 * Intelligently matches an enrolled course (by code or title) to a catalogue subject entry
 */
export function findNotesForCourse(courseCode: string, courseTitle: string): SubjectCatalogue | undefined {
  const codeNorm = courseCode.trim().toLowerCase();
  
  // 1. Check direct alias
  const aliasTarget = COURSE_ALIASES[codeNorm];
  if (aliasTarget) {
    const directMatch = catalogue.subjects.find((s) => s.name.toLowerCase() === aliasTarget.toLowerCase());
    if (directMatch) return directMatch;
  }

  // 2. Match by course title tokens
  const cleanTitle = normalizeText(courseTitle);
  if (!cleanTitle) return undefined;

  const titleTokens = cleanTitle.split(' ').filter((t) => t.length > 2);

  // Score match by token overlap
  let bestScore = 0;
  let bestMatch: SubjectCatalogue | undefined = undefined;

  for (const subject of catalogue.subjects) {
    const subjectNorm = normalizeText(subject.name);
    let matchedTokens = 0;

    for (const token of titleTokens) {
      if (subjectNorm.includes(token)) {
        matchedTokens++;
      }
    }

    const score = matchedTokens / (titleTokens.length || 1);
    if (score > 0.5 && score > bestScore) {
      bestScore = score;
      bestMatch = subject;
    }
  }

  return bestMatch;
}

/**
 * Generates an embeddable Google Drive preview link from fileId or direct URL
 */
export function extractGoogleDrivePreviewUrl(urlOrFileId: string): string {
  if (!urlOrFileId) return '';

  // Direct Cloudflare R2 / PDF stream URLs
  if (urlOrFileId.includes('.pdf') || urlOrFileId.includes('r2.dev') || urlOrFileId.includes('r2.cloudflarestorage.com')) {
    return urlOrFileId;
  }

  // Extract ID if raw fileId or URL with /d/{id} or id={id}
  let fileId = urlOrFileId.trim();

  const idMatch = urlOrFileId.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (idMatch) {
    fileId = idMatch[1];
  } else {
    const queryMatch = urlOrFileId.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (queryMatch) {
      fileId = queryMatch[1];
    }
  }

  return `https://drive.google.com/file/d/${fileId}/preview`;
}

/**
 * Formats raw resource filenames (e.g. "Unit 5||Dijkstras Algorithm", "2024_Nov") into clean, elegant titles
 */
export function formatResourceTitle(rawName: string, kind?: 'note' | 'paper' | 'syllabus'): string {
  if (!rawName) return 'untitled resource';

  let cleaned = rawName.replace(/\|\|/g, ' – ').replace(/_/g, ' ').trim();

  // If question paper like "2024 Nov" or "2023 May"
  const pyqMatch = cleaned.match(/^(\d{4})\s+([a-zA-Z]+)$/);
  if (pyqMatch) {
    const year = pyqMatch[1];
    const month = pyqMatch[2];
    return `${month} ${year} exam paper`.toLowerCase();
  }

  if (kind === 'paper' && !cleaned.toLowerCase().includes('paper') && !cleaned.toLowerCase().includes('exam')) {
    return `${cleaned} exam paper`.toLowerCase();
  }

  if (kind === 'syllabus' && cleaned.toLowerCase() === 'syllabus') {
    return 'official course syllabus';
  }

  return cleaned.toLowerCase();
}

/**
 * Formats a PyqPaper from the live SRM PYQ API into a consistent human-readable title
 */
export function formatPyqPaperTitle(paper: PyqPaper): string {
  const parts: string[] = [];

  if (paper.session_label) {
    parts.push(paper.session_label.trim());
  } else if (paper.exam_month) {
    const monthNames = ['', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    if (paper.exam_month >= 1 && paper.exam_month <= 12) {
      parts.push(monthNames[paper.exam_month]);
    }
  }

  if (paper.exam_year) {
    parts.push(String(paper.exam_year));
  }

  if (parts.length > 0) {
    return `${parts.join(' ')} exam paper`.toLowerCase();
  }

  if (paper.title) {
    let t = paper.title.toLowerCase();
    if (!t.includes('exam') && !t.includes('paper')) {
      t = `${t} exam paper`;
    }
    return t;
  }

  return 'university exam paper';
}

/**
 * Fetches real, live exam question papers from the SRM PYQ API and resolves their primary R2 PDF files
 */
export async function fetchLivePapersForCourse(courseCode: string): Promise<NoteResource[]> {
  if (!courseCode) return [];

  try {
    const papersResult = await getPapersForCourse(courseCode, { limit: 20 });
    if (!papersResult.data || papersResult.data.length === 0) {
      return [];
    }

    const resources: NoteResource[] = await Promise.all(
      papersResult.data.map(async (paper) => {
        let fileUrl = '';
        let fileId = paper.id;

        try {
          const files = await getPaperFiles(paper.id);
          const primary = files.find((f) => f.is_primary) || files[0];
          if (primary) {
            fileId = primary.id;
            fileUrl = primary.public_url || '';
          }
        } catch {
          // File URL will be lazily resolved on click if needed
        }

        return {
          name: formatPyqPaperTitle(paper),
          fileId,
          url: fileUrl,
          isLive: true,
          examYear: paper.exam_year,
          examMonth: paper.exam_month,
          examTerm: paper.exam_term,
          sessionLabel: paper.session_label,
          paperId: paper.id,
          publisher: paper.publisher
        };
      })
    );

    return resources;
  } catch (err) {
    console.warn('[notes] fetchLivePapersForCourse error:', err);
    return [];
  }
}

/**
 * Resolves a paper's file download / public streaming link on demand
 */
export async function resolvePaperFileUrl(paperId: string, fileId?: string): Promise<string | null> {
  if (fileId) {
    const url = await getDownloadUrl(fileId);
    if (url) return url;
  }
  if (paperId) {
    const files = await getPaperFiles(paperId);
    const primary = files.find((f) => f.is_primary) || files[0];
    if (primary) {
      if (primary.public_url) return primary.public_url;
      return await getDownloadUrl(primary.id);
    }
  }
  return null;
}
