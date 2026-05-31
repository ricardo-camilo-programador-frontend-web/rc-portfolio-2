const CACHE_NAME = 'camilo-v6'
const CACHE_VERSION = 'v6.0.0'

// Core shell — always precached on install
const STATIC_ASSETS = ['/', '/index.html', '/manifest.json', '/favicon.svg']

// Hashed assets injected at build time by scripts/generate-sw-manifest.js
// Pattern from SGS_WEB staleWhileRevalidate strategy
const PRECACHE_ASSETS = typeof __BUILD_MANIFEST__ !== 'undefined'
  ? __BUILD_MANIFEST__
  : []

const IMAGE_CACHE_NAME = `camilo-images-${CACHE_VERSION}`
const FONT_CACHE_NAME = `camilo-fonts-${CACHE_VERSION}`
const API_CACHE_NAME = `camilo-api-${CACHE_VERSION}`

const CACHE_EXPIRATION = {
  images: 365 * 24 * 60 * 60 * 1000,
  fonts: 365 * 24 * 60 * 60 * 1000,
  api: 5 * 60 * 1000,
  static: 30 * 24 * 60 * 60 * 1000,
}

const URL_PATTERNS = {
  images: /\.(png|jpe?g|gif|webp|avif|svg|ico)$/i,
  fonts: /\.(woff2?|ttf|otf|eot)$/i,
  api: /\/api\//i,
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('SW: Pre-caching core assets')
      const allAssets = [...STATIC_ASSETS, ...PRECACHE_ASSETS]
      // Use allSettled so one failed asset doesn't block entire SW installation
      return Promise.allSettled(allAssets.map(url => cache.add(url)))
        .then(results => {
          const failed = results.filter(r => r.status === 'rejected')
          if (failed.length > 0) {
            console.warn(`SW: ${failed.length}/${allAssets.length} assets failed to precache`)
          }
        })
    }),
  )
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (
              cacheName !== CACHE_NAME
              && cacheName !== IMAGE_CACHE_NAME
              && cacheName !== FONT_CACHE_NAME
              && cacheName !== API_CACHE_NAME
            ) {
              console.log('SW: Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
            return Promise.resolve(false)
          }),
        )
      })
      .then(() => {
        return self.clients.claim()
      }),
  )
})

async function cacheFirst(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    const headers = new Headers(cachedResponse.headers)
    const cachedDate = headers.get('sw-cache-date')
    if (cachedDate) {
      const isExpired = Date.now() - parseInt(cachedDate, 10) > maxAge
      if (!isExpired) {
        return cachedResponse
      }
    }
  }

  try {
    const networkResponse = await fetch(request)
    if (networkResponse && networkResponse.status === 200) {
      const responseToCache = networkResponse.clone()
      const headers = new Headers(responseToCache.headers)
      headers.set('sw-cache-date', Date.now().toString())
      const newResponse = new Response(responseToCache.body, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers,
      })
      await cache.put(request, newResponse)
    }
    return networkResponse
  } catch (error) {
    console.log('SW: Network failed, using cached response')
    return (
      cachedResponse
      || new Response('Offline', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'text/plain' },
      })
    )
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)

  const fetchPromise = fetch(request)
    .then(networkResponse => {
      if (networkResponse && networkResponse.status === 200) {
        const responseToCache = networkResponse.clone()
        const headers = new Headers(responseToCache.headers)
        headers.set('sw-cache-date', Date.now().toString())
        const newResponse = new Response(responseToCache.body, {
          status: responseToCache.status,
          statusText: responseToCache.statusText,
          headers: headers,
        })
        cache.put(request, newResponse)
      }
      return networkResponse
    })
    .catch(() => {
      console.log('SW: Network failed for stale-while-revalidate')
      return null
    })

  return (
    cachedResponse
    || fetchPromise
    || new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' },
    })
  )
}

async function networkFirst(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName)

  try {
    const networkResponse = await fetch(request)
    if (networkResponse && networkResponse.status === 200) {
      const responseToCache = networkResponse.clone()
      const headers = new Headers(responseToCache.headers)
      headers.set('sw-cache-date', Date.now().toString())
      const newResponse = new Response(responseToCache.body, {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers,
      })
      await cache.put(request, newResponse)
    }
    return networkResponse
  } catch (error) {
    console.log('SW: Network failed, checking cache')
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      const headers = new Headers(cachedResponse.headers)
      const cachedDate = headers.get('sw-cache-date')
      if (cachedDate) {
        const isExpired = Date.now() - parseInt(cachedDate, 10) > maxAge
        if (!isExpired) {
          return cachedResponse
        }
      }
    }
    return (
      cachedResponse
      || new Response(JSON.stringify({ error: 'Offline' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      })
    )
  }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return
  }

  const url = new URL(event.request.url)
  const isSameOrigin = url.origin === self.location.origin

  if (URL_PATTERNS.images.test(url.pathname)) {
    event.respondWith(cacheFirst(event.request, IMAGE_CACHE_NAME, CACHE_EXPIRATION.images))
    return
  }

  if (URL_PATTERNS.fonts.test(url.pathname) || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(event.request, FONT_CACHE_NAME))
    return
  }

  // JS and CSS chunks — stale-while-revalidate for instant loads + background updates
  // Pattern from SGS_WEB staleWhileRevalidate strategy
  if (url.pathname.startsWith('/assets/') && (url.pathname.endsWith('.js') || url.pathname.endsWith('.css'))) {
    event.respondWith(staleWhileRevalidate(event.request, CACHE_NAME))
    return
  }

  if (URL_PATTERNS.api.test(url.pathname) || url.pathname.includes('/api/')) {
    event.respondWith(networkFirst(event.request, API_CACHE_NAME, CACHE_EXPIRATION.api))
    return
  }

  if (event.request.destination === 'document' || (isSameOrigin && url.pathname === '/')) {
    event.respondWith(
      networkFirst(event.request, CACHE_NAME, CACHE_EXPIRATION.static).catch(async () => {
        const cachedIndex = await caches.match('/index.html')
        return cachedIndex || new Response('Offline', { status: 503 })
      }),
    )
    return
  }

  event.respondWith(
    caches.match(event.request).then(async cachedResponse => {
      if (cachedResponse) {
        const headers = new Headers(cachedResponse.headers)
        const cachedDate = headers.get('sw-cache-date')
        if (cachedDate) {
          const isExpired = Date.now() - parseInt(cachedDate, 10) > CACHE_EXPIRATION.static
          if (!isExpired) {
            return cachedResponse
          }
        }
      }

      try {
        const networkResponse = await fetch(event.request)
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone()
          const headers = new Headers(responseToCache.headers)
          headers.set('sw-cache-date', Date.now().toString())
          const newResponse = new Response(responseToCache.body, {
            status: responseToCache.status,
            statusText: responseToCache.statusText,
            headers: headers,
          })
          const cache = await caches.open(CACHE_NAME)
          await cache.put(event.request, newResponse)
        }
        return networkResponse
      } catch (error) {
        console.log('SW: Fetch failed, checking cache')
        return (
          cachedResponse
          || new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain' },
          })
        )
      }
    }),
  )
})

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)))
      }),
    )
  }
})
