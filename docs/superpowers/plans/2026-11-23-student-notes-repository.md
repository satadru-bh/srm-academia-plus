# Student Notes & PYQ Repository Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the comprehensive 98-subject, 838-resource SRM academic notes and previous-year question paper repository into Academia Plus, with zero-latency local caching, homepage dashboard card, smart enrolled-subject matching, and an in-app PDF preview modal, adhering strictly to the app's clean bento aesthetic.

**Architecture:** 
1. The 161 KB Studique resource dataset (`resources.json` + `subject_semesters.json`) is mirrored locally at `src/data/notesCatalogue.json` for instant, offline-first access.
2. An algorithmic query engine in `src/api/notes.ts` exposes fast token search, semester filtering, and automatic fuzzy matching of enrolled course codes (`21MAB201T`, `21CSC201J`, etc.).
3. A full-featured `NotesBentoView.tsx` provides semester chips, resource tabs, a pinned "Enrolled this Semester" shelf, and search.
4. A dedicated Notes card is added to `OverviewBentoView.tsx` (the homepage) giving students 1-tap access to current unit notes.
5. In-app resource viewing is powered by a portaled `PdfViewerModal.tsx`.
6. Seamlessly integrated into `FloatingDock.tsx`, `AppLayout.tsx`, and `CommandPaletteModal.tsx` (`Ctrl + K`).

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, Vitest.

---

### Task 1: Mirror Notes Archive and Implement Query Engine (`src/api/notes.ts`)

**Files:**
- Create: `src/data/notesCatalogue.json`
- Create: `src/api/notes.ts`
- Test: `src/api/__tests__/notes.test.ts`

- [ ] Download and structure the full 98-subject catalogue into `src/data/notesCatalogue.json`.
- [ ] Define TypeScript interfaces: `SubjectResource`, `ResourceItem`, `NotesCatalogue`, `CatalogueSubject`.
- [ ] Implement `searchNotesCatalogue(query: string, semester?: number, kind?: 'all' | 'notes' | 'papers' | 'syllabus')`.
- [ ] Implement `matchEnrolledCourseToNotes(courseCode: string, courseTitle: string, catalogue: CatalogueSubject[])`.
- [ ] Write unit tests verifying subject search, semester filtering, enrolled course matching, and Google Drive URL parsing.
- [ ] Verify tests pass (`npx vitest run src/api/__tests__/notes.test.ts`).

---

### Task 2: In-App PDF / Google Drive Resource Preview Modal (`PdfViewerModal.tsx`)

**Files:**
- Create: `src/components/modals/PdfViewerModal.tsx`
- Test: `src/components/modals/__tests__/PdfViewerModal.test.ts`

- [ ] Create glassmorphic `PdfViewerModal` portaled to `document.body` with `z-[99999]`.
- [ ] Render embedded Google Drive preview iframe (`https://drive.google.com/file/d/{fileId}/preview`), handling loading skeleton, external tab open button, and close (`Escape` / backdrop click).
- [ ] Write unit tests verifying render states and close callbacks.
- [ ] Verify tests pass (`npx vitest run src/components/modals/__tests__/PdfViewerModal.test.ts`).

---

### Task 3: Comprehensive Bento View (`NotesBentoView.tsx`)

**Files:**
- Create: `src/components/views/NotesBentoView.tsx`

- [ ] Build hero header with stats (`98 subjects • 480 unit notes • 285 previous papers`) and live search input.
- [ ] Build semester filter pills (`all`, `sem 1` to `sem 8`) and resource category switcher (`all`, `notes`, `pyqs`, `syllabus`).
- [ ] Build pinned "Enrolled in your semester" section matching student's active subjects with unit pills (Unit 1–5, Past Papers).
- [ ] Build all-subjects directory grid with responsive bento cards.
- [ ] Wire up `PdfViewerModal` on note badge click.

---

### Task 4: Homepage Notes Card (`OverviewBentoView.tsx`)

**Files:**
- Modify: `src/components/views/OverviewBentoView.tsx`

- [ ] Add a dedicated, beautifully styled Bento Card for Notes & Study Material on the homepage.
- [ ] Display quick-access chips for the student's current enrolled courses and direct links to their latest unit notes.
- [ ] Include 1-tap "open full repository" button that switches active tab to `notes`.
- [ ] Add direct preview trigger for instant access.

---

### Task 5: Global Navigation & Command Palette Integration

**Files:**
- Modify: `src/components/layout/FloatingDock.tsx`
- Modify: `src/components/layout/AppLayout.tsx`
- Modify: `src/components/modals/CommandPaletteModal.tsx`
- Modify: `src/App.tsx`

- [ ] Add `notes` tab to `FloatingDock.tsx` secondary tabs (`more` menu).
- [ ] Add `notes` route rendering in `App.tsx` and `FloatingDock.tsx` tab types.
- [ ] Add notes search indexing to `CommandPaletteModal.tsx` (`Ctrl + K` search for notes, subjects, and papers).

---

### Task 6: Rigorous Verification and Build

- [ ] Run full test suite: `npx vitest run`.
- [ ] Run TypeScript type check: `npx tsc --noEmit`.
- [ ] Run production build: `npm run build`.
- [ ] Update knowledge graph: `graphify update .`.
