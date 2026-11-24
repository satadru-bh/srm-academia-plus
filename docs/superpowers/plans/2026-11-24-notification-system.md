# Award-Winning Notification System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

Build an award-winning, Apple Dynamic Island-styled notification system for SRM Academia that alerts students to updates in **internal marks** (strictly including the **component name**, e.g., Cycle Test 2, Assignment 1, Surprise Test) and **attendance**, featuring fluid spring physics, deep-linking into subject cards, header notification log, and testing triggers in the localhost dev console.

---

### Proposed File Structure
- `src/types/notifications.ts`: TypeScript definitions for `AppNotification`, `NotificationType`, and payload structures.
- `src/context/NotificationContext.tsx`: Notification store managing history, unread counts, active toast queue, deep-linking hooks, and localStorage persistence.
- `src/components/notifications/DynamicIslandToast.tsx`: Apple Dynamic Island floating notification toast with spring animation, drag-to-dismiss, and auto-dismiss timer.
- `src/components/notifications/NotificationBell.tsx`: Top-bar frosted glass notification bell with unread badge and rich notification log drawer/popover.
- `src/components/layout/AppLayout.tsx`: Mounts `NotificationBell` in the top header and `DynamicIslandToast` viewport anchor.
- `src/components/common/DevConsole.tsx`: Testing options to simulate marks additions (with specific component names) and attendance deltas.
- `src/components/notifications/__tests__/NotificationSystem.test.tsx`: Comprehensive unit tests for state, rendering, component name display, and deep-linking.

---

### Tasks

- [ ] **Task 1: Notification Types and Store Context**
  - Define `AppNotification` with required `componentName` for mark updates.
  - Implement `NotificationProvider` with `addNotification`, `markAsRead`, `markAllAsRead`, `clearAll`, `activeToast`, and persistence.
  - End with failing/passing unit tests in `NotificationSystem.test.tsx`.

- [ ] **Task 2: Dynamic Island Notification Toast Component**
  - Implement `DynamicIslandToast.tsx` with Framer Motion spring physics (`damping: 24, stiffness: 320`).
  - Render glowing badge, course code, component name pill, score/attendance delta, and tap-to-inspect trigger.
  - Support drag-to-dismiss and click navigation (`openCourseMarks` / `openCourseAttendance`).

- [ ] **Task 3: Notification Bell & Popover in Header**
  - Implement `NotificationBell.tsx` with floating frosted glass list of past notifications.
  - Include unread badge dot, mark-all-as-read, clear button, and empty state.
  - Mount beside the search bar in `AppLayout.tsx`.

- [ ] **Task 4: Dev Console Testing Suite**
  - Add "Notification Testing Triggers" section to `DevConsole.tsx`.
  - Provide 1-click simulations for:
    - Marks added: Operating Systems with component name "Cycle Test 2" (48/50)
    - Marks added: Data Structures with component name "Assignment 1" (19/20)
    - Marks added: Transforms & BVP with component name "Surprise Test" (10/10)
    - Attendance updated: +1 hour present (attendance improves)
    - Attendance warning: absent recorded (drops below 75% cutoff)
    - Clear notifications

- [ ] **Task 5: End-to-End Verification and Push**
  - Run full test suite (`npx vitest run`).
  - Run production build (`tsc && vite build`).
  - Run `graphify update .`.
  - Commit and push to GitHub `origin main`.
