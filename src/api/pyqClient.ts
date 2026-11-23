/**
 * SRM PYQ API Client
 * Provides access to courses, previous year question papers, and Cloudflare R2 PDFs.
 */

export interface PyqCourse {
  id: string;
  course_code: string;
  course_name: string;
  department: string | null;
  program: string | null;
  semester: number | null;
  is_active: boolean;
}

export interface PyqPaper {
  id: string;
  course_id: string;
  title: string;
  exam_year: number | null;
  exam_month: number | null;
  exam_term: string | null;
  session_label: string | null;
  source_subject_url: string | null;
  source_item_url: string;
  publisher: string | null;
  created_at: string;
}

export interface PyqFile {
  id: string;
  paper_id: string;
  storage_provider: string;
  bucket: string;
  object_key: string;
  source_pdf_url: string | null;
  public_url: string | null;
  mime_type: string;
  size_bytes: number | null;
  sha256: string | null;
  is_primary: boolean;
  created_at: string;
}

export interface PyqDownloadResponse {
  data: {
    file_id: string;
    download_url: string;
    url_type: 'signed' | 'public';
    expires_in: number | null;
  };
}

export interface PaginatedResult<T> {
  data: T[];
  course?: {
    id: string;
    course_code: string;
    course_name: string;
  };
  page?: {
    has_more: boolean;
    next_cursor: string | null;
    limit: number;
  };
}

let apiBaseUrl = '/api/pyq';

export function setPyqApiBaseUrl(url: string) {
  apiBaseUrl = url.replace(/\/+$/, '');
}

interface CacheItem<T> {
  data: T;
  expiresAt: number;
}

const memoryCache = new Map<string, CacheItem<any>>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export function clearPyqCache() {
  memoryCache.clear();
}

function getFromCache<T>(key: string): T | null {
  const item = memoryCache.get(key);
  if (!item) return null;
  if (Date.now() > item.expiresAt) {
    memoryCache.delete(key);
    return null;
  }
  return item.data as T;
}

function setInCache<T>(key: string, data: T, ttlMs = CACHE_TTL_MS) {
  memoryCache.set(key, {
    data,
    expiresAt: Date.now() + ttlMs,
  });
}

/**
 * Searches for courses by course code or title
 */
export async function searchCourses(
  query: string = '',
  limit: number = 20,
  cursor?: string
): Promise<PaginatedResult<PyqCourse>> {
  const params = new URLSearchParams();
  if (query.trim()) params.set('q', query.trim());
  if (limit) params.set('limit', String(limit));
  if (cursor) params.set('cursor', cursor);

  const qs = params.toString();
  const url = `${apiBaseUrl}/v1/courses${qs ? `?${qs}` : ''}`;

  const cached = getFromCache<PaginatedResult<PyqCourse>>(url);
  if (cached) return cached;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      return { data: [] };
    }

    const json = await res.json();
    setInCache(url, json);
    return json;
  } catch (err) {
    console.warn('[pyqClient] searchCourses error:', err);
    return { data: [] };
  }
}

/**
 * Fetches course details by exact course code (URL-encoded)
 */
export async function getCourseByCode(courseCode: string): Promise<PyqCourse | null> {
  if (!courseCode) return null;

  const encodedCode = encodeURIComponent(courseCode.trim());
  const url = `${apiBaseUrl}/v1/courses/${encodedCode}`;

  const cached = getFromCache<PyqCourse>(url);
  if (cached) return cached;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (res.status === 404) return null;
    if (!res.ok) return null;

    const json = await res.json();
    const course = json.data as PyqCourse;
    setInCache(url, course);
    return course;
  } catch (err) {
    console.warn('[pyqClient] getCourseByCode error:', err);
    return null;
  }
}

export interface GetPapersOptions {
  year?: number;
  term?: string;
  cursor?: string;
  limit?: number;
}

/**
 * Retrieves papers for a specific course
 */
export async function getPapersForCourse(
  courseCode: string,
  options: GetPapersOptions = {}
): Promise<PaginatedResult<PyqPaper>> {
  if (!courseCode) return { data: [] };

  const encodedCode = encodeURIComponent(courseCode.trim());
  const params = new URLSearchParams();
  if (options.year) params.set('year', String(options.year));
  if (options.term) params.set('term', options.term);
  if (options.cursor) params.set('cursor', options.cursor);
  params.set('limit', String(options.limit ?? 20));

  const qs = params.toString();
  const url = `${apiBaseUrl}/v1/courses/${encodedCode}/papers?${qs}`;

  const cached = getFromCache<PaginatedResult<PyqPaper>>(url);
  if (cached) return cached;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      return { data: [] };
    }

    const json = await res.json();
    setInCache(url, json);
    return json;
  } catch (err) {
    console.warn('[pyqClient] getPapersForCourse error:', err);
    return { data: [] };
  }
}

/**
 * Retrieves storage files attached to a paper
 */
export async function getPaperFiles(paperId: string): Promise<PyqFile[]> {
  if (!paperId) return [];

  const url = `${apiBaseUrl}/v1/papers/${paperId}/files`;
  const cached = getFromCache<PyqFile[]>(url);
  if (cached) return cached;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) return [];

    const json = await res.json();
    const files = (json.data || []) as PyqFile[];
    setInCache(url, files);
    return files;
  } catch (err) {
    console.warn('[pyqClient] getPaperFiles error:', err);
    return [];
  }
}

/**
 * Retrieves direct download / streaming URL for a file
 */
export async function getDownloadUrl(fileId: string, ttlSeconds = 900): Promise<string | null> {
  if (!fileId) return null;

  const url = `${apiBaseUrl}/v1/files/${fileId}/download?ttl_seconds=${ttlSeconds}`;
  const cached = getFromCache<string>(url);
  if (cached) return cached;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) return null;

    const json = (await res.json()) as PyqDownloadResponse;
    const downloadUrl = json.data?.download_url || null;
    if (downloadUrl) {
      // Cache for slightly less than TTL to be safe
      setInCache(url, downloadUrl, Math.max(60000, (ttlSeconds - 60) * 1000));
    }
    return downloadUrl;
  } catch (err) {
    console.warn('[pyqClient] getDownloadUrl error:', err);
    return null;
  }
}
