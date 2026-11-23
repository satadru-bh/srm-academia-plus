# Design Document: Live SRM PYQ API Integration & Maximum Material Coverage

- **Date:** 2026-11-24
- **Status:** Proposed (Awaiting Approval)
- **Target:** Academia Plus Web / PWA

## 1. Intent & Context

Academia Plus currently provides students with unit notes and static question papers across 98 subjects via `src/data/notesCatalogue.json`. 

The new **SRM PYQ API** (`https://srm-pyq-api.onrender.com`) exposes a dedicated, read-only catalog of official university question papers scraped from SRM DSpace and hosted on high-speed Cloudflare R2 storage.

By adopting **Option A (Hybrid Architecture)**, we achieve **maximum coverage of all academic material**:
1. Retaining all unit-by-unit lecture notes, slide decks, and syllabi from our curated local catalogue.
2. Expanding past exam paper coverage dynamically using the live SRM PYQ API with real-time course search, semester/term filtering, and direct R2 PDF delivery.

---

## 2. Goals & Anti-Goals

### Goals
- **Maximum Coverage:** Students get both verified lecture notes (Units 1–5) and extensive past papers (spanning multiple years, supplementary/regular sessions, and specific exam labels).
- **CORS-Resilient Proxying:** Route requests through `/api/pyq/...` via Vite dev proxy and Vercel serverless function to bypass Render API CORS restrictions.
- **Graceful Fallbacks & Offline Resilience:** If the external API is cold-starting, rate-limited, or offline, the UI falls back seamlessly to catalogued papers with subtle loading states.
- **Direct PDF Viewing:** Support Cloudflare R2 direct PDF streaming in `PdfViewerModal.tsx` while keeping Google Drive iframe preview for existing notes.
- **Smart Enrolled Matching:** Automatically query live papers for the student's enrolled courses using course codes (`21CSC201J`, `21MAB201T`, etc.).

### Anti-Goals
- **No breaking changes to CampusWeb proxy:** CampusWeb routes (`/api/v1/auth/...`, `/api/v1/student/...`) remain untouched.
- **No blocking UI:** Network requests must not freeze the UI; use optimistic rendering with cached/local resources first while fetching live papers in the background.

---

## 3. Approaches Considered

| Approach | Description | Pros & Cons | Decision |
|---|---|---|---|
| **Approach 1: Direct Browser Fetch** | Frontend calls `https://srm-pyq-api.onrender.com` directly. | Pro: Simple. Con: **Fails immediately** because API enforces CORS (`Disallowed CORS origin`). | Rejected |
| **Approach 2: Pure PYQ Replacement** | Drop unit lecture notes and only display live PYQs. | Pro: Uniform data model. Con: Students lose lecture slides and syllabi (reduces coverage). | Rejected by user |
| **Approach 3: Hybrid Architecture with Local & Production Proxy (Recommended)** | Proxy `/api/pyq` to `https://srm-pyq-api.onrender.com`, integrate `pyqClient.ts`, fetch live papers into `NotesBentoView`, retain lecture notes & syllabus. | Pro: Maximum material coverage, fast R2 streaming, CORS-compliant, resilient offline/cold-start fallback. Con: Manages two resource types. | **Accepted (Option A)** |

---

## 4. Architectural Design

```
+-------------------------------------------------------------------------+
|                              Academia Plus                              |
|                                                                         |
|   +-----------------------+           +-----------------------------+   |
|   |   Lecture Notes /     |           |       Live PYQ Client       |   |
|   |   Syllabus            |           |       (pyqClient.ts)        |   |
|   | (notesCatalogue.json) |           +--------------+--------------+   |
|   +-----------+-----------+                          |                  |
|               |                                      v                  |
|               |                         +---------------------------+   |
|               |                         |     Proxy Layer           |   |
|               |                         |  - Dev: vite.config.ts    |   |
|               |                         |  - Prod: api/pyq-proxy.js |   |
|               |                         +------------+--------------+   |
|               |                                      |                  |
|               v                                      v                  |
|     +-------------------------------------------------------------+     |
|     |                      NotesBentoView                         |     |
|     |  - Enrolled courses with instant unit notes & live PYQs     |     |
|     |  - Subject explorer with filter chips                       |     |
|     +------------------------------+------------------------------+     |
|                                    |                                    |
|                                    v                                    |
|                     +------------------------------+                    |
|                     |       PdfViewerModal         |                    |
|                     |  - R2 direct PDF / iframe    |                    |
|                     |  - Google Drive preview      |                    |
|                     +------------------------------+                    |
+-------------------------------------------------------------------------+
                                     |
                                     v
                 External: https://srm-pyq-api.onrender.com
                           + Cloudflare R2 Bucket
```

