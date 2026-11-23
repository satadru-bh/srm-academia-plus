import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Header Cleanliness and Design Verification', () => {
  it('AttendancePredictorModal has clean header without ± symbol box or subtitle', () => {
    const fileContent = fs.readFileSync(
      path.resolve(__dirname, '../../common/AttendancePredictorModal.tsx'),
      'utf-8'
    );
    expect(fileContent).not.toContain('forecast how attending or missing future classes impacts your 75% margin');
    expect(fileContent).toContain('attendance predictor');
  });

  it('GpaPredictorModal has clean header without SRM simulation eyebrow or auto credit weighted badge', () => {
    const fileContent = fs.readFileSync(
      path.resolve(__dirname, '../../modals/GpaPredictorModal.tsx'),
      'utf-8'
    );
    expect(fileContent).not.toContain('srm academic simulation');
    expect(fileContent).not.toContain('auto credit weighted');
    expect(fileContent).toContain('gpa predictor & end-sem targets');
  });

  it('AppLayout header has removed student metadata text strip', () => {
    const fileContent = fs.readFileSync(
      path.resolve(__dirname, '../../layout/AppLayout.tsx'),
      'utf-8'
    );
    expect(fileContent).not.toContain('user.profile.comboBatch');
    expect(fileContent).not.toContain('user.profile.regNo');
  });

  it('ProfileBentoView has removed ACTIVE STUDENT and SRMIST KTR badges', () => {
    const fileContent = fs.readFileSync(
      path.resolve(__dirname, '../ProfileBentoView.tsx'),
      'utf-8'
    );
    expect(fileContent).not.toContain('active student');
    expect(fileContent).not.toContain('srmist ktr');
    expect(fileContent).toContain('handleAvatarChange');
  });

  it('FacultyFinderBentoView shows course code and title without slot session parentheses', () => {
    const fileContent = fs.readFileSync(
      path.resolve(__dirname, '../FacultyFinderBentoView.tsx'),
      'utf-8'
    );
    expect(fileContent).not.toContain('{c.code} {c.slot ? `(${c.slot})` : \'\'}');
    expect(fileContent).toContain('mailto:${f.email}');
    expect(fileContent).toContain('courses taught:');
  });

  it('PWA manifest exists and is configured for standalone installation with versioned icons', () => {
    const manifestPath = path.resolve(__dirname, '../../../../public/manifest.json');
    expect(fs.existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifest.display).toBe('standalone');
    expect(manifest.name).toBe('academia plus');
    expect(manifest.icons.length).toBeGreaterThanOrEqual(3);
    expect(manifest.icons[0].src).toContain('?v=');
  });

  it('New logo asset exists and is rendered in AppLayout and SignInBentoView', () => {
    const logoPath = path.resolve(__dirname, '../../../../public/logo.png');
    expect(fs.existsSync(logoPath)).toBe(true);

    const appLayout = fs.readFileSync(path.resolve(__dirname, '../../layout/AppLayout.tsx'), 'utf-8');
    expect(appLayout).toContain('src="/logo.png"');

    const signIn = fs.readFileSync(path.resolve(__dirname, '../SignInBentoView.tsx'), 'utf-8');
    expect(signIn).toContain('src="/logo.png"');
  });

  it('App uses snappy mode="wait" transition without layout thrashing', () => {
    const appTsx = fs.readFileSync(path.resolve(__dirname, '../../../App.tsx'), 'utf-8');
    expect(appTsx).toContain('mode="wait"');
    expect(appTsx).not.toContain('mode="popLayout"');
  });

  it('index.html uses versioned cache-busting on favicon and manifest links', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../../../../index.html'), 'utf-8');
    expect(html).toContain('href="/favicon.svg?v=');
    expect(html).toContain('href="/manifest.json?v=');
    expect(html).toContain('href="/icon-192.png?v=');
  });

  it('TimetableBentoView has completely removed export options as requested', () => {
    const timetable = fs.readFileSync(path.resolve(__dirname, '../TimetableBentoView.tsx'), 'utf-8');
    expect(timetable).not.toContain('export timetable');
    expect(timetable).not.toContain('handleExport');
    expect(timetable).not.toContain('isExporting');

    const commandPalette = fs.readFileSync(path.resolve(__dirname, '../../modals/CommandPaletteModal.tsx'), 'utf-8');
    expect(commandPalette).not.toContain('action-export-timetable');
  });

  it('sw.js employs network-first navigation strategy and vercel.json enforces no-cache on index.html and sw.js', () => {
    const sw = fs.readFileSync(path.resolve(__dirname, '../../../../public/sw.js'), 'utf-8');
    expect(sw).toContain("event.request.mode === 'navigate'");
    expect(sw).toContain('Network-First strategy');

    const vercel = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../../vercel.json'), 'utf-8'));
    const indexHeader = vercel.headers.find((h: any) => h.source === '/index.html' || h.source === '/');
    expect(indexHeader).toBeDefined();
    expect(indexHeader.headers[0].value).toContain('no-cache');
  });

  it('FloatingDock popover menu is explicitly anchored with fixed bottom-20 directly above the dock', () => {
    const dock = fs.readFileSync(path.resolve(__dirname, '../../layout/FloatingDock.tsx'), 'utf-8');
    expect(dock).toContain('fixed bottom-20 left-1/2 -translate-x-1/2');
    expect(dock).toContain('w-[calc(100vw-32px)]');
  });

  it('SessionContext clears focusedCourseCode on tab navigation to prevent auto-opening subject details', () => {
    const session = fs.readFileSync(path.resolve(__dirname, '../../../context/SessionContext.tsx'), 'utf-8');
    expect(session).toContain('setFocusedCourseCode(null)');
    expect(session).toContain('setActiveTabState(tab)');
  });

  it('globals.css avoids body overflow-x hidden to preserve mobile position fixed coordinates', () => {
    const css = fs.readFileSync(path.resolve(__dirname, '../../../styles/globals.css'), 'utf-8');
    expect(css).toContain('overflow-x: clip;');
    expect(css).not.toMatch(/body\s*\{[^}]*overflow-x:\s*hidden/);
  });

  it('App implements mobile swipe navigation with spring physics and jitter-free layout', () => {
    const appTsx = fs.readFileSync(path.resolve(__dirname, '../../../App.tsx'), 'utf-8');
    expect(appTsx).toContain('handleTouchStart');
    expect(appTsx).toContain('handleTouchEnd');
    expect(appTsx).toContain('handleTouchCancel');
    expect(appTsx).toContain('ORDERED_TABS');
    expect(appTsx).toContain('overflow-x-clip');
  });

  it('purges all user-facing references to campusweb', () => {
    const signIn = fs.readFileSync(path.resolve(__dirname, '../SignInBentoView.tsx'), 'utf-8');
    const client = fs.readFileSync(path.resolve(__dirname, '../../../api/client.ts'), 'utf-8');
    expect(signIn.toLowerCase()).not.toContain('campusweb gateway');
    expect(client).not.toContain('from CampusWeb servers');
  });

  it('FloatingDock more menu is centered and never clipped on mobile', () => {
    const dock = fs.readFileSync(path.resolve(__dirname, '../../layout/FloatingDock.tsx'), 'utf-8');
    expect(dock).toContain('left-1/2 -translate-x-1/2');
    expect(dock).toContain('w-[calc(100vw-32px)]');
  });

  it('NotesBentoView portals subject file browser to document.body', () => {
    const notes = fs.readFileSync(path.resolve(__dirname, '../NotesBentoView.tsx'), 'utf-8');
    expect(notes).toContain('createPortal');
    expect(notes).toContain('document.body');
  });
});
