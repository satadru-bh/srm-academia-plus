import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { PdfViewerModal } from '../PdfViewerModal';

describe('PdfViewerModal', () => {
  it('renders modal with embedded Google Drive preview URL when open', () => {
    const html = renderToString(
      React.createElement(PdfViewerModal, {
        isOpen: true,
        onClose: () => {},
        title: 'Unit 1 Lecture Notes',
        subjectName: 'Transforms and Boundary Value Problems',
        resourceKind: 'note',
        url: 'https://drive.google.com/file/d/1yB4vRF4qjKsyvb24tzt0lYYvA96CEUqC/preview'
      })
    );

    expect(html).toContain('Unit 1 Lecture Notes');
    expect(html).toContain('Transforms and Boundary Value Problems');
    expect(html).toContain('drive.google.com/file/d/1yB4vRF4qjKsyvb24tzt0lYYvA96CEUqC/preview');
    // Ensure top uppercase eyebrow text and icon are removed
    expect(html).not.toContain('Official Syllabus');
    expect(html).not.toContain('Past Question Paper');
    expect(html).not.toContain('Lecture Resource');
    expect(html).not.toContain('uppercase tracking-wider');
  });

  it('renders null when isOpen is false', () => {
    const html = renderToString(
      React.createElement(PdfViewerModal, {
        isOpen: false,
        onClose: () => {},
        title: 'Unit 1',
        url: 'https://drive.google.com/file/d/1yB4vRF4qjKsyvb24tzt0lYYvA96CEUqC/preview'
      })
    );

    expect(html).toBe('');
  });
});
