# Living Masterpiece Interactive Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform SRM Academia into a tactile, responsive "Living Masterpiece" by adding pointer-tracking specular spotlights, subtle 3D micro-tilts, living count-up numbers, cascading grid entrances, and bouncy spring micro-interactions across the entire application.

**Architecture:** Build a clean, modular suite of motion primitives in `src/components/common/motion/` (`InteractiveBentoCard`, `AnimatedNumber`, `AnimatedProgressBar`, `StaggerContainer`, `SpringPress`) using `framer-motion` and CSS token variables. Progressively integrate these primitives across the app layout, floating dock, and all 9 bento views while preserving existing touch swipe gestures and passing all 111 unit/integration tests.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion v14, Lucide React, Vitest.

**Spec:** `docs/superpowers/specs/2026-11-24-living-masterpiece-animations-design.md`

## Global Constraints
- Pure GPU-accelerated transforms (`transform`, `opacity`, CSS custom properties for radial gradients).
- Zero heavy 3D engine dependencies (strictly use existing `framer-motion` v14).
- Respect `prefers-reduced-motion` to disable animations for motion-sensitive users.
- Maintain 100% pass rate across the existing 18 test suites (111 tests).
- All micro-interactions must respond within 16ms (60fps); animations settle within 250-400ms without visual exhaustion.

## Review Focus
1. Rapid Tab Switching: Numbers must not flash 0 every time a tab is re-selected; verify numbers settle instantaneously or retain state across tab remounts.
2. Touch & Mobile Devices: 3D micro-tilts must be disabled on touch/pointer-coarse devices to prevent scroll jitter or gesture interference.
3. Contrast & Legibility: Specular spotlight radial overlays must never degrade contrast or obscure text readability in any of the 4 themes (Light, OLED Black, Slate, Barbie).
4. Modal Dialogs: Floating dialogs (`CommandPaletteModal`, `AttendancePredictorModal`, `GpaPredictorModal`) must not inherit 3D card tilt.
5. Mobile Touch Swipe: The horizontal swipe gesture in `App.tsx` must remain buttery smooth without conflicting with card pointer listeners.

---

### Task 1: Motion Primitives & CSS Token Enhancements

**Files:**
- Create: `src/components/common/motion/StaggerContainer.tsx`
- Create: `src/components/common/motion/AnimatedNumber.tsx`
- Create: `src/components/common/motion/AnimatedProgressBar.tsx`
- Create: `src/components/common/motion/SpringPress.tsx`
- Create: `src/components/common/motion/InteractiveBentoCard.tsx`
- Create: `src/components/common/motion/__tests__/MotionPrimitives.test.tsx`
- Modify: `src/styles/design-tokens.css`
- Modify: `src/styles/globals.css`

**Interfaces:**
- `StaggerContainer`: Props `{ children: React.ReactNode; className?: string; delay?: number }`
- `StaggerItem`: Props `{ children: React.ReactNode; className?: string }`
- `AnimatedNumber`: Props `{ value: number; decimals?: number; prefix?: string; suffix?: string; className?: string }`
- `AnimatedProgressBar`: Props `{ value: number; max?: number; colorClass?: string; className?: string }`
- `SpringPress`: Props `{ children: React.ReactNode; className?: string; onClick?: () => void; scaleHover?: number; scaleTap?: number }`
- `InteractiveBentoCard`: Props `{ children: React.ReactNode; className?: string; onClick?: () => void; enableTilt?: boolean; style?: React.CSSProperties; id?: string }`

- [ ] **Step 1: Write the failing test for motion primitives**
  Write tests in `src/components/common/motion/__tests__/MotionPrimitives.test.tsx` asserting:
  - `AnimatedNumber` renders initial value or formatted string with `tabular-nums`.
  - `AnimatedProgressBar` renders with correct width percentage.
  - `InteractiveBentoCard` renders children, handles pointer events, and provides spotlight class.
  - `SpringPress` renders child element with motion button wrapper.

- [ ] **Step 2: Run test to verify it fails**
  Run: `cmd /c npx.cmd vitest run src/components/common/motion/__tests__/MotionPrimitives.test.tsx`
  Expected: FAIL with missing module imports.