### 4.1 Proxy Layer Configuration
1. **Development (`vite.config.ts`)**:
   Add proxy rule for `/api/pyq` targeting `https://srm-pyq-api.onrender.com`:
   ```ts
   '/api/pyq': {
     target: 'https://srm-pyq-api.onrender.com',
     changeOrigin: true,
     rewrite: (path) => path.replace(/^\/api\/pyq/, '')
   }
   ```
2. **Production (`api/pyq/[...path].ts` / `api/pyq-proxy.js`)**:
   Add lightweight Vercel serverless forwarder that strips `/api/pyq` prefix and streams response from `https://srm-pyq-api.onrender.com`.

### 4.2 API Client (`src/api/pyqClient.ts`)
- TypeScript interfaces matching contract:
  - `PyqCourse`, `PyqPaper`, `PyqFile`, `PyqDownloadResponse`, `PaginatedResult<T>`
- Methods:
  - `searchCourses(query: string, limit?: number)`
  - `getCourseByCode(courseCode: string)`
  - `getPapersForCourse(courseCode: string, options?: { year?: number; term?: string; cursor?: string; limit?: number })`
  - `getPaperFiles(paperId: string)`
  - `getDownloadUrl(fileId: string, ttlSeconds?: number)`
- Built-in LRU/memory cache (5-minute TTL) to avoid redundant network round-trips for the same course code.

### 4.3 Data Layer Fusion (`src/api/notes.ts`)
- Extend `SubjectCatalogue` and `NoteResource` to support dynamic/live papers alongside static notes.
- Add `getLivePapersForCourse(courseCode: string)` that calls `pyqClient.getPapersForCourse()`, transforms them to `NoteResource[]`, and caches the result.
- Helper `normalizePaperName(paper: PyqPaper)`: turns `exam_year`, `session_label` / `exam_month`, and `term` into human-readable titles (e.g., `"May/June 2025 – Regular"`).

### 4.4 UI & PDF Viewer (`PdfViewerModal.tsx` & `NotesBentoView.tsx`)
- In `PdfViewerModal.tsx`:
  - Detect whether URL is an R2 PDF or Google Drive URL.
  - If R2 PDF: render direct `<iframe src={url} className="w-full h-full border-none" />` with native browser PDF viewer controls, and an "Open PDF" / "Download" action button.
- In `NotesBentoView.tsx`:
  - When inspecting an enrolled course or catalogue subject, trigger a background fetch for live papers via course code.
  - Show a subtle loading indicator while live papers are being fetched, without blocking the display of existing notes.
  - Display paper badges with metadata tags: year, session, and source link.

---

## 5. Verification Plan

1. **Unit Tests**:
   - `src/api/__tests__/pyqClient.test.ts`: test course search, paper fetching, file resolution, error handling, and parameter encoding.
   - `src/api/__tests__/notes.test.ts`: test hybrid merge and paper title normalization.
   - `src/components/modals/__tests__/PdfViewerModal.test.ts`: test R2 vs. Google Drive URL detection and rendering.
2. **Build Verification**:
   - `npx vitest run`: full automated test suite passes.
   - `npx tsc --noEmit`: zero TypeScript errors.
   - `npm run build`: production bundle builds cleanly.
3. **Manual Verification**:
   - Verify searching for courses (e.g. `21CSC201J`, `21MAB201T`).
   - Verify opening an R2 PDF in `PdfViewerModal`.
   - Verify lecture notes (Units 1-5) continue to open seamlessly.
