import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CacheEngine } from '../cache';

describe('CacheEngine (Stale-While-Revalidate)', () => {
  let cache: CacheEngine;

  beforeEach(() => {
    cache = new CacheEngine('test_academia_');
    cache.clear();
  });

  it('stores and retrieves fresh cached items', () => {
    const data = { user: 'Satadru', regNo: 'RA2511033010043' };
    cache.set('profile', data, 60000); // 1 min TTL

    const result = cache.get<typeof data>('profile');
    expect(result.data).toEqual(data);
    expect(result.isStale).toBe(false);
    expect(result.lastFetched).toBeTypeOf('number');
  });

  it('marks data as stale after TTL expires but still returns cached data', () => {
    const data = { attendance: [{ course: 'CS101', percent: 90 }] };
    const now = Date.now();
    vi.spyOn(Date, 'now').mockReturnValue(now);

    cache.set('attendance', data, 5000); // 5 sec TTL

    // Advance time past TTL
    vi.spyOn(Date, 'now').mockReturnValue(now + 6000);

    const result = cache.get<typeof data>('attendance');
    expect(result.data).toEqual(data); // Stale-while-revalidate: returns stale data immediately
    expect(result.isStale).toBe(true);

    vi.restoreAllMocks();
  });

  it('returns null data and isStale true for missing keys', () => {
    const result = cache.get('nonexistent');
    expect(result.data).toBeNull();
    expect(result.isStale).toBe(true);
    expect(result.lastFetched).toBeNull();
  });

  it('clears specific keys and full namespace', () => {
    cache.set('key1', 'val1');
    cache.set('key2', 'val2');

    cache.clear('key1');
    expect(cache.get('key1').data).toBeNull();
    expect(cache.get('key2').data).toBe('val2');

    cache.clear();
    expect(cache.get('key2').data).toBeNull();
  });
});
