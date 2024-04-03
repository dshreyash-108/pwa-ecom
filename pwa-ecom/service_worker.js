// Cache name for storing static assets
const staticCacheName = 'your-app-static-v1';

// Cache pre-caching strategy - Caching core files on installation
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(function(cache) {
        return cache.addAll([
          '/', // Index page
          '/index.html',
          // Add other static assets like CSS, JS, images here
        ]);
      })
  );
});

// Cache falling back strategy - Serving cached content during network failures
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
