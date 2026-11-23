# CampusWeb System Architecture & Reverse-Engineered Specification

> **Document Version:** 1.0.0  
> **Target Production Origin:** `https://campusweb.in`  
> **Target Backend API Origin:** `https://api.campusweb.in/api`  
> **Upstream Portals:** SRM Academia (`academia.srmist.edu.in`) & SRM Student Portal (`sp.srmist.edu.in`)  
> **Investigation Methodology:** Chrome DevTools Protocol (CDP) live tracing, Turbopack client bundle static deobfuscation, live HTTP session verification, and upstream HTML form parsing.

---

## 1. System Architecture Overview

### 1.1 High-Level Architecture & Data Flow

CampusWeb operates as a **Headless Stateless BFF (Backend-For-Frontend) Proxy** coupled with a client-side Single Page Application (SPA) built with Next.js App Router and TanStack Query.

The core design principle is **statelessness**: the proxy stores minimal to zero session state in an internal database for student credentials. Instead, upstream authentication tokens (Zoho IAM cookies for Academia, and encrypted HTTP-only session tokens for Student Portal) are either returned to the client or stored in secure HTTP-only cookies and forwarded on every subsequent request.

```mermaid
sequenceDiagram
    autonumber
    actor User as Client (Web / Mobile SDK)
    participant CW_BFF as CampusWeb Proxy API (api.campusweb.in/api)
    participant Zoho as Zoho IAM / Academia (academia.srmist.edu.in)
    participant SP as SRM Student Portal (sp.srmist.edu.in)

    Note over User,CW_BFF: Phase 1: Dual-Legged Authentication Race
    User->>CW_BFF: POST /api/auth/login (NetID, Password)
    User->>CW_BFF: POST /api/student-portal/login (NetID, Password)
    
    par Authenticate against Academia
        CW_BFF->>Zoho: GET /accounts/p/10002227248/signin
        Zoho--CW_BFF: iamcsr, zalb_* cookies
        CW_BFF->>Zoho: POST /signin/v2/lookup/{email}
        Zoho--CW_BFF: Lookup OK
        CW_BFF->>Zoho: POST /signin/v2/primary/{email}/password
        Zoho--CW_BFF: Set-Cookie: __Secure-iamsdt_client_*, _iamadt_*, _iambdt_*, _z_identity
        CW_BFF-->>User: 200 OK { Cookies: "...", sessionToken, sessionId }
    and Authenticate against Student Portal
        CW_BFF->>SP: GET /srmiststudentportal/students/loginManager/youLogin.jsp
        SP--CW_BFF: JSESSIONID, SECURE_CONFIG (captchaText, tokens)
        CW_BFF->>SP: POST /srmiststudentportal/LoginServlet
        SP--CW_BFF: Set-Cookie: JSESSIONID authenticated
        CW_BFF-->>User: 200 OK { semester_id, session_id, session_token } + Set-Cookie: sp_session
    end

    Note over User,CW_BFF: Phase 2: Client Provider Selection & Data Fetching
    User->>CW_BFF: GET /api/auth/user (X-CSRF-Token: Cookies, X-Net-ID, X-Session-Token)
    CW_BFF->>Zoho: GET /portal/10002227248/page/My_Attendance
    Zoho--CW_BFF: HTML Tables (Courses, Hours Conducted/Absent, Percent)
    CW_BFF->>Zoho: GET /portal/10002227248/page/My_Internal_Marks
    Zoho--CW_BFF: HTML Tables (Tests, Marks Scored/Max)
    CW_BFF-->>User: 200 OK Unified Student Snapshot JSON

    User->>CW_BFF: GET /api/auth/timetable/{batch} (X-CSRF-Token, X-Net-ID)
    CW_BFF->>Zoho: GET /portal/10002227248/page/My_Time_Table_2025_26
    Zoho--CW_BFF: HTML Timetable Grid (Day 1-5, Slots, Room Codes)
    CW_BFF-->>User: 200 OK Timetable JSON
```

### 1.2 Separation of Concerns

1. **Headless Data & Auth Layer (Stateless BFF Proxy):**
   - Implements upstream protocol translation: parses Zoho Creator HTML and Tomcat JSP HTML tables into standardized, strongly-typed JSON.
   - Encapsulates upstream anti-bot bypasses (decoding embedded CAPTCHAs, synthesizing DOM telemetry payloads, handling WAF tokens).
   - Manages device registry and session revocation via `/api/sessions`.
