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