- [ ] **Step 3: Implement CSS token enhancements**
  In `src/styles/design-tokens.css` and `src/styles/globals.css`, add spotlight variables (`--spotlight-color`, `--mouse-x`, `--mouse-y`), perspective utility classes, and `prefers-reduced-motion` overrides.

- [ ] **Step 4: Implement motion primitive components**
  Implement `StaggerContainer.tsx`, `AnimatedNumber.tsx`, `AnimatedProgressBar.tsx`, `SpringPress.tsx`, and `InteractiveBentoCard.tsx` in `src/components/common/motion/`.
  - In `InteractiveBentoCard`: use `onPointerMove` to calculate percentage coordinates `(x, y)` for `--mouse-x` and `--mouse-y`; apply subtle 3D tilt with spring damping (`max: 4deg`) on desktop pointer hover (`pointer: fine`); smoothly reset on leave.
  - In `AnimatedNumber`: use `useSpring` and `useTransform` with fast spring parameters (`stiffness: 280, damping: 24`) formatting output to fixed decimals.

- [ ] **Step 5: Run tests to verify they pass**
  Run: `cmd /c npx.cmd vitest run src/components/common/motion/__tests__/MotionPrimitives.test.tsx`
  Expected: PASS

- [ ] **Step 6: Run full test suite regression check**
  Run: `cmd /c npm test`
  Expected: 19 test files passed (111+ tests).

---

### Task 2: Living Floating Dock & Global Navigation Enhancements

**Files:**
- Modify: `src/components/layout/FloatingDock.tsx`
- Modify: `src/components/layout/AppLayout.tsx`
- Test: `src/components/views/__tests__/MobileAndHeaderCleanliness.test.ts`

**Interfaces:**
- Consumes: `SpringPress` from `src/components/common/motion/SpringPress`
- Produces: Enhanced tactile dock buttons with bouncy icon hover/tap, animated theme indicator pulse, and living header search pill.

- [ ] **Step 1: Inspect and run existing navigation tests**
  Run: `cmd /c npx.cmd vitest run src/components/views/__tests__/MobileAndHeaderCleanliness.test.ts`
  Expected: PASS

- [ ] **Step 2: Enhance `FloatingDock.tsx`**
  - Add spring bounce to tab button icons (`whileHover={{ y: -2, scale: 1.05 }}`, `whileTap={{ scale: 0.94 }}`).
  - Smooth spring layout transition for `layoutId="active-dock-pill"` (`stiffness: 450, damping: 32`).
  - Add micro-bounce to theme cycle button and sync icon.
  - Add staggered item slide-up inside the "More" popover menu.

- [ ] **Step 3: Enhance `AppLayout.tsx`**
  - Add tactile spring press to the Ctrl+K search bar trigger (`whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.97 }}`).
  - Add subtle breathing pulse to the campus status badge dot (`day order` / `syncing`).

- [ ] **Step 4: Verify navigation & cleanliness tests**
  Run: `cmd /c npx.cmd vitest run src/components/views/__tests__/MobileAndHeaderCleanliness.test.ts`
  Expected: PASS

---

### Task 3: Living Overview & Attendance Bento Views

**Files:**
- Modify: `src/components/views/AtAGlanceView.tsx`
- Modify: `src/components/views/AttendanceBentoView.tsx`

**Interfaces:**
- Consumes: `InteractiveBentoCard`, `StaggerContainer`, `StaggerItem`, `AnimatedNumber`, `AnimatedProgressBar`, `SpringPress`

- [ ] **Step 1: Enhance `AtAGlanceView.tsx`**
  - Wrap grid in `<StaggerContainer>` and cards in `<StaggerItem>`.
  - Replace static `.bento-card` containers with `<InteractiveBentoCard>`.
  - Replace static overall attendance % (`overallPercent`) and GPA with `<AnimatedNumber value={overallPercent} decimals={1} suffix="%" />`.
  - Replace static safe bunk margins with `<AnimatedProgressBar>` and `<AnimatedNumber>`.
  - Add spring tactile feedback to quick action cards and student name trigger.

- [ ] **Step 2: Enhance `AttendanceBentoView.tsx`**
  - Wrap course cards in `<InteractiveBentoCard>` and `<StaggerContainer>`.
  - Connect `AnimatedNumber` to attendance percentages and margin calculations.
  - Enable smooth layout transition (`layout` prop on card motion wrapper) so card expansions (`col-span-8` vs `col-span-4`) morph fluidly when simulating attendance forecasts or custom target adjustments.
  - Add `<SpringPress>` to predictor modal button, target button, and search input focus.