2. **Client State & Cache Layer:**
   - Multi-tier cache: In-memory TanStack Query cache $\rightarrow$ IndexedDB (`campusweb:kv`) $\rightarrow$ `localStorage` fallback.
   - Offline page-shell caching via Service Worker (`cw-warmed-v5`).
3. **UI Layer:**
   - Completely decoupled from the data pipeline; consumes clean REST endpoints and React hooks.

---

## 2. CampusWeb Client-Server Contract

### 2.1 Backend Endpoint Matrix (`https://api.campusweb.in/api`)

| Endpoint | Method | Required Headers / Cookies | Purpose |
| :--- | :--- | :--- | :--- |
| `/auth/login` | `POST` | `X-Client: web`, Device Headers | Authenticates against Zoho IAM / SRM Academia. Returns Zoho cookie bundle. |
| `/student-portal/login` | `POST` | `X-Client: web`, Device Headers | Authenticates against SRM Student Portal. Issues `sp_session` HTTP-only cookie. |
| `/auth/user` | `GET` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Fetches consolidated student profile, attendance array, and internal test performances. |
| `/auth/timetable/{batch}` | `GET` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Fetches 5-day cycle timetable for specified batch (e.g., `1` or `2`). |
| `/auth/planner` | `GET` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Fetches academic calendar, monthly day-order mappings, and holidays. |
| `/auth/planner/cached` | `GET` | `Cookie: sp_session=...` (or `withCredentials`) | Fetches day-order planner cached from Student Portal. |
| `/auth/force-refresh/user` | `POST` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Bypasses proxy cache; triggers synchronous live scrape of upstream portals. |
| `/sessions` | `GET` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Returns active registered devices/sessions for the student account. |
| `/sessions/{sessionId}` | `DELETE` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Revokes a specific device session. |
| `/sessions` | `DELETE` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Revokes all other sessions except the current one. |
| `/auth/logoutuser` | `GET` | `X-CSRF-Token`, `X-Net-ID`, `X-Session-Token` | Terminates upstream portal session and invalidates proxy token. |
| `/qr/create` | `POST` | `X-Client: web`, Device Headers | Generates mobile-to-web QR signin payload (`campusweb://qr-login?v=1&ch=...`). |
| `/qr/status` | `GET` | `channelId`, `webSecret` query params | Polls QR authentication state (`pending`, `scanned`, `approved`, `expired`). |
| `/users/allevent` | `GET` | None | Public directory of campus events and hackathons. |
| `/users/allclub` | `GET` | None | Public directory of student clubs and organizations. |

---

### 2.2 Client Device Headers

All client requests must send the following fingerprinting headers synthesized by `webDeviceHeaders()`:

```http
X-Client: web
X-Device-Platform: Windows | macOS | Linux | Android | iOS
X-Device-Name: Chrome | Firefox | Safari | Edge
X-Device-Model: Chrome 130.0.0.0
X-App-Version: 2026.10.08-sessions.3
Origin: https://campusweb.in
Referer: https://campusweb.in/
```

If these headers are absent, `api.campusweb.in` immediately rejects the request with HTTP 403:
```json
{
  "code": "unsupported_client",
  "message": "Please use the Campus Web app or campusweb.in.",
  "status": "fail"
}
```

---

### 2.3 TypeScript Interfaces for All Data Models

