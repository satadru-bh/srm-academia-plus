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
    expect(html).toContain('open in drive');
  });

  it('renders direct PDF / Cloudflare R2 links directly without Google Drive iframe transform', () => {
    const r2Url = 'https://pub-5b7cf09755c0424dbdfa7d26c045042e.r2.dev/pyqs/v1/21CSC201J/test.pdf';
    const html = renderToString(
      React.createElement(PdfViewerModal, {
        isOpen: true,
        onClose: () => {},
        title: 'May-June 2025 Exam Paper',
        subjectName: 'Data Structures and Algorithms',
        resourceKind: 'paper',
        url: r2Url
      })
    );

    expect(html).toContain('May-June 2025 Exam Paper');
    expect(html).toContain('Data Structures and Algorithms');
    expect(html).toContain(r2Url);
    expect(html).toContain('open pdf');
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
