import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  setPyqApiBaseUrl,
  clearPyqCache,
  searchCourses,
  getCourseByCode,
  getPapersForCourse,
  getPaperFiles,
  getDownloadUrl,
  type PyqCourse,
  type PyqPaper,
  type PyqFile
} from '../pyqClient';

describe('SRM PYQ API Client', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    clearPyqCache();
    setPyqApiBaseUrl('/api/pyq');
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('searches courses with query parameters and handles pagination', async () => {
    const mockData = {
      data: [
        {
          id: 'c1',
          course_code: '21CSC201J',
          course_name: 'Data Structures and Algorithms',
          department: null,
          program: null,
          semester: 3,
          is_active: true
        }
      ],
      page: {
        has_more: false,
        next_cursor: null,
        limit: 10
      }
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockData
    });

    const res = await searchCourses('21CSC201J', 10);
    expect(res.data).toHaveLength(1);
    expect(res.data[0].course_code).toBe('21CSC201J');
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/pyq/v1/courses?q=21CSC201J&limit=10',
      expect.objectContaining({ method: 'GET' })
    );
  });

  it('retrieves course by code and handles URL encoding for special characters', async () => {
    const mockCourse: PyqCourse = {
      id: 'c2',
      course_code: ',20PCSE85J',
      course_name: 'Rest Apis Development',
      department: null,
      program: null,
      semester: null,
      is_active: true
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: mockCourse })
    });

    const res = await getCourseByCode(',20PCSE85J');
    expect(res).not.toBeNull();
    expect(res?.course_code).toBe(',20PCSE85J');
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/pyq/v1/courses/%2C20PCSE85J',
      expect.objectContaining({ method: 'GET' })
    );
  });

  it('returns null on 404 for non-existent course', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ detail: 'Course not found' })
    });

    const res = await getCourseByCode('INVALID999');
    expect(res).toBeNull();
  });

  it('retrieves papers for a course with year and term filters', async () => {
    const mockPaper: PyqPaper = {
      id: 'p1',
      course_id: 'c1',
      title: 'Data Structures and Algorithms',
      exam_year: 2025,
      exam_month: 7,
      exam_term: 'may_june',
      session_label: 'May-June',
      source_subject_url: 'http://dspace.srmist.edu.in',
      source_item_url: 'http://dspace.srmist.edu.in/handle/123',
      publisher: 'SRM IST',
      created_at: '2026-03-20T20:00:00Z'
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        data: [mockPaper],
        page: { has_more: false, next_cursor: null, limit: 20 }
      })
    });

    const res = await getPapersForCourse('21CSC201J', { year: 2025, term: 'may_june' });
    expect(res.data).toHaveLength(1);
    expect(res.data[0].id).toBe('p1');
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/pyq/v1/courses/21CSC201J/papers?year=2025&term=may_june&limit=20',
      expect.objectContaining({ method: 'GET' })
    );
  });

  it('caches repeated paper queries in memory to avoid duplicate network fetches', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: [], page: { has_more: false, next_cursor: null, limit: 20 } })
    });

    await getPapersForCourse('21CSC201J');
    await getPapersForCourse('21CSC201J');

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('retrieves paper files and download URLs', async () => {
    const mockFile: PyqFile = {
      id: 'f1',
      paper_id: 'p1',
      storage_provider: 'r2',
      bucket: 'srm-pyqs',
      object_key: 'pyqs/v1/test.pdf',
      source_pdf_url: 'http://example.com/test.pdf',
      public_url: 'https://pub-r2.dev/pyqs/v1/test.pdf',
      mime_type: 'application/pdf',
      size_bytes: 12345,
      sha256: null,
      is_primary: true,
      created_at: '2026-03-20T20:00:00Z'
    };

    global.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes('/download')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({
            data: {
              file_id: 'f1',
              download_url: 'https://pub-r2.dev/pyqs/v1/test.pdf',
              url_type: 'public',
              expires_in: null
            }
          })
        };
      }
      if (url.includes('/files')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({ data: [mockFile] })
        };
      }
      throw new Error(`Unexpected URL: ${url}`);
    });

    const files = await getPaperFiles('p1');
    expect(files).toHaveLength(1);
    expect(files[0].public_url).toBe('https://pub-r2.dev/pyqs/v1/test.pdf');

    const downloadUrl = await getDownloadUrl('f1');
    expect(downloadUrl).toBe('https://pub-r2.dev/pyqs/v1/test.pdf');
  });
});