```typescript
/**
 * Core User Profile & Academic Snapshot
 * Response from GET /api/auth/user
 */
export interface StudentUserResponse {
  registrationNumber: string; // e.g. "RA2511033010043"
  name: string;               // e.g. "SATADRU BHATTACHARYA"
  mobile: string;             // e.g. "8017622902"
  program: string;            // e.g. "B.Tech"
  department: string;         // e.g. "Computer Science and Engineering(SE)-(AL2 Section)"
  specialization: string;
  semester: string;           // e.g. "3"
  comboBatch: string;         // e.g. "2/2"
  feedbackStatus: string;
  enrollmentStatus: string;
  doe: string;                // Date of enrollment
  photoId: string;
  classRoom: string;
  courses: CourseAttendance[];
  testPerformances: CourseTestPerformance[];
  advisors: AcademicAdvisor[];
  studentPortalLoginRequired: boolean;
  attendanceSource: "academia" | "student_portal" | "evaluator_mode";
  studentPortalPasswordRejected: boolean;
}

export interface CourseAttendance {
  courseCode: string;         // e.g. "21MAB201T"
  courseTitle: string;        // e.g. "Transforms and Boundary Value Problems"
  credit: string;             // e.g. "4"
  serialNo: string;           // e.g. "1"
  regnType: string;           // e.g. "Regular"
  category: string;           // e.g. "Basic Science"
  courseType: string;         // e.g. "Theory" | "Practical" | "Embedded"
  facultyName: string;        // e.g. "Dr. Thenmozhi S (103240)"
  slot: string;               // e.g. "A"
  gcrCode: string;
  academicYear: string;       // e.g. "AY2026-27-ODD"
  hoursConducted: string;     // e.g. "65.00"
  hoursAbsent: string;        // e.g. "15.00"
  hoursPresent: string;       // e.g. "50.00"
  attendancePercent: string;  // e.g. "76.92"
  margin: number;             // Bunk margin before falling < 75%
  required: number;           // Classes needed to reach 75%
  practicalDetails: string;
  roomNo: string;             // e.g. "TP 706"
}

export interface CourseTestPerformance {
  courseCode: string;
  courseType: string;
  courseName: string;
  totalMarks: number;         // e.g. 60
  totalMarkGot: number;       // e.g. 48.3
  tests: Record<string, TestScore>; // Key: "FT-I", "FT-II", "LLT-I", etc.
}

export interface TestScore {
  got: number;                // e.g. 10.2
  total: number;              // e.g. 15
  percentage: number;         // e.g. 68
}

export interface AcademicAdvisor {
  role: "Counselor" | "Faculty Advisor" | "Academic Advisor";
  name: string;
  email: string;
  phone: string;
}

/**
 * Timetable Model
 * Response from GET /api/auth/timetable/{batch}
 */
export interface TimetableResponse {
  day_order: string;          // e.g. "Day 1" or "No Day Order"
  timetable: Record<DayCycle, Record<TimeSlotString, TimetableSlot>>;
}

export type DayCycle = "Day1" | "Day2" | "Day3" | "Day4" | "Day5";
export type TimeSlotString = string; // e.g. "08:00 - 08:50", "12:30 - 01:20"

export interface TimetableSlot {
  subject_name: string;       // e.g. "Operating Systems" or "No class"
  subject_type: string;       // e.g. "Theory" or "N/A"
  room_code: string;          // e.g. "TP 706" or "N/A"
}

/**
 * Active Device Sessions
 * Response from GET /api/sessions
 */
export interface SessionsResponse {
  sessions: DeviceSession[];
}

export interface DeviceSession {
  sessionId: string;
  client: "web" | "app";
  platform: string;           // e.g. "Windows"
  deviceName: string;         // e.g. "Chrome"
  model: string;              // e.g. "Chrome 130.0.0.0"
  appVersion: string;         // e.g. "2026.10.08-sessions.3"
  ip: string;
  approxLocation: string;
  createdAt: number;          // Unix timestamp in seconds
  lastSeenAt: number;
  current: boolean;
  provider: "academia" | "student_portal";
}
```

---

### 2.4 Client-Side Storage & Cache Architecture

CampusWeb implements a dual storage layer:
- **Primary:** IndexedDB Database `campusweb`, Object Store `kv`.
- **Fallback:** `localStorage` prefixed with `campusweb:`.

#### 1. Session Storage (`Cookie: cw-session`)
- Stored as a URL-encoded JSON cookie named `cw-session` (`Max-Age=2592000`, `SameSite=Lax`, `Secure`):

```typescript
export interface StoredSessionCookie {
  kind: "academia" | "student-portal" | "demo" | "guest";
  token: string;              // Raw Zoho cookie string for Academia; "sp_session=http_only" for Student Portal
  netId: string;              // e.g. "sb7956"
  sessionToken?: string;      // Proxy session token
  sessionId?: string;         // Proxy session ID
  provider: "academia" | "student_portal";
}
```

#### 2. Offline Data Cache Schema
- **Key Format:** `offline:${netId}:${queryKey}`
  - Example: `offline:sb7956:profile`
  - Example: `offline:sb7956:timetable:2`
