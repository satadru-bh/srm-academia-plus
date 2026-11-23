import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { CampusWebClient } from '../client';
import { REAL_STUDENT_DATA } from '../../data/studentData';
import { defaultCache } from '../cache';

describe('CampusWebClient', () => {
  let client: CampusWebClient;

  beforeEach(() => {
    client = new CampusWebClient();
    client.clearSession();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('authenticates session and returns student profile on successful login', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      headers: new Headers({
        'x-session-token': 'real_active_session',
        'x-csrf-token': 'csrf_token_real'
      }),
      json: async () => REAL_STUDENT_DATA
    } as Response);

    const res = await client.login('ra2511033010043', 'Sata2008#');
    expect(res.success).toBe(true);
    expect(res.user?.profile.name).toBe(REAL_STUDENT_DATA.profile.name);
    expect(res.user?.attendance.length).toBe(7);
    expect(client.getSessionInfo().isAuthenticated).toBe(true);
  });

  it('connects to Student Portal and stores sp session', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      headers: new Headers({
        'x-sp-session': 'sp_live_session_123'
      }),
      json: async () => ({ sp_session: 'sp_live_session_123' })
    } as Response);

    const res = await client.loginStudentPortal('sb7956', 'Sata2008#');
    expect(res.success).toBe(true);
    expect(client.getSessionInfo().isStudentPortalAuthenticated).toBe(true);
  });

  it('fetches timetable with Day 1 to Day 5 slots and includes all 12 periods', async () => {
    client.setSession('active_token');
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        day_order: '1',
        timetable: {
          Day1: {
            '08:00 - 08:50': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '08:50 - 09:40': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '09:45 - 10:35': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '10:40 - 11:30': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '11:35 - 12:25': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '12:30 - 01:20': { subject_name: 'Transforms and Boundary Value Problems', subject_type: 'Theory', room_code: 'TP 706' },
            '01:25 - 02:15': { subject_name: 'Transforms and Boundary Value Problems', subject_type: 'Theory', room_code: 'TP 706' },
            '02:20 - 03:10': { subject_name: 'Operating Systems', subject_type: 'Theory', room_code: 'TP 706' },
            '03:10 - 04:00': { subject_name: 'Operating Systems', subject_type: 'Theory', room_code: 'TP 706' },
            '04:00 - 04:50': { subject_name: 'Universal Human Values', subject_type: 'Theory', room_code: 'To be Alloted' },
            '04:50 - 05:30': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '05:30 - 06:10': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' }
          }
        }
      })
    } as Response);

    const tt = await client.fetchTimetable(2);
    expect(tt.batch).toBe(2);
    expect(tt.days[1]).toBeDefined();
    expect(tt.days[1].length).toBe(12);
    expect(tt.days[1][10].slotName).toBe('Slot 11');
    expect(tt.days[1][10].timeRange).toBe('04:50 - 05:30');
    expect(tt.days[1][11].slotName).toBe('Slot 12');
    expect(tt.days[1][11].timeRange).toBe('05:30 - 06:10');
  });

  it('normalizes live CampusWeb timetable payload mapping subject_name to course codes without empty strings', async () => {
    client.setSession('active_token');
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        day_order: '1',
        timetable: {
          Day1: {
            '08:00 - 08:50': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '08:50 - 09:40': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '09:45 - 10:35': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '10:40 - 11:30': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '11:35 - 12:25': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '12:30 - 01:20': { subject_name: 'Transforms and Boundary Value Problems', subject_type: 'Theory', room_code: 'TP 706' },
            '01:25 - 02:15': { subject_name: 'Transforms and Boundary Value Problems', subject_type: 'Theory', room_code: 'TP 706' },
            '02:20 - 03:10': { subject_name: 'Operating Systems', subject_type: 'Theory', room_code: 'TP 706' },
            '03:10 - 04:00': { subject_name: 'Operating Systems', subject_type: 'Theory', room_code: 'TP 706' },
            '04:00 - 04:50': { subject_name: 'Universal Human Values', subject_type: 'Theory', room_code: 'To be Alloted' },
            '04:50 - 05:30': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' },
            '05:30 - 06:10': { subject_name: 'No class', subject_type: 'N/A', room_code: 'N/A' }
          }
        }
      })
    } as Response);

    const tt = await client.fetchTimetable(2, true);
    const day1 = tt.days[1];
    expect(day1.length).toBe(12);

    // Free periods
    expect(day1[0].courseCode).toBe('-');
    expect(day1[0].courseTitle).toBe('Free Period');

    // Theory periods must map to valid codes (never empty string '')
    expect(day1[5].courseCode).toBe('21MAB201T');
    expect(day1[5].courseTitle).toBe('Transforms and Boundary Value Problems');
    expect(day1[7].courseCode).toBe('21CSC202J');
    expect(day1[7].courseTitle).toBe('Operating Systems');
    // Periods without assigned venue (e.g. 'To be Alloted') are dynamically skipped
    expect(day1[9].courseCode).toBe('-');
    expect(day1[9].courseTitle).toBe('Free Period');

    // Periods 11 & 12
    expect(day1[10].slotName).toBe('Slot 11');
    expect(day1[10].timeRange).toBe('04:50 - 05:30');
    expect(day1[11].slotName).toBe('Slot 12');
    expect(day1[11].timeRange).toBe('05:30 - 06:10');
  });

  it('includes classes once a venue is assigned', async () => {
    client.setSession('active_token');
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        day_order: '1',
        timetable: {
          Day1: {
            '04:00 - 04:50': { subject_name: 'Universal Human Values', subject_type: 'Theory', room_code: 'TP 706' }
          }
        }
      })
    } as Response);

    const tt = await client.fetchTimetable(2, true);
    expect(tt.days[1][0].courseCode).toBe('21LEM202T');
    expect(tt.days[1][0].courseTitle).toBe('UHV-II: Universal Human Values');
    expect(tt.days[1][0].room).toBe('TP 706');
  });

  it('keeps cached student data persistent even if offline or network fails', async () => {
    client.setSession('active_token');
    defaultCache.set('user_snapshot', REAL_STUDENT_DATA);

    // Call fetchUser without forcing refresh: returns cached data without error
    const user = await client.fetchUser(false);
    expect(user.profile.name).toBe(REAL_STUDENT_DATA.profile.name);
    expect(client.getSessionInfo().isAuthenticated).toBe(true);
  });

  it('rejects stale incomplete cached timetable and falls back to valid real timetable', async () => {
    client.setSession('active_token');
    // Seed with broken 10-period / empty timetable
    defaultCache.set('timetable_v4_2', {
      batch: 2,
      days: {
        1: Array.from({ length: 10 }, (_, i) => ({
          slotName: `Slot ${i + 1}`,
          timeRange: 'time',
          courseCode: '-',
          courseTitle: 'Free Period',
          faculty: '',
          room: '',
          dayOrder: 1
        }))
      }
    });

    // Network mock fails; client should reject broken 10-period cache and throw
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network error'));
    await expect(client.fetchTimetable(2, false)).rejects.toThrow('Network error');
  });

  it('clears session and removes tokens across both portals', () => {
    client.setSession('active_token', 'csrf_val', 'sb7956');
    client.setStudentPortalSession('active_sp_session');
    expect(client.getSessionInfo().isAuthenticated).toBe(true);
    expect(client.getSessionInfo().isStudentPortalAuthenticated).toBe(true);

    client.clearSession();
    expect(client.getSessionInfo().isAuthenticated).toBe(false);
    expect(client.getSessionInfo().isStudentPortalAuthenticated).toBe(false);
    expect(client.getSessionInfo().sessionToken).toBeNull();
  });
});
