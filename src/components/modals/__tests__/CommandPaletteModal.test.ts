import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { CommandPaletteModal } from '../CommandPaletteModal';
import { Keycap } from '../../common/Keycap';
import { SessionProvider } from '../../../context/SessionContext';

describe('Keycap and CommandPaletteModal', () => {
  it('renders realistic tactile keycap with proper styling and glyph', () => {
    const html = renderToString(
      React.createElement(Keycap, { size: 'sm' }, '⌘')
    );
    expect(html).toContain('kbd');
    expect(html).toContain('⌘');
    expect(html).toContain('font-mono');
    expect(html).toContain('border-b');
  });

  it('renders command palette with input, keycaps, actions including sign out and navigation hints when open', () => {
    // Populate a recent action in localStorage to verify "recent actions" rendering
    const recentActionId = 'theme_blue_ice';
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('srm_recent_command_ids', JSON.stringify([recentActionId]));
    }

    const html = renderToString(
      React.createElement(
        SessionProvider,
        null,
        React.createElement(CommandPaletteModal, {
          isOpen: true,
          onClose: () => {}
        })
      )
    );

    expect(html).toContain('search subjects');
    expect(html).toContain('esc');
    expect(html).toContain('faculty finder');
    expect(html).not.toContain('campusweb');
    // Ensure "recent actions" header has NO clock icon (Clock icon was removed)
    expect(html).not.toContain('lucide-clock');
    // Ensure selected item contrast helper is present
    expect(html).toContain('palette-icon-box');
  });

  it('renders null when isOpen is false', () => {
    const html = renderToString(
      React.createElement(
        SessionProvider,
        null,
        React.createElement(CommandPaletteModal, {
          isOpen: false,
          onClose: () => {}
        })
      )
    );

    expect(html).not.toContain('search subjects');
  });
});