- **Value Schema:**
```typescript
export interface OfflineCacheEnvelope<T> {
  data: T;
  savedAt: number; // Date.now() timestamp in ms
}
```

---

## 3. Authentication & Session Engine (Both Portals)

### 3.1 SRM Academia Authentication Protocol (Zoho IAM v2)

SRM Academia delegates authentication to Zoho Accounts IAM. The reverse-engineered authentication pipeline requires 3 distinct HTTP handshakes:

#### Step 1: Initialize Zoho CSRF & Session Context
```http
GET https://academia.srmist.edu.in/accounts/p/10002227248/signin?hide_fp=true&orgtype=40&service_language=en&css_url=/49910842/academia-academic-services/downloadPortalCustomCss/login&dcc=true HTTP/1.1
Host: academia.srmist.edu.in
User-Agent: Mozilla/5.0 ...
Referer: https://academia.srmist.edu.in/
```
**Extraction Requirement:**
- Capture cookie `iamcsr` (e.g., `19bc77ab-2602-47b9-9fd7-77db76ef040b`).
- Capture cookies `zalb_*` and `stk`.

#### Step 2: Account Lookup
```http
POST https://academia.srmist.edu.in/signin/v2/lookup/sb7956@srmist.edu.in HTTP/1.1
Host: academia.srmist.edu.in
X-ZCSRF-TOKEN: iamcsr=19bc77ab-2602-47b9-9fd7-77db76ef040b
Content-Type: application/x-www-form-urlencoded;charset=UTF-8
Cookie: iamcsr=...; zalb_*=...; stk=...

mode=primary
```
**Behavior:**
- If NetID does not exist: returns HTTP 404 or `status: "failed"` with `academia_account_not_found`.
- If valid: returns HTTP 200 with encrypted identifier token.

#### Step 3: Password Authentication
```http
POST https://academia.srmist.edu.in/signin/v2/primary/sb7956@srmist.edu.in/password HTTP/1.1
Host: academia.srmist.edu.in
X-ZCSRF-TOKEN: iamcsr=19bc77ab-2602-47b9-9fd7-77db76ef040b
Content-Type: application/x-www-form-urlencoded;charset=UTF-8
Cookie: iamcsr=...; zalb_*=...; stk=...

password=Sata2008##&client_id=10002227248&remember=true
```
*(Note: Static bundle analysis of `/accounts/p/40-10002227248/encryption/script` confirms `encryptData.enabled: Boolean("")` is `false`. The password is transmitted directly over HTTPS).*

**Response & Cookie Extraction:**
Zoho IAM returns HTTP 200/201 and sets the following critical auth tokens in `Set-Cookie`:
- `__Secure-iamsdt_client_10002227248`
- `_iamadt_client_10002227248`
- `_iambdt_client_10002227248`
- `wms-tkp-token_client_10002227248`
- `_z_identity=true`

The proxy concatenates these into a single cookie string and returns it to the client as `Cookies` in the `/api/auth/login` payload.

---

### 3.2 SRM Student Portal Authentication Protocol (`sp.srmist.edu.in`)

SRM Student Portal runs on Apache Tomcat (`/srmiststudentportal/`) protected by an F5 BIG-IP WAF and custom client-side anti-bot scripts (`guardlogin.js` and `secure2.js`).

#### Step 1: Pre-Login Token & CAPTCHA Harvesting
```http
GET https://sp.srmist.edu.in/srmiststudentportal/students/loginManager/youLogin.jsp HTTP/1.1
Host: sp.srmist.edu.in
User-Agent: Mozilla/5.0 ...
```
**Mandatory Values to Extract from HTML:**
1. **Cookies:** `JSESSIONID` and `TS9dec798a027` (F5 WAF cookie).
2. **Security Config Object (`window.SECURE_CONFIG`):**
   ```javascript
   window.SECURE_CONFIG.expectedDomain = 'sp.srmist.edu.in';
   window.SECURE_CONFIG.b64Hosts = '...';
   window.SECURE_CONFIG.captchaText = 'vqL4ZP'; // THE PLAIN TEXT CAPTCHA
   window.SECURE_CONFIG.domainFieldName = 'dtoken_14ebd6';
   window.SECURE_CONFIG.captchaFieldName = 'cptoken_87e6f9';
   window.SECURE_CONFIG.randomDelimiter = '4884';
   ```
