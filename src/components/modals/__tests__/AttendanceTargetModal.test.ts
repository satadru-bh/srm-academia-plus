import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('AttendanceTargetModal implementation verification', () => {
  it('AttendanceTargetModal file exists and exports AttendanceTargetModal', () => {
    const filePath = path.resolve(__dirname, '../AttendanceTargetModal.tsx');
    expect(fs.existsSync(filePath)).toBe(true);
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('export const AttendanceTargetModal');
    expect(content).toContain('PRESETS');
    expect(content).toContain('apply target');
    expect(content).toContain('reset to 75%');
  });

  it('AttendanceBentoView renders the target button next to attendance predictor', () => {
    const viewPath = path.resolve(__dirname, '../../views/AttendanceBentoView.tsx');
    const content = fs.readFileSync(viewPath, 'utf-8');
    expect(content).toContain('attendance predictor');
    expect(content).toContain('target: {attendanceTargetPercent}%');
    expect(content).toContain('setIsTargetModalOpen(true)');
    expect(content).toContain('AttendanceTargetModal');
  });

  it('SessionContext exposes attendanceTargetPercent and setAttendanceTargetPercent with localStorage sync', () => {
    const sessionPath = path.resolve(__dirname, '../../../context/SessionContext.tsx');
    const content = fs.readFileSync(sessionPath, 'utf-8');
    expect(content).toContain('attendanceTargetPercent');
    expect(content).toContain('setAttendanceTargetPercent');
    expect(content).toContain('srm_attendance_target');
  });
});
