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

  it('PWA manifest exists and is configured for standalone installation', () => {
    const manifestPath = path.resolve(__dirname, '../../../../public/manifest.json');
    expect(fs.existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifest.display).toBe('standalone');
    expect(manifest.name).toBe('academia plus');
    expect(manifest.icons.length).toBeGreaterThanOrEqual(3);
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
});