3. **Hidden Form Inputs:**
   - `challengeId`
   - `fpNonce`
   - `secureToken`
   - Honeypot input (e.g. `<input name="ph_4756b31d">`)—**must remain empty**.

#### Step 2: Constructing Anti-Bot Dynamic Inputs

To bypass `guardlogin.js` and `secure2.js` server-side validation, the request must include:

1. **Reversed Domain Proof:**
   $$\text{reversedHost} = \text{reverse}(\text{"sp.srmist.edu.in"}) = \text{"ni.ude.tsimrs.ps"}$$
   $$\text{domainInput} = \text{btoa}(\text{"ni.ude.tsimrs.ps"}) = \text{"bmkudWRlLnRzaW1ycy5wcw=="}$$
   Field name is dynamically taken from `window.SECURE_CONFIG.domainFieldName` (`dtoken_14ebd6`).

2. **Interaction & Timing Trap:**
   $$\text{timeElapsed} = 3$$
   $$\text{trapPayload} = \text{timeElapsed} + \text{randomDelimiter} + \text{interactCount} = \text{"3"} + \text{"4884"} + \text{"5"} = \text{"348845"}$$
   $$\text{captchaInput} = \text{btoa}(\text{"348845"})$$
   Field name is dynamically taken from `window.SECURE_CONFIG.captchaFieldName` (`cptoken_87e6f9`).

3. **Telemetry Payload (`secure2.js`):**
   A base64-encoded JSON string containing canvas hash and browser attributes attached under field name `telemetryPayload`.

#### Step 3: Login Submission
```http
POST https://sp.srmist.edu.in/srmiststudentportal/LoginServlet HTTP/1.1
Host: sp.srmist.edu.in
Content-Type: application/x-www-form-urlencoded
Cookie: JSESSIONID=...; TS9dec798a027=...

username=sb7956&password=Sata2008#&captcha=vqL4ZP&dtoken_14ebd6=bmkudWRlLnRzaW1ycy5wcw==&cptoken_87e6f9=...&challengeId=...&fpNonce=...&secureToken=...&ph_4756b31d=&telemetryPayload=...
```

---

### 3.3 Dual-Authentication Racing & Provider Resolution Algorithm

CampusWeb executes a dual-legged race upon sign-in (`module 774349`):

$$\text{Promise.race}\Big(\text{loginAcademia}(\text{creds}), \text{loginStudentPortal}(\text{creds})\Big)$$

```python
def resolve_portal_provider(academia_res, portal_res, student_sem, reg_number):
    """
    CampusWeb Dual-Auth Resolution Rules:
    1. Freshers (Semester 1, Semester 2) or RA26 registration numbers:
       -> ALWAYS bound to Student Portal ('student-portal').
    2. Upperclassmen (Semester 3+):
       -> Bound to Academia ('academia').
    """
    is_fresher = (student_sem in [1, 2]) or (reg_number.upper().startswith("RA26"))
    
    if is_fresher and portal_res.ok:
        return {
            "kind": "student-portal",
            "provider": "student_portal",
            "session_token": portal_res.session_token,
            "session_id": portal_res.session_id
        }
    
    if academia_res.ok:
        return {
            "kind": "academia",
            "provider": "academia",
            "token": academia_res.cookies,
            "session_token": academia_res.session_token,
            "session_id": academia_res.session_id
        }
        
    raise AuthError("Both upstream authentications failed")
```

---

## 4. Scraping & Data Extraction Specs

### 4.1 SRM Academia DOM Scraping (Zoho Creator)

Upstream authenticated requests are dispatched using the Zoho cookie string:

```http
GET https://academia.srmist.edu.in/portal/10002227248/page/My_Attendance HTTP/1.1
Host: academia.srmist.edu.in
Cookie: wms-tkp-token_client_10002227248=...; __Secure-iamsdt_client_10002227248=...; _iamadt_client_10002227248=...; _iambdt_client_10002227248=...; _z_identity=true
```

#### DOM Extraction Selectors:

1. **Student Metadata Selector:**
   - Table: `table[align="center"] td`
   - Fields extracted:
     - `Registration Number`: Regex `RA[0-9]{13}`
     - `Student Name`: Clean text following `"Name:"`
     - `Semester`: Regex `Semester\s*:\s*([0-9]+)`
     - `Batch`: Regex `Batch\s*:\s*([0-9/]+)`

