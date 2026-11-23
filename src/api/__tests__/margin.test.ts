import { describe, it, expect } from 'vitest';
import { calculateAttendanceMargin, simulateAttendance } from '../margin';

describe('calculateAttendanceMargin', () => {
  it('returns safe status and correct skip margin when attendance is well above 75%', () => {
    const res = calculateAttendanceMargin(25, 22);
    expect(res.status).toBe('safe');
    expect(res.attendancePercent).toBe(88);
    expect(res.margin).toBe(4);
    expect(res.required).toBe(0);
    expect(res.label).toBe('can skip 4 classes');
  });

  it('handles plural vs singular in skip margin label', () => {
    const res = calculateAttendanceMargin(24, 19);
    expect(res.margin).toBe(1);
    expect(res.label).toBe('can skip 1 class');
    expect(res.status).toBe('borderline');
  });

  it('calculates required classes to reach 75% when below cutoff', () => {
    const res = calculateAttendanceMargin(21, 15);
    expect(res.status).toBe('danger');
    expect(res.attendancePercent).toBe(71.43);
    expect(res.margin).toBe(0);
    expect(res.required).toBe(3);
    expect(res.label).toBe('attend next 3 classes to hit 75%');
  });

  it('handles exactly on the 75% boundary', () => {
    const res = calculateAttendanceMargin(20, 15);
    expect(res.status).toBe('borderline');
    expect(res.attendancePercent).toBe(75);
    expect(res.margin).toBe(0);
    expect(res.required).toBe(0);
    expect(res.label).toBe('on 75% edge');
  });

  it('handles zero conducted classes gracefully', () => {
    const res = calculateAttendanceMargin(0, 0);
    expect(res.status).toBe('safe');
    expect(res.attendancePercent).toBe(100);
    expect(res.margin).toBe(0);
    expect(res.required).toBe(0);
    expect(res.label).toBe('no classes conducted');
  });
});

describe('simulateAttendance', () => {
  it('correctly simulates attending 3 additional classes', () => {
    // 15/21 = 71.43%. If student attends 3 classes: 18/24 = 75.0%
    const res = simulateAttendance(21, 15, 3);
    expect(res.simulatedConducted).toBe(24);
    expect(res.simulatedPresent).toBe(18);
    expect(res.simulatedPercent).toBe(75);
    expect(res.marginInfo.status).toBe('borderline');
  });

  it('correctly simulates skipping 2 classes', () => {
    // 22/25 = 88%. If student skips 2 classes: 22/27 = 81.48%
    const res = simulateAttendance(25, 22, -2);
    expect(res.simulatedConducted).toBe(27);
    expect(res.simulatedPresent).toBe(22);
    expect(res.simulatedPercent).toBe(81.48);
    expect(res.marginInfo.status).toBe('safe');
  });

  it('handles zero delta as identity', () => {
    const res = simulateAttendance(65, 50, 0);
    expect(res.simulatedConducted).toBe(65);
    expect(res.simulatedPresent).toBe(50);
    expect(res.simulatedPercent).toBe(76.92);
  });
});
