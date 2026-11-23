# Live SRM PYQ API Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the live SRM PYQ API into Academia Plus alongside existing lecture notes to provide maximum academic material coverage (Units 1-5 lecture slides, syllabi, and live past exam papers hosted on Cloudflare R2).

**Architecture:** 
1. Proxy layer in `vite.config.ts` (dev) and `api/pyq/[...path].ts` / `api/proxy.js` (prod) routes `/api/pyq/...` to `https://srm-pyq-api.onrender.com` to bypass CORS.
2. A resilient TypeScript client `src/api/pyqClient.ts` handles course search, paper retrieval, file resolution, and direct download URLs with memory caching.
3. Hybrid query engine in `src/api/notes.ts` merges live PYQ papers with existing lecture notes and syllabi, providing instant offline fallback.
4. `PdfViewerModal.tsx` supports direct Cloudflare R2 PDF viewing and downloads alongside Google Drive preview iframes.
5. `NotesBentoView.tsx` displays live question papers with exam year, term, and session tags under a dedicated past papers tab and enrolled courses shelf.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, Vitest.

**Spec:** `docs/superpowers/specs/2026-11-24-live-pyq-api-integration-design.md`

## Global Constraints
- Render API base URL: `https://srm-pyq-api.onrender.com`.
- Proxy path: `/api/pyq` forwarding to Render API without CORS issues.
- All existing notes and syllabi in `src/data/notesCatalogue.json` must continue working offline.
- Direct PDF URLs from R2 (`https://pub-*.r2.dev/...`) must render seamlessly in `PdfViewerModal`.

## Review Focus
1. Cold start timeouts on Render: must handle errors gracefully without crashing the UI, showing local cached/fallback papers if available.
2. Special characters in course code (e.g. `,20PCSE85J` or `.21CSE584T`): course code path param must be properly `encodeURIComponent`ed.
3. Paper files without explicit `public_url` in API response: must call `/v1/files/{file_id}/download` to obtain the download/streaming link.
4. R2 PDF links opening in `PdfViewerModal`: must display clean iframe preview and external download action, handling loading state and error fallback.
5. Enrolled course matching: course codes with or without spaces/hyphens must normalize correctly to find matching live papers.

---

### Task 1: Proxy Setup for Development & Production

**Files:**
- Modify: `vite.config.ts`
- Create / Modify: `api/proxy.js`
- Test: `src/api/__tests__/proxyRoute.test.ts`

- [ ] Add `/api/pyq` proxy rule to `vite.config.ts` targeting `https://srm-pyq-api.onrender.com` with `changeOrigin: true` and path rewrite.
- [ ] Update Vercel serverless proxy (`api/proxy.js` or `api/pyq/[...path].ts`) to detect `/api/pyq` and forward upstream to `https://srm-pyq-api.onrender.com`.
- [ ] Write unit tests verifying proxy target URL generation and header sanitation.
- [ ] Verify tests pass (`npx vitest run src/api/__tests__/proxyRoute.test.ts`).

---

### Task 2: PYQ API Client (`src/api/pyqClient.ts`)

**Files:**
- Create: `src/api/pyqClient.ts`
- Test: `src/api/__tests__/pyqClient.test.ts`

- [ ] Define TypeScript types: `PyqCourse`, `PyqPaper`, `PyqFile`, `PyqDownloadResponse`, `PaginatedResult<T>`.
- [ ] Implement `searchCourses(query: string, limit?: number)`.
- [ ] Implement `getCourseByCode(courseCode: string)`.
- [ ] Implement `getPapersForCourse(courseCode: string, options?: { year?: number; term?: string; cursor?: string; limit?: number })`.
- [ ] Implement `getPaperFiles(paperId: string)`.
- [ ] Implement `getDownloadUrl(fileId: string, ttlSeconds?: number)`.
- [ ] Add in-memory LRU cache (5-minute TTL) for course and paper lookups.
- [ ] Write unit tests verifying API calls, query string building, URL encoding for special course codes, error handling, and caching.
- [ ] Verify tests pass (`npx vitest run src/api/__tests__/pyqClient.test.ts`).

---

### Task 3: Hybrid Notes & Live Paper Query Fusion (`src/api/notes.ts`)

**Files:**
- Modify: `src/api/notes.ts`
- Test: `src/api/__tests__/notes.test.ts`

- [ ] Extend `NoteResource` with optional fields: `isLive?: boolean; examYear?: number | null; sessionLabel?: string | null; paperId?: string`.
- [ ] Implement `fetchLivePapersForCourse(courseCode: string): Promise<NoteResource[]>`.
- [ ] Implement `formatPyqPaperTitle(paper: PyqPaper): string` to produce human-readable names (e.g. "May/June 2025 exam paper").
- [ ] Add fallback behavior: if live API is slow or returns no papers, retain catalogued papers from `notesCatalogue.json`.
- [ ] Update unit tests in `src/api/__tests__/notes.test.ts` to test live paper transformation, title formatting, and fallback logic.
- [ ] Verify tests pass (`npx vitest run src/api/__tests__/notes.test.ts`).

---

### Task 4: In-App Direct PDF & R2 Viewer (`PdfViewerModal.tsx`)

**Files:**
- Modify: `src/components/modals/PdfViewerModal.tsx`
- Modify: `src/components/modals/__tests__/PdfViewerModal.test.ts`

- [ ] Detect direct PDF URLs (e.g. `pub-*.r2.dev`, ending with `.pdf`) vs. Google Drive URLs.
- [ ] If direct PDF URL, render `<iframe src={url} className="w-full h-full border-0" />` with download/open button pointing directly to the PDF.
- [ ] If Google Drive URL, continue using Google Drive preview iframe (`https://drive.google.com/file/d/.../preview`).
- [ ] Update unit tests verifying preview URL detection for both R2 PDFs and Drive links.
- [ ] Verify tests pass (`npx vitest run src/components/modals/__tests__/PdfViewerModal.test.ts`).

---

### Task 5: UI Integration in `NotesBentoView.tsx`

**Files:**
- Modify: `src/components/views/NotesBentoView.tsx`

- [ ] When inspecting a subject or clicking an enrolled course, fetch live papers in the background via `fetchLivePapersForCourse`.
- [ ] Display live badges / tags indicating official university question paper session (e.g., "2025 • regular", "2024 • supplementary").
- [ ] Add smooth loading skeleton / pulse indicator while live papers load, keeping unit lecture notes immediately interactive.
- [ ] Add quick-refresh or fallback message if the live API encounters a network issue.

---

### Task 6: Rigorous Verification, Build & Knowledge Graph Update

- [ ] Run full test suite: `npx vitest run`.
- [ ] Run TypeScript type check: `npx tsc --noEmit`.
- [ ] Run production build: `npm run build`.
- [ ] Update knowledge graph: `graphify update .`.
- [ ] Commit all completed implementation changes with descriptive message.
