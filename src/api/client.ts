import { 
  AuthLoginResponse, 
  SPLoginResponse,
  StudentUserResponse, 
  TimetableResponse, 
  AttendanceItem, 
  CourseMarks,
  hasAssignedVenue
} from './types';
import { defaultCache } from './cache';

export interface CampusWebClientConfig {
  baseUrl?: string;
}

const DEFAULT_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json',
  'Accept': 'application/json, text/plain, */*',
  'X-Client': 'web',
  'X-Device-Platform': 'Windows',
  'X-Device-Name': 'Chrome',
  'X-Device-Model': 'Chrome 130.0.0.0',
  'X-App-Version': '2026.10.08-sessions.3'
};

const KNOWN_SRM_COURSES: Record<string, { code: string; title: string }> = {
  'transforms and boundary value problems': { code: '21MAB201T', title: 'Transforms and Boundary Value Problems' },
  'data structures and algorithms': { code: '21CSC201J', title: 'Data Structures and Algorithms' },
  'operating systems': { code: '21CSC202J', title: 'Operating Systems' },
  'computer organization and architecture': { code: '21CSS201T', title: 'Computer Organization and Architecture' },
  'advanced programming practice': { code: '21CSC203P', title: 'Advanced Programming Practice' },
  'professional ethics': { code: '21LEM201T', title: 'Professional Ethics' },
  'uhv-ii: universal human values – understanding harmony and ethical human conduct': { code: '21LEM202T', title: 'UHV-II: Universal Human Values' },
  'uhv-ii: universal human values': { code: '21LEM202T', title: 'UHV-II: Universal Human Values' },
  'universal human values': { code: '21LEM202T', title: 'UHV-II: Universal Human Values' },
};

export class CampusWebClient {
  private baseUrl: string;
  private sessionToken: string | null = null;
  private csrfToken: string | null = null;
  private netId: string | null = null;
  private spSessionId: string | null = null;

  constructor(config?: CampusWebClientConfig) {
    this.baseUrl = config?.baseUrl ?? '/api';

    // Restore saved tokens across both portals
    if (typeof window !== 'undefined') {
      try {
        this.sessionToken = window.localStorage.getItem('srm_session_token');
        this.csrfToken = window.localStorage.getItem('srm_csrf_token');
        this.netId = window.localStorage.getItem('srm_net_id');
        this.spSessionId = window.localStorage.getItem('srm_sp_session');
      } catch {
        // Fallback for sandboxed environments
      }
    }
  }

