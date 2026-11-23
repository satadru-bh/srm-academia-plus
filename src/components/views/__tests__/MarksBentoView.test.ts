import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MarksBentoView } from '../MarksBentoView';
import { REAL_STUDENT_DATA } from '../../../data/studentData';

vi.mock('../../../context/SessionContext', () => ({
  useSession: () => ({
    user: REAL_STUDENT_DATA,
    activeTab: 'marks',
    setActiveTab: () => {},
    isDarkMode: true,
    toggleDarkMode: () => {},
    isLoading: false,
    isSyncing: false,
    lastSyncedAt: new Date(),
    error: null,
    isAcademiaActive: true,
    isStudentPortalActive: true,
    login: async () => ({ success: true }),
    loginStudentPortal: async () => ({ success: true }),
    logout: () => {},
    refreshData: async () => {},
    currentDayOrder: 4,
    isHoliday: false,
    holidayName: ''
  })
}));

describe('MarksBentoView rendering and grid integrity', () => {
  it('renders all course cards cleanly with items-start layout', () => {
    const html = renderToString(React.createElement(MarksBentoView));
    expect(html).toContain('internal marks &amp; projected grades');
    // Ensure course codes are present
    expect(html).toContain('21MAB201T');
    expect(html).toContain('21CSC201J');
    expect(html).toContain('21CSS201T');
    expect(html).toContain('21CSC203P');
    expect(html).toContain('21CSC202J');
    expect(html).toContain('21LEM202T');
    // Ensure grid has items-start to prevent row stretching
    expect(html).toContain('items-start');
  });

  it('contains histogram trend toggle and elements', () => {
    const html = renderToString(React.createElement(MarksBentoView));
    expect(html).toContain('gpa predictor');
    expect(html).toContain('view details');
  });
});
