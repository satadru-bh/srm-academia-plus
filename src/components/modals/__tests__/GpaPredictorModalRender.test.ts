import { describe, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { GpaPredictorModal } from '../GpaPredictorModal';
import { REAL_STUDENT_DATA } from '../../../data/studentData';

// Mock useSession hook
vi.mock('../../../context/SessionContext', () => ({
  useSession: () => ({
    user: REAL_STUDENT_DATA,
    activeTab: 'marks',
    setActiveTab: () => {},
    isDarkMode: false,
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
    currentDayOrder: 4
  })
}));

describe('GpaPredictorModal with user loaded', () => {
  it('renders modal when user is loaded and isOpen is true', () => {
    try {
      const html = renderToString(
        React.createElement(GpaPredictorModal, {
          isOpen: true,
          onClose: () => {}
        })
      );
      console.log('Rendered modal successfully, length:', html.length);
    } catch (err) {
      console.error('ERROR rendering with user:', err);
      throw err;
    }
  });
});
