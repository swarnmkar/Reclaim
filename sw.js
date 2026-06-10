/* Reclaim — Service Worker v2
   Network-first: always fetches latest code when online,
   falls back to cache when offline */
const CACHE_VERSION = 'reclaim-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_VERSION; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

/* Network-first: get latest code when online, use cache when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request)
      .then(function(response) {
        /* Update cache with fresh response */
        var clone = response.clone();
        caches.open(CACHE_VERSION).then(function(cache) {
          cache.put(e.request, clone);
        });
        return response;
      })
      .catch(function() {
        /* Offline fallback */
        return caches.match(e.request)
          .then(function(cached) { return cached || caches.match('./index.html'); });
      })
  );
});
