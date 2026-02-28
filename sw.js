const CACHE_NAME = 'camilo-v3';
const STATIC_ASSETS = ['/', '/index.html', '/manifest.json'];

const CACHE_EXPIRATION = 30 * 24 * 60 * 60 * 1000; // 30 days

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Pre-caching core assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;

  event.respondWith(
    caches.match(event.request).then(async (cachedResponse) => {
      if (cachedResponse) {
        const headers = new Headers(cachedResponse.headers);
        const cachedDate = new Date(headers.get('sw-cache-date') || Date.now()).getTime();
        const isExpired = Date.now() - cachedDate > CACHE_EXPIRATION;

        if (!isExpired) {
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const responseToCache = networkResponse.clone();
                const headers = new Headers(responseToCache.headers);
                headers.set('sw-cache-date', Date.now().toString());
                const newResponse = new Response(responseToCache.body, {
                  status: responseToCache.status,
                  statusText: responseToCache.statusText,
                  headers: headers,
                });
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, newResponse);
                });
              }
              return networkResponse;
            })
            .catch(() => {
              console.log('SW: Network failed, using cache');
            });

          return cachedResponse;
        }
      }

      try {
        const networkResponse = await fetch(event.request);
        
        if (!networkResponse || networkResponse.status !== 200) {
          return cachedResponse || networkResponse;
        }

        const responseToCache = networkResponse.clone();
        const headers = new Headers(responseToCache.headers);
        headers.set('sw-cache-date', Date.now().toString());
        const newResponse = new Response(responseToCache.body, {
          status: responseToCache.status,
          statusText: responseToCache.statusText,
          headers: headers,
        });

        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, newResponse);

        return networkResponse;
      } catch (error) {
        console.log('SW: Fetch failed, checking cache');
        
        if (event.request.destination === 'document') {
          const cachedIndex = await caches.match('/index.html');
          return cachedIndex || new Response('Offline', { status: 503 });
        }
        
        return cachedResponse;
      }
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
