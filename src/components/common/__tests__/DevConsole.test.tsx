import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { DevConsole, isLocalhost } from '../DevConsole';

vi.mock('../../../context/SessionContext', () => ({
  useSession: () => ({
    todayDateStr: '2026-11-24',
    currentTime: { hours: 12, minutes: 45, formattedTime: '12:45' },
    currentDayOrder: 1,
    isHoliday: false,
    holidayName: undefined,
    isSimulated: true,
    setSimulatedDate: vi.fn(),
    setSimulatedTime: vi.fn(),
    resetSimulation: vi.fn(),
  }),
}));

describe('DevConsole (localhost exclusive)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('correctly identifies localhost and 127.0.0.1 and rejects remote domains', () => {
    expect(isLocalhost('localhost')).toBe(true);
    expect(isLocalhost('127.0.0.1')).toBe(true);
    expect(isLocalhost('[::1]')).toBe(true);
    expect(isLocalhost('srm-academia.vercel.app')).toBe(false);
    expect(isLocalhost('academia.srmist.edu.in')).toBe(false);
  });

  it('renders developer console on localhost with simulated indicators', () => {
    const html = renderToString(React.createElement(DevConsole, { forceShow: true }));
    // Check that dev toggle pill renders
    expect(html).toContain('dev');
    expect(html).toContain('12:45');
  });
});
