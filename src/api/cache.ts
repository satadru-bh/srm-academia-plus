export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export interface CacheResult<T> {
  data: T | null;
  isStale: boolean;
  lastFetched: number | null;
}

export class CacheEngine {
  private prefix: string;
  private memoryFallback: Map<string, string>;

  constructor(prefix = 'srm_academia_') {
    this.prefix = prefix;
    this.memoryFallback = new Map();
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
    } catch {
      return false;
    }
  }

  private readRaw(key: string): string | null {
    const fullKey = this.getKey(key);
    if (this.isLocalStorageAvailable()) {
      try {
        return window.localStorage.getItem(fullKey);
      } catch {
        return this.memoryFallback.get(fullKey) || null;
      }
    }
    return this.memoryFallback.get(fullKey) || null;
  }

  private writeRaw(key: string, value: string): void {
    const fullKey = this.getKey(key);
    if (this.isLocalStorageAvailable()) {
      try {
        window.localStorage.setItem(fullKey, value);
        return;
      } catch {
        // Fallback to memory
      }
    }
    this.memoryFallback.set(fullKey, value);
  }

  private deleteRaw(key: string): void {
    const fullKey = this.getKey(key);
    if (this.isLocalStorageAvailable()) {
      try {
        window.localStorage.removeItem(fullKey);
      } catch {
        // Fallback to memory
      }
    }
    this.memoryFallback.delete(fullKey);
  }

  /**
   * Stale-while-revalidate retrieval:
   * Returns cached data immediately even if stale, flagging `isStale: true`.
   */
  get<T>(key: string): CacheResult<T> {
    const raw = this.readRaw(key);
    if (!raw) {
      return { data: null, isStale: true, lastFetched: null };
    }

    try {
      const entry = JSON.parse(raw) as CacheEntry<T>;
      const age = Date.now() - entry.timestamp;
      const isStale = age > entry.ttl;

      return {
        data: entry.data,
        isStale,
        lastFetched: entry.timestamp
      };
    } catch {
      return { data: null, isStale: true, lastFetched: null };
    }
  }

  /**
   * Set cache entry with TTL (default 30 minutes)
   */
  set<T>(key: string, data: T, ttlMs = 30 * 60 * 1000): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttlMs
    };
    try {
      this.writeRaw(key, JSON.stringify(entry));
    } catch {
      // Ignore cache write errors
    }
  }

  /**
   * Clear a specific key or all entries under this prefix
   */
  clear(key?: string): void {
    if (key) {
      this.deleteRaw(key);
      return;
    }

    if (this.isLocalStorageAvailable()) {
      try {
        const keysToRemove: string[] = [];
        for (let i = 0; i < window.localStorage.length; i++) {
          const k = window.localStorage.key(i);
          if (k && k.startsWith(this.prefix)) {
            keysToRemove.push(k);
          }
        }
        for (const k of keysToRemove) {
          window.localStorage.removeItem(k);
        }
      } catch {
        // Ignore
      }
    }

    for (const k of Array.from(this.memoryFallback.keys())) {
      if (k.startsWith(this.prefix)) {
        this.memoryFallback.delete(k);
      }
    }
  }
}

export const defaultCache = new CacheEngine('srm_academia_');