- [ ] **Step 3: Run test suite to verify no regressions**
  Run: `cmd /c npm test`
  Expected: PASS

---

### Task 4: Living Timetable & Marks Bento Views

**Files:**
- Modify: `src/components/views/TimetableBentoView.tsx`
- Modify: `src/components/views/MarksBentoView.tsx`
- Test: `src/components/views/__tests__/MarksBentoView.test.ts`

**Interfaces:**
- Consumes: `InteractiveBentoCard`, `StaggerContainer`, `StaggerItem`, `AnimatedNumber`, `SpringPress`

- [ ] **Step 1: Enhance `TimetableBentoView.tsx`**
  - Wrap timetable grid / period groups in `<StaggerContainer>` so periods cascade sequentially.
  - Wrap period slots in `<InteractiveBentoCard>`.
  - Add breathing live indicator pulse to the currently active period slot during ongoing classes.
  - Add tactile spring buttons to Day Order selector tabs (Day 1 - Day 5) and view toggle.

- [ ] **Step 2: Enhance `MarksBentoView.tsx`**
  - Wrap marks course cards in `<InteractiveBentoCard>` and `<StaggerContainer>`.
  - Use `<AnimatedNumber>` for internal total scores, maximums, and best possible GPA contribution.
  - Smooth spring accordion height animation on test breakdown expand/collapse (`AnimatePresence` with `initial={{ height: 0, opacity: 0 }}`).
  - Add bouncy spring clicks on test score chips.

- [ ] **Step 3: Run marks view tests**
  Run: `cmd /c npx.cmd vitest run src/components/views/__tests__/MarksBentoView.test.ts`
  Expected: PASS

---

### Task 5: Living Notes, Faculty, Calendar, Exam Timetable & Profile Views

**Files:**
- Modify: `src/components/views/NotesBentoView.tsx`
- Modify: `src/components/views/FacultyFinderBentoView.tsx`
- Modify: `src/components/views/CalendarBentoView.tsx`
- Modify: `src/components/views/ExamTimetableBentoView.tsx`
- Modify: `src/components/views/ProfileBentoView.tsx`
- Test: `src/components/views/__tests__/FacultyFinderBentoView.test.ts`

**Interfaces:**
- Consumes: `InteractiveBentoCard`, `StaggerContainer`, `StaggerItem`, `SpringPress`

- [ ] **Step 1: Enhance `NotesBentoView.tsx`**
  - Wrap unit cards and PYQ downloads in `<InteractiveBentoCard>` and `<StaggerContainer>`.
  - Add spring hover and tap physics to download triggers and filter tabs.

- [ ] **Step 2: Enhance `FacultyFinderBentoView.tsx`**
  - Wrap faculty cards in `<InteractiveBentoCard>` and `<StaggerContainer>`.
  - Add tactile spring physics to cabin copy and contact buttons.

- [ ] **Step 3: Enhance `CalendarBentoView.tsx` & `ExamTimetableBentoView.tsx`**
  - Add cascading entrance animations to upcoming milestones, holiday indicators, and exam slots.
  - Use `<InteractiveBentoCard>` with subtle spotlight for date cards.

- [ ] **Step 4: Enhance `ProfileBentoView.tsx`**
  - Add `<InteractiveBentoCard>` and `<StaggerContainer>` to student details, attendance summary, and portal links.

- [ ] **Step 5: Run faculty finder and full test suite**
  Run: `cmd /c npm test`
  Expected: PASS across all test files.

---

### Task 6: Production Build Verification & Performance Audit

**Files:**
- Verify: Full codebase

- [ ] **Step 1: Run production TypeScript and Vite build**
  Run: `cmd /c npm run build`
  Expected: Build succeeds with 0 type errors and 0 build warnings.

- [ ] **Step 2: Run complete Vitest suite**
  Run: `cmd /c npm test`
  Expected: All test suites PASS (19+ files, 115+ tests).

- [ ] **Step 3: Verify Reduced Motion Compliance**
  Confirm that when `prefers-reduced-motion: reduce` is active, transforms are neutralized and opacity immediately resolves.
