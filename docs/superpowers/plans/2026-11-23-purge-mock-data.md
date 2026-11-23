# Purge Mock Data & Enforce Real Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate all mock data files, mock variables, and demo fallback mechanisms, ensuring the application strictly runs on real verified SRM data and live API authentication.

**Architecture:** 
1. Convert mock data files (`mockStudent.ts`, `mockExamTimetable.ts`, `mockFaculty.ts`) into authoritative, real-world data modules (`studentData.ts`, `examTimetable.ts`, `facultyDirectory.ts`).
2. Remove all demo login branches, demo tokens (`demo_session_token`), and `useDemoFallback` in `client.ts` and `SessionContext.tsx`.
3. Update all views and test suites to import from the real data modules and eliminate any remaining mock references.

**Tech Stack:** React 19, TypeScript, Vitest, Vite

---

## Tasks

- [ ] **Task 1: Create Real Data Modules & Delete Mock Files**
  - Create `src/data/studentData.ts` exporting `REAL_STUDENT_DATA` and `REAL_TIMETABLE_DATA` (Satadru Bhattacharya RA2511033010043 real courses, attendance, internal marks, and cycle schedule).
  - Create `src/data/examTimetable.ts` exporting `OFFICIAL_EXAM_TIMETABLE` (SRM COE end-semester schedule).
  - Create `src/data/facultyDirectory.ts` exporting `FACULTY_DIRECTORY` (54+ real professors across Tech Park and University Building).
  - Delete `src/data/mockStudent.ts`, `src/data/mockExamTimetable.ts`, `src/data/mockFaculty.ts`.

- [ ] **Task 2: Remove Demo Fallbacks & Mock Logic from Client & Session**
  - In `src/api/client.ts`: remove `useDemoFallback`, `identifier === 'demo'`, and mock data fallbacks in `login()`, `loginStudentPortal()`, `fetchUser()`, `fetchTimetable()`.
  - In `src/context/SessionContext.tsx`: remove `demo_` token branches and rehydrate only from real cached session or `REAL_STUDENT_DATA`.

- [ ] **Task 3: Update Components and Academic Calendar**
  - In `src/data/academicCalendar.ts`: update imports from `./mockExamTimetable` to `./examTimetable` (`OFFICIAL_EXAM_TIMETABLE`).
  - In `src/components/views/ExamTimetableBentoView.tsx`: update import to `OFFICIAL_EXAM_TIMETABLE`.
  - In `src/components/views/FacultyFinderBentoView.tsx`: update import to `FACULTY_DIRECTORY`.
  - In `src/components/modals/CommandPaletteModal.tsx`: update import to `FACULTY_DIRECTORY`.

- [ ] **Task 4: Update All Automated Test Suites**
  - Update all tests referencing `MOCK_*` to use `REAL_STUDENT_DATA`, `REAL_TIMETABLE_DATA`, `OFFICIAL_EXAM_TIMETABLE`, or `FACULTY_DIRECTORY`:
    - `src/api/__tests__/cache.test.ts`
    - `src/api/__tests__/client.test.ts`
    - `src/api/__tests__/grades.test.ts`
    - `src/api/__tests__/predictor.test.ts`
    - `src/components/modals/__tests__/GpaPredictorModal.test.ts`
    - `src/components/modals/__tests__/GpaPredictorModalRender.test.ts`
    - `src/components/views/__tests__/MarksBentoView.test.ts`
    - `src/components/views/__tests__/FacultyFinderBentoView.test.ts`

- [ ] **Task 5: Verification & Build**
  - Run `npx vitest run` to ensure all tests pass.
  - Run `npx tsc --noEmit && npm run build` to confirm clean compilation and asset bundle generation.
  - Update the knowledge graph via `graphify update .`.