2. **Attendance Table:**
   - Container: `table.table-striped`, `table[border="1"]`
   - Headers: `Course Code`, `Course Title`, `Course Type`, `Faculty Name`, `Slot`, `Hours Conducted`, `Hours Absent`, `Attendance %`
   - Selectors:
     ```css
     tbody tr:not(:first-child) td:nth-child(2) /* Course Code */
     tbody tr:not(:first-child) td:nth-child(3) /* Course Title */
     tbody tr:not(:first-child) td:nth-child(4) /* Category */
     tbody tr:not(:first-child) td:nth-child(6) /* Faculty Name */
     tbody tr:not(:first-child) td:nth-child(7) /* Slot */
     tbody tr:not(:first-child) td:nth-child(8) /* Hours Conducted */
     tbody tr:not(:first-child) td:nth-child(9) /* Hours Absent */
     tbody tr:not(:first-child) td:nth-child(10) /* Attendance % */
     ```

3. **Attendance Mathematical Margin Formulas:**
   $$\text{hoursPresent} = \text{hoursConducted} - \text{hoursAbsent}$$
   $$\text{percent} = \frac{\text{hoursPresent}}{\text{hoursConducted}} \times 100$$
   
   - If $\text{percent} \ge 75\%$:
     $$\text{margin} = \left\lfloor \frac{\text{hoursPresent} - (0.75 \times \text{hoursConducted})}{0.75} \right\rfloor$$
     $$\text{required} = 0$$
   - If $\text{percent} < 75\%$:
     $$\text{margin} = 0$$
     $$\text{required} = \left\lceil \frac{(0.75 \times \text{hoursConducted}) - \text{hoursPresent}}{0.25} \right\rceil$$

4. **Internal Marks Table:**
   - Container: `table#reportTab`, `table.zc-table`
   - Structure: Row-level course codes with nested sub-tables for individual test names (`FT-I`, `FT-II`, `FT-III`, `FT-IV`, `LLT-I`, `CLA-1`, etc.).
   - Selectors:
     ```css
     tr.zc-row td.course-code
     tr.zc-row td.test-name
     tr.zc-row td.marks-obtained
     tr.zc-row td.max-marks
     ```

5. **Timetable Grid:**
   - URL: `https://academia.srmist.edu.in/portal/10002227248/page/My_Time_Table_2025_26`
   - Structure: A $5 \times 12$ matrix where rows correspond to `Day 1` through `Day 5` and columns correspond to standardized 50-minute periods (`08:00 - 08:50`, `08:50 - 09:40`, ..., `04:00 - 04:50`).
   - Each cell contains: `Subject Name`, `Room Code` (e.g. `TP 706`), `Course Type` (`Theory` or `Practical`).

---

### 4.2 SRM Student Portal Scraping (Apache Tomcat JSP)

Authenticated session requests pass the `JSESSIONID` cookie:

```http
GET https://sp.srmist.edu.in/srmiststudentportal/students/report/studentAttendanceReport.jsp HTTP/1.1
Host: sp.srmist.edu.in
Cookie: JSESSIONID=7E7C1B3757ECD12D00A032C1478CE51A.worker1; TS9dec798a027=...
```

#### DOM Extraction Selectors:
- Results / Marks Table: `table#studentMarksTable tbody tr`
- Attendance Table: `table#attendanceDetails tbody tr`
- Selector mapping:
  ```css
  tr td:nth-child(1) /* S.No */
  tr td:nth-child(2) /* Course Code */
  tr td:nth-child(3) /* Course Description */
  tr td:nth-child(4) /* Maximum Marks */
  tr td:nth-child(5) /* Scored Marks */
  ```

---

## 5. Implementation & Testability Checklist

### 5.1 Recommended Architecture for Re-Implementation

