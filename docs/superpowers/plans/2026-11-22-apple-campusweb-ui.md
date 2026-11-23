# Apple-Inspired Modern UI for SRM Academia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Design and build a standalone, ultra-clean Apple-inspired modern web application powered by the CampusWeb API and SRM student data, strictly forbidding glassmorphism/blurs and adhering to high-craft solid matte Apple aesthetics.

**Architecture:** A Vite + React + TypeScript single-page application with a local CORS-safe proxy, a typed headless API client, an in-memory & `localStorage` stale-while-revalidate cache layer, and responsive views (desktop sidebar + mobile bottom navigation) rendered with custom Apple design tokens.

**Tech Stack:** React 19 / Vite 6, TypeScript, Tailwind CSS, Lucide React, Vitest, StitchMCP, Chrome DevTools Protocol.

**Spec:** [docs/campusweb_architecture_spec.md](file:///c:/Users/satad/OneDrive/Desktop/srm-academia/docs/campusweb_architecture_spec.md)

---

## Global Constraints

- **Design Philosophy:** Crisp, modern, minimalist Apple productivity design (macOS Sequoia / Apple.com / Apple Health).
- **NO Liquid Glass / NO Glassmorphism:** Zero `backdrop-filter: blur()`, zero translucent frosted panels, zero glossy borders, zero neon gradients. Solid, matte, high-craft surfaces with crisp hairline borders (`1px solid rgba(0,0,0,0.08)` light / `1px solid rgba(255,255,255,0.10)` dark).
- **Colors:** Light canvas `#F5F5F7`, card `#FFFFFF`; Dark canvas `#000000`, card `#1C1C1E`, secondary surface `#2C2C2E`. Semantic accents: System Blue `#007AFF` / `#0A84FF`, Green `#34C759`, Orange `#FF9500`, Red `#FF3B30`.
- **Typography:** Apple system stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif`). All numbers, hours, percentages, margins, and timings must use `tabular-nums` (`font-variant-numeric: tabular-nums`).
- **Data & Auth:** Direct communication via Vite dev proxy `/api/*` $\rightarrow$ `https://api.campusweb.in/api/*` with required `webDeviceHeaders`. Zero database; client caching via `localStorage`.

---

## Review Focus

1. **CORS Handling:** Direct browser fetch to `api.campusweb.in` fails due to browser preflight/origin restrictions; Vite proxy must cleanly rewrite `/api` and inject headers.
2. **Glassmorphism Leakage:** Ensure no CSS rule or Tailwind utility applies `backdrop-blur`, `bg-opacity`, or translucent borders.
3. **Tabular Numerals:** Ensure all attendance percentages, hours conducted/absent, marks, and time slots render with `font-variant-numeric: tabular-nums` to prevent layout jitter.
4. **Offline / Stale-While-Revalidate:** Boot instantly from cached student snapshot; trigger background re-fetch without freezing UI.
5. **Session Expiry Redirection:** When an upstream session expires (`401`), clear credentials gracefully and return to login without blank screen crashes.

---

## Tasks

### Task 1: StitchMCP Design System & Screen Prototypes
- [ ] Create Stitch project `SRM Academia - Apple Native` via StitchMCP
- [ ] Create Apple Matte Design System via StitchMCP `create_design_system`
- [ ] Generate desktop & mobile prototypes via `generate_screen_from_text`
- [ ] Export design tokens to `src/styles/design-tokens.css`

### Task 2: Project Scaffolding & CORS Proxy Setup
- [ ] Initialize `package.json` with React, Vite, TypeScript, Tailwind CSS, Lucide React, Vitest
- [ ] Configure `vite.config.ts` with proxy for `/api` targeting `https://api.campusweb.in/api`
- [ ] Configure `tailwind.config.js` and `index.html` with Apple font stack and matte theme variables
- [ ] Verify dev server runs and proxy forwards requests cleanly

### Task 3: Core API Client, Margin Calculator & Cache (TDD)
- [ ] Write unit tests for attendance margin calculator in `src/api/__tests__/margin.test.ts`
- [ ] Implement `src/api/margin.ts`
- [ ] Write unit tests for `localStorage` stale-while-revalidate cache in `src/api/__tests__/cache.test.ts`
- [ ] Implement `src/api/cache.ts`
- [ ] Write TypeScript data types in `src/api/types.ts`
- [ ] Implement `src/api/client.ts` with typed methods for auth, user snapshot, timetable, planner, and sessions
- [ ] Run and pass all unit tests via `npx vitest run`

### Task 4: Session State Management
- [ ] Implement `src/context/SessionContext.tsx` handling login, logout, cached profile loading, and manual sync
- [ ] Support live NetID authentication as well as demo session inspection
- [ ] Provide status flags (`isSyncing`, `lastSyncedAt`, `error`)

### Task 5: Layout & Navigation Shell
- [ ] Build `src/components/layout/AppLayout.tsx` with responsive navigation:
  - Desktop: Minimalist matte sidebar with Apple icon style
  - Mobile: Bottom tab bar (`<nav class="fixed bottom-0...">`)
- [ ] Build `src/components/common/Header.tsx` with live sync indicator, manual Refresh button, and theme toggle

### Task 6: Core View Implementation
- [ ] Build `src/components/views/SignInView.tsx`: Centered Apple-ID style card with NetID/Password inputs and instant validation
- [ ] Build `src/components/views/OverviewView.tsx`: Current Day Order, live/next lecture slot, overall attendance health metric, advisor card
- [ ] Build `src/components/views/AttendanceView.tsx`: Course cards with margin badges ("Can skip X" / "Attend next Y"), hours breakdown, and filter pills
- [ ] Build `src/components/views/TimetableView.tsx`: 5-day cycle grid with active time-slot indicator and batch switch (`1` or `2`)
- [ ] Build `src/components/views/MarksView.tsx`: Test performances breakdown (`FT-I`..`FT-IV`, `LLT-I`), scored vs max, percentage chips

### Task 7: Verification & Final Polish
- [ ] Run all Vitest unit tests (`npx vitest run`) and confirm 100% pass rate
- [ ] Execute `npm run build` and ensure zero TypeScript or bundling errors
- [ ] Audit CSS to guarantee zero `backdrop-filter` or glassmorphism classes exist
- [ ] Verify responsive layouts at 1440px desktop and 390px mobile viewports
