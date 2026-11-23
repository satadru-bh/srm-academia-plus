import { describe, it, expect, afterEach } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { FacultyFinderBentoView } from '../FacultyFinderBentoView';
import { SessionProvider } from '../../../context/SessionContext';
import { FACULTY_DIRECTORY } from '../../../data/facultyDirectory';
import { defaultCache } from '../../../api/cache';
import { REAL_STUDENT_DATA } from '../../../data/studentData';

describe('FacultyFinderBentoView', () => {
  afterEach(() => {
    defaultCache.clear();
  });
  it('renders faculty finder header, search input and filter categories', () => {
    const html = renderToString(
      React.createElement(
        SessionProvider,
        null,
        React.createElement(FacultyFinderBentoView, null)
      )
    );

    const lower = html.toLowerCase();
    expect(lower).toContain('faculty finder');
    expect(lower).not.toContain('campusweb');
    expect(lower).toContain('search by professor name');
    expect(lower).toContain('my teachers &amp; advisors');
  });

  it('renders student course instructors and faculty advisors', () => {
    defaultCache.set('user_snapshot', REAL_STUDENT_DATA);
    const html = renderToString(
      React.createElement(
        SessionProvider,
        null,
        React.createElement(FacultyFinderBentoView, null)
      )
    );

    const lower = html.toLowerCase();
    // Dr. Thenmozhi S (Transforms & Boundary Value Problems teacher)
    expect(lower).toContain('dr. thenmozhi s');
    expect(lower).toContain('21mab201t');

    // Beena Godbin A (Student Advisor)
    expect(lower).toContain('beena godbin a');
    expect(lower).toContain('faculty advisor');
    expect(lower).toContain('beenagoa@srmist.edu.in');

    // Dr. Vidhya S & Dr. Vidhya B (Course Instructors)
    expect(lower).toContain('dr. vidhya s');
    expect(lower).toContain('dr. vidhya b');
  });

  it('strictly excludes false positive substring faculty such as Dr. Srividhya S and Dr. Srividhya B', () => {
    defaultCache.set('user_snapshot', REAL_STUDENT_DATA);
    const html = renderToString(
      React.createElement(
        SessionProvider,
        null,
        React.createElement(FacultyFinderBentoView, null)
      )
    );

    const lower = html.toLowerCase();
    // The "my faculty" hero stat badge and filter pill must reflect strictly 8
    expect(lower).toContain('>8</span><span class="text-[10px] text-[#71717a] dark:text-[#a1a1aa] lowercase">my faculty</span>');
    expect(lower).toContain('my teachers &amp; advisors (<!-- -->8<!-- -->)');
  });

  it('provides thousands of official faculty members from the university directory', () => {
    expect(FACULTY_DIRECTORY.length).toBeGreaterThanOrEqual(2000);
    FACULTY_DIRECTORY.forEach((faculty) => {
      expect(faculty.name).toBeTruthy();
      expect(faculty.designation).toBeTruthy();
    });
  });
});
