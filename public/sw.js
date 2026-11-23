// Minimal offline service worker for Academia Plus PWA
const CACHE_NAME = 'academia-plus-v20261123c';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json?v=20261123c',
  '/favicon.svg?v=20261123c',
  '/favicon.ico?v=20261123c',
  '/icon-192.png?v=20261123c',
  '/icon-512.png?v=20261123c',
  '/icon-maskable-512.png?v=20261123c',
  '/logo.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests, skip /api/ proxy endpoints
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  // Always fetch icons, favicons, and manifest from network first to avoid stale icons
  if (event.request.url.match(/(favicon|icon-|manifest|logo\.png)/)) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Cache successful responses for assets
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (event.request.url.match(/\.(js|css|png|jpg|svg|woff2)$/) ||
           event.request.url === self.location.origin + '/')
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});
