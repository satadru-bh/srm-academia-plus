import { describe, it, expect, vi } from 'vitest';
import { renderToString } from 'react-dom/server';
import { NotesBentoView } from '../NotesBentoView';
import { SessionProvider } from '../../../context/SessionContext';

// Mock Lucide icons for deterministic server-side rendering
vi.mock('lucide-react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('lucide-react')>();
  return {
    ...actual,
  };
});

describe('NotesBentoView', () => {
  it('renders notes & past papers hero, search bar, and category tabs', () => {
    const html = renderToString(
      <SessionProvider>
        <NotesBentoView />
      </SessionProvider>
    );

    expect(html).toContain('notes &amp; past papers');
    expect(html).toContain('live srm pyq repository');
    expect(html).toContain('all resources');
    expect(html).toContain('notes &amp; ppts');
    expect(html).toContain('past papers');
    expect(html).toContain('all sem');
    expect(html).toContain('all university subjects');
  });
});
