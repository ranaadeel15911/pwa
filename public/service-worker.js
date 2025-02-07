// This is the service worker file

self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker...');
    event.waitUntil(
      caches.open('pwa-cache-v1').then(cache => {
        console.log('[Service Worker] Pre-caching offline page');
        return cache.addAll([
          '/',
          '/index.html',
          '/icons/logo192.png',
          '/icons/logo512.png'
        ]);
      })
    );
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker...');
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('fetch', event => {
    console.log('[Service Worker] Fetching:', event.request.url);
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  });
  