```text
srm-academia/
├── src/
│   ├── core/
│   │   ├── auth/
│   │   │   ├── academia-auth.service.ts      # Zoho IAM v2 lookup & password engine
│   │   │   ├── student-portal-auth.service.ts # SP anti-bot bypass & session extractor
│   │   │   └── session-resolver.ts           # Dual-auth racing & fresher routing
│   │   ├── parsers/
│   │   │   ├── academia-attendance.parser.ts # Zoho Creator table parser + margin math
│   │   │   ├── academia-marks.parser.ts      # Internal test performances extractor
│   │   │   ├── academia-timetable.parser.ts  # Day order 5x12 timetable grid parser
│   │   │   └── student-portal.parser.ts      # SP JSP table parsers
│   │   ├── client/
│   │   │   ├── campus-api.client.ts          # Axios wrapper with webDeviceHeaders
│   │   │   └── session-store.ts              # IndexedDB / Cookie session storage
│   ├── server/                               # Stateless BFF Proxy (Fastify / Hono)
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── student.routes.ts
│   │   │   └── timetable.routes.ts
│   │   └── index.ts
│   └── tests/
│       ├── fixtures/
│       │   ├── academia_attendance.html
│       │   ├── academia_marks.html
│       │   ├── academia_timetable.html
│       │   └── sp_login.html
│       ├── parsers.test.ts
│       └── auth-flow.test.ts
```

---

### 5.2 Verification Fixtures & Expected Outputs (TDD Ready)

#### Fixture 1: Attendance Table HTML Snippet (`tests/fixtures/academia_attendance.html`)
```html
<table border="1" class="zc-table">
  <thead>
    <tr>
      <th>S.No</th><th>Course Code</th><th>Course Title</th><th>Type</th>
      <th>Faculty</th><th>Slot</th><th>Conducted</th><th>Absent</th><th>%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>21MAB201T</td>
      <td>Transforms and Boundary Value Problems</td>
      <td>Theory</td>
      <td>Dr. Thenmozhi S (103240)</td>
      <td>A</td>
      <td>65.00</td>
      <td>15.00</td>
      <td>76.92</td>
    </tr>
  </tbody>
</table>
```

#### Expected Parser Output:
```json
{
  "courseCode": "21MAB201T",
  "courseTitle": "Transforms and Boundary Value Problems",
  "courseType": "Theory",
  "facultyName": "Dr. Thenmozhi S (103240)",
  "slot": "A",
  "hoursConducted": "65.00",
  "hoursAbsent": "15.00",
  "hoursPresent": "50.00",
  "attendancePercent": "76.92",
  "margin": 1,
  "required": 0
}
```

#### Fixture 2: Margin Calculation Unit Tests (`tests/margin_math.test.ts`)
```typescript
import { describe, it, expect } from "vitest";
import { calculateAttendanceMargin } from "../src/core/parsers/academia-attendance.parser";

describe("Attendance Margin Mathematical Integrity", () => {
  it("calculates correct margin when attendance >= 75%", () => {
    // 65 conducted, 50 present -> 76.92%
    const res = calculateAttendanceMargin(65, 50);
    expect(res.margin).toBe(1);
    expect(res.required).toBe(0);
    expect(res.attendancePercent).toBe("76.92");
  });

  it("calculates correct required hours when attendance < 75%", () => {
    // 60 conducted, 40 present -> 66.67%
    // Needed: (0.75 * 60 - 40) / 0.25 = (45 - 40) / 0.25 = 20 classes
    const res = calculateAttendanceMargin(60, 40);
    expect(res.margin).toBe(0);
    expect(res.required).toBe(20);
    expect(res.attendancePercent).toBe("66.67");
  });
});
```

---

### 5.3 Verification Sign-Off Checklist

- [x] **Live Network Grounding:** Verified `/api/auth/login`, `/api/student-portal/login`, `/api/auth/user`, `/api/auth/timetable/2`, `/api/auth/planner`, `/api/sessions`.
- [x] **Turbopack Deobfuscation:** Recovered exact module sources for `webDeviceHeaders`, `apiClient`, `queryKeys`, `readCache`/`writeCache`, and `STUDENT_ROUTES`.
- [x] **Upstream Grounding:** Unpacked `sp.srmist.edu.in` anti-bot scripts (`guardlogin.js`, `secure2.js`) and verified Zoho IAM v2 endpoint structure.
- [x] **Stateless Session Verified:** Confirmed `X-CSRF-Token` carrying Zoho cookies + `X-Session-Token` handles complete authorization without local database lookups.
- [x] **Data Schemas Locked:** Validated real response data against the user's student account (`SATADRU BHATTACHARYA`, `RA2511033010043`).