  public setSession(sessionToken: string, csrfToken?: string, netId?: string): void {
    this.sessionToken = sessionToken;
    this.csrfToken = csrfToken || null;
    this.netId = netId || null;

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('srm_session_token', sessionToken);
        if (csrfToken) window.localStorage.setItem('srm_csrf_token', csrfToken);
        if (netId) window.localStorage.setItem('srm_net_id', netId);
      } catch {
        // Ignore storage errors
      }
    }
  }

  public setStudentPortalSession(spSessionId: string): void {
    this.spSessionId = spSessionId;
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('srm_sp_session', spSessionId);
      } catch {
        // Ignore storage errors
      }
    }
  }

  public clearSession(): void {
    this.sessionToken = null;
    this.csrfToken = null;
    this.netId = null;
    this.spSessionId = null;

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem('srm_session_token');
        window.localStorage.removeItem('srm_csrf_token');
        window.localStorage.removeItem('srm_net_id');
        window.localStorage.removeItem('srm_sp_session');
      } catch {
        // Ignore
      }
    }
    defaultCache.clear();
  }

  public getSessionInfo() {
    return {
      sessionToken: this.sessionToken,
      csrfToken: this.csrfToken,
      netId: this.netId,
      spSessionId: this.spSessionId,
      isAuthenticated: Boolean(this.sessionToken),
      isStudentPortalAuthenticated: Boolean(this.spSessionId)
    };
  }

  private getAuthHeaders(): Record<string, string> {
    const headers: Record<string, string> = { ...DEFAULT_HEADERS };
    if (this.sessionToken) {
      headers['X-Session-Token'] = this.sessionToken;
    }
    if (this.csrfToken) {
      headers['X-CSRF-Token'] = this.csrfToken;
    }
    if (this.netId) {
      headers['X-Net-ID'] = this.netId;
    }
    if (this.spSessionId) {
      headers['Cookie'] = `sp_session=${this.spSessionId}`;
    }
    return headers;
  }

  /**
   * Login to SRM Academia
   */
  async login(identifier: string, password: string): Promise<AuthLoginResponse> {
    try {
      const netId = identifier.split('@')[0].trim().toLowerCase();
      this.netId = netId;
      const username = identifier.includes('@')
        ? identifier.trim().toLowerCase()
        : `${netId}@srmist.edu.in`;

      const resp = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify({
          username,
          password
        })
      });

      if (!resp.ok) {
        const errorJson = (await resp.json().catch(() => ({}))) as Record<string, unknown>;
        const rawMsg = `${errorJson.message || ''} ${errorJson.Message || ''} ${(errorJson.passResponse as { message?: string } | undefined)?.message || ''}`;
        let mappedMsg = 'Authentication failed. Please verify your credentials.';
        if (errorJson.captcha_required) {
          mappedMsg = 'CAPTCHA challenge required by Academia. Please try again.';
        } else if (/old password/i.test(rawMsg) || (errorJson.passResponse as { code?: string } | undefined)?.code === 'P201') {
          mappedMsg = 'Old password entered. Please enter your current Academia password.';
        } else if (errorJson.code === 'academia_account_not_found' || /not recognise|not found/i.test(rawMsg)) {
          mappedMsg = 'Academia account not found. Please verify your NetID.';
        } else if (errorJson.code === 'academia_credentials_rejected' || /incorrect|invalid (?:password|credentials)|did not accept|wrong password/i.test(rawMsg)) {
          mappedMsg = 'Incorrect password. Please verify your Academia password.';
        } else if (errorJson.code === 'ACADEMIA_UNAVAILABLE' || /unavailable/i.test(rawMsg)) {
          mappedMsg = 'SRM Academia portal is temporarily unreachable. Please try again shortly.';
        } else if (errorJson.message) {
          mappedMsg = String(errorJson.message);
        }
        throw new Error(mappedMsg);
      }

      const raw = await resp.json();
      const sessionToken = raw.sessionToken || resp.headers.get('x-session-token') || 'active_session';
      const csrfToken = raw.Cookies || raw.cookies || resp.headers.get('x-csrf-token') || '';

      this.setSession(sessionToken, csrfToken, netId);

      // Fetch full live student profile snapshot with active session
      let user: StudentUserResponse;
      try {
        if (raw.courses || raw.registrationNumber || raw.profile) {
          user = this.normalizeUserResponse(raw);
          defaultCache.set('user_snapshot', user);
        } else {
          user = await this.fetchUser(true);
        }
      } catch {
        user = this.normalizeUserResponse(raw);
        defaultCache.set('user_snapshot', user);
      }

      return {
        success: true,
        user,
        sessionToken,
        csrfToken
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        message
      };
    }
  }

  /**
   * Login to SRM Student Portal
   */
  async loginStudentPortal(identifier: string, password: string): Promise<SPLoginResponse> {
    try {
      const netId = identifier.split('@')[0].trim().toLowerCase();
      const resp = await fetch(`${this.baseUrl}/student-portal/login`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ net_id: netId, password })
      });

      if (!resp.ok) {
        const errorJson = await resp.json().catch(() => ({}));
        throw new Error(errorJson.message || `Student Portal login failed: HTTP ${resp.status}`);
      }

      const raw = await resp.json();
      const spSessionId = raw.session_token || raw.session_id || raw.sp_session || resp.headers.get('x-sp-session') || 'active_sp_session';
      this.setStudentPortalSession(spSessionId);

      return { success: true, spSessionId };
    } catch (err: unknown) {
      return { success: false, message: err instanceof Error ? err.message : String(err) };
    }
  }

  /**
   * Fetch authenticated student snapshot (Attendance, Profile, Marks)
   * Persistent stale-while-revalidate caching
   */
  async fetchUser(forceRefresh = false): Promise<StudentUserResponse> {
    const cached = defaultCache.get<StudentUserResponse>('user_snapshot');

    // If cached data is present and we're not forcing refresh, return immediately
    if (!forceRefresh && cached.data) {
      return cached.data;
    }

    try {
      const resp = await fetch(`${this.baseUrl}/auth/user`, {
        method: 'GET',
        headers: this.getAuthHeaders()
      });

      // ONLY clear session if server explicitly rejected with 401
      if (resp.status === 401) {
        this.clearSession();
        throw new Error('UNAUTHORIZED');
      }

      if (!resp.ok) {
        throw new Error(`Failed to fetch student data: HTTP ${resp.status}`);
      }

      const raw = await resp.json();
      const normalized = this.normalizeUserResponse(raw);
      defaultCache.set('user_snapshot', normalized);
      return normalized;
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'UNAUTHORIZED') {
        throw err;
      }
      // If network fails or offline: keep user logged in with cached real student data
      if (cached.data) {
        return cached.data;
      }
      throw err;
    }
  }

  /**
   * Fetch weekly timetable for Batch (1 or 2)
   */
  async fetchTimetable(batch = 2, forceRefresh = false): Promise<TimetableResponse> {
    const cacheKey = `timetable_v4_${batch}`;
    const cached = defaultCache.get<TimetableResponse>(cacheKey);

    const isCompleteTimetable = (tt: TimetableResponse | null | undefined): boolean => {
      if (!tt || !tt.days || !tt.days[1] || tt.days[1].length !== 12) return false;
      return Object.values(tt.days).some((daySlots) =>
        daySlots.some((s) => s.courseCode && s.courseCode !== '-' && s.courseTitle !== 'Free Period')
      );
    };

    if (!forceRefresh && isCompleteTimetable(cached.data)) {
      return cached.data!;
    }

    try {
      const resp = await fetch(`${this.baseUrl}/auth/timetable/${batch}`, {
        method: 'GET',
        headers: this.getAuthHeaders()
      });

      if (resp.status === 401) {
        this.clearSession();
        throw new Error('UNAUTHORIZED');
      }

      if (!resp.ok) {
        throw new Error(`Failed to fetch timetable: HTTP ${resp.status}`);
      }

      const raw = await resp.json();
      const parsed = this.normalizeTimetableResponse(raw, batch);
      defaultCache.set(cacheKey, parsed);
      return parsed;
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'UNAUTHORIZED') {
        throw err;
      }
      if (isCompleteTimetable(cached.data)) {
        return cached.data!;
      }
      throw err;
    }
  }

  /**
   * Normalize raw student response into clean models
   */
  private normalizeUserResponse(raw: Record<string, unknown>): StudentUserResponse {
    const rawCourses = (raw.courses || []) as Record<string, unknown>[];
    const seenCodes = new Set<string>();
    const attendance: AttendanceItem[] = [];

    for (const c of rawCourses) {
      const courseCode = String(c.courseCode || '');
      const hoursConducted = parseFloat(String(c.hoursConducted || '0')) || 0;

      // Filter out duplicate zero-hour practical placeholder if course is already registered
      if (seenCodes.has(courseCode) && hoursConducted === 0) {
        continue;
      }
      seenCodes.add(courseCode);

      const parsedCredit = typeof c.credit !== 'undefined' && c.credit !== null
        ? parseFloat(String(c.credit))
        : undefined;

      attendance.push({
        courseCode,
        courseTitle: String(c.courseTitle || ''),
        courseCategory: String(c.category || 'Core Subject'),
        facultyName: String(c.facultyName || ''),
        slot: String(c.slot || ''),
        roomNo: String(c.roomNo || ''),
        hoursConducted,
        hoursPresent: parseFloat(String(c.hoursPresent || '0')) || 0,
        hoursAbsent: parseFloat(String(c.hoursAbsent || '0')) || 0,
        attendancePercent: parseFloat(String(c.attendancePercent || '0')) || 0,
        credit: Number.isFinite(parsedCredit) ? parsedCredit : undefined
      });
    }

    // Build credit lookup map from course data
    const creditsByCode: Record<string, number> = {};
    for (const item of attendance) {
      if (typeof item.credit === 'number') {
        creditsByCode[item.courseCode] = item.credit;
      }
    }

    // Normalize raw marks from testPerformances or marks
    const rawMarksList = ((raw.testPerformances || raw.marks || []) as Record<string, unknown>[]);
    const marks: CourseMarks[] = rawMarksList.map((m) => {
      const testsMap = (m.tests || {}) as Record<string, { got: number; total: number; percentage: number }>;
      const components = Object.entries(testsMap).map(([name, data]) => ({
        testName: name,
        score: data.got || 0,
        maxScore: data.total || 0,
        weightage: data.percentage || 0
      }));

      const code = String(m.courseCode || '');
      const rawCredit = typeof m.credit !== 'undefined' && m.credit !== null
        ? parseFloat(String(m.credit))
        : creditsByCode[code];

      return {
        courseCode: code,
        courseTitle: String(m.courseName || m.courseTitle || ''),
        marks: components,
        totalScore: typeof m.totalMarkGot === 'number' ? m.totalMarkGot : undefined,
        maxTotalScore: typeof m.totalMarks === 'number' ? m.totalMarks : undefined,
        credit: Number.isFinite(rawCredit) ? rawCredit : undefined
      };
    });

    const rawRecord = (raw || {}) as Record<string, unknown>;
    const advisors = (rawRecord.advisors || []) as Array<{ role: string; name: string; email: string; phone: string }>;
    const facultyAdvisor = advisors.find((a) => a.role === 'Faculty Advisor') || advisors[0];

    // NetID is ALWAYS 2-4 letters followed by digits (e.g. ab1234). Registration number (RA...) is NOT NetID.
    const rawNetId = typeof rawRecord.netId === 'string' ? rawRecord.netId : typeof rawRecord.net_id === 'string' ? rawRecord.net_id : null;
    const rawEmail = typeof rawRecord.email === 'string' ? rawRecord.email : null;
    const candidateNetId = this.netId || rawNetId || (rawEmail ? rawEmail.split('@')[0] : null);
    const resolvedNetId = (candidateNetId && !/^ra\d{6,}/i.test(candidateNetId))
      ? candidateNetId.split('@')[0].trim().toLowerCase()
      : (this.netId || rawNetId || '');

    const profile = (rawRecord.profile || {}) as Record<string, unknown>;

    return {
      profile: {
        name: String(raw.name || profile.name || 'Student'),
        regNo: String(raw.registrationNumber || profile.regNo || ''),
        department: String(raw.department || profile.department || ''),
        program: String(raw.program || profile.program || ''),
        semester: String(raw.semester || profile.semester || '1'),
        comboBatch: String(raw.comboBatch || profile.comboBatch || ''),
        batch: (raw.batch as number) || (profile.batch as number) || (String(raw.comboBatch || profile.comboBatch || '').endsWith('2') ? 2 : 1),
        mobile: String(raw.mobile || profile.mobile || ''),
        email: profile.email ? String(profile.email) : (resolvedNetId ? `${resolvedNetId}@srmist.edu.in` : ''),
        facultyAdvisor: (profile.facultyAdvisor as { name: string; email: string; mobile?: string } | undefined) || (facultyAdvisor ? {
          name: facultyAdvisor.name,
          email: facultyAdvisor.email,
          mobile: facultyAdvisor.phone
        } : undefined)
      },
      attendance: attendance.length > 0 ? attendance : ((rawRecord.attendance as AttendanceItem[]) || []),
      marks: marks.length > 0 ? marks : ((rawRecord.marks as CourseMarks[]) || [])
    };
  }

  /**
   * Normalize timetable payload
   */
  private normalizeTimetableResponse(raw: Record<string, unknown>, batch: number): TimetableResponse {
    const rawTt = (raw.timetable || {}) as Record<string, Record<string, { subject_name?: string; subject_type?: string; room_code?: string }>>;
    const days: Record<number, TimetableResponse['days'][number]> = {};

    // Get cached user snapshot to cross-reference course codes and faculty
    const cachedUser = defaultCache.get<StudentUserResponse>('user_snapshot')?.data;
    const enrolledCourses = cachedUser?.attendance || [];

    for (let dayNum = 1; dayNum <= 5; dayNum++) {
      const dayKey = `Day${dayNum}`;
      const slotsObj = rawTt[dayKey] || {};
      const slots = Object.entries(slotsObj)
        .slice(0, 12) // Support all 12 periods (up to 06:10 PM)
        .map(([timeRange, info], idx) => {
          const rawName = (info.subject_name || '').trim();
          const rawRoom = (info.room_code && info.room_code !== 'N/A') ? info.room_code.trim() : '';
          const hasVenue = hasAssignedVenue(rawRoom);
          const isFree = !rawName || rawName === 'No class' || rawName === 'Free Period' || rawName === 'N/A' || !hasVenue;

          if (isFree) {
            return {
              slotName: `Slot ${idx + 1}`,
              timeRange,
              courseCode: '-',
              courseTitle: 'Free Period',
              faculty: '',
              room: '',
              dayOrder: dayNum
            };
          }

          // 1. Check known SRM course mapping
          const lowerName = rawName.toLowerCase();
          let matchedCode = '';
          let matchedTitle = rawName;
          let matchedFaculty = '';

          for (const [key, mapping] of Object.entries(KNOWN_SRM_COURSES)) {
            if (lowerName.includes(key) || key.includes(lowerName)) {
              matchedCode = mapping.code;
              matchedTitle = mapping.title;
              break;
            }
          }

          // 2. Check enrolled courses from student profile
          if (!matchedCode && enrolledCourses.length > 0) {
            const cleanSub = lowerName.replace(/[^a-z0-9]/g, '');
            const match = enrolledCourses.find((c) => {
              const cleanC = c.courseTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
              return cleanC.includes(cleanSub) || cleanSub.includes(cleanC);
            });
            if (match) {
              matchedCode = match.courseCode;
              matchedTitle = match.courseTitle;
              matchedFaculty = match.facultyName;
            }
          }

          // 3. Fallback: derive code from initials if still not found, never leave empty
          if (!matchedCode) {
            const words = rawName.split(/[\s–-]+/).filter(Boolean);
            matchedCode = words.map((w) => w[0]?.toUpperCase()).join('').slice(0, 8) || 'COURSE';
          }

          // If faculty not yet found, check enrolled courses by matchedCode
          if (!matchedFaculty && matchedCode) {
            const match = enrolledCourses.find((c) => c.courseCode === matchedCode);
            if (match) {
              matchedFaculty = match.facultyName;
            }
          }

          const room = (info.room_code && info.room_code !== 'N/A') ? info.room_code : '';

          return {
            slotName: `Slot ${idx + 1}`,
            timeRange,
            courseCode: matchedCode,
            courseTitle: matchedTitle,
            faculty: matchedFaculty,
            room,
            dayOrder: dayNum
          };
        });
      days[dayNum] = slots;
    }

    return {
      batch,
      days
    };
  }
}

export const apiClient = new CampusWebClient();
