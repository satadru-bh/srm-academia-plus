import { describe, it, expect } from 'vitest';
import { resolveProxyTarget } from '../proxyResolver';

describe('Proxy Route Resolver', () => {
  it('resolves PYQ course listing endpoint', () => {
    const res = resolveProxyTarget('/api/pyq/v1/courses', '?limit=10');
    expect(res.isPyq).toBe(true);
    expect(res.targetUrl).toBe('https://srm-pyq-api.onrender.com/v1/courses?limit=10');
  });

  it('resolves PYQ course papers with URL encoded course code', () => {
    const res = resolveProxyTarget('/api/pyq/v1/courses/%2C20PCSE85J/papers', '?limit=5');
    expect(res.isPyq).toBe(true);
    expect(res.targetUrl).toBe('https://srm-pyq-api.onrender.com/v1/courses/%2C20PCSE85J/papers?limit=5');
  });

  it('resolves PYQ file download endpoint', () => {
    const res = resolveProxyTarget('/api/pyq/v1/files/abc-123/download', '?ttl_seconds=900');
    expect(res.isPyq).toBe(true);
    expect(res.targetUrl).toBe('https://srm-pyq-api.onrender.com/v1/files/abc-123/download?ttl_seconds=900');
  });

  it('retains standard CampusWeb API routing for student endpoints', () => {
    const res = resolveProxyTarget('/api/v1/student/attendance', '');
    expect(res.isPyq).toBe(false);
    expect(res.targetUrl).toBe('https://api.campusweb.in/api/v1/student/attendance');
  });

  it('retains standard CampusWeb API routing for auth endpoints', () => {
    const res = resolveProxyTarget('/api/v1/auth/login', '');
    expect(res.isPyq).toBe(false);
    expect(res.targetUrl).toBe('https://api.campusweb.in/api/v1/auth/login');
  });
});
