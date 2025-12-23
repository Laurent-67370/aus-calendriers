const CACHE_NAME = 'aus-calendriers-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

// Installation du service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Stratégie de cache : Network First, puis Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone la réponse pour la mettre en cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            if (event.request.method === 'GET') {
              cache.put(event.request, responseClone);
            }
          });
        return response;
      })
      .catch(() => {
        // Si pas de réseau, on utilise le cache
        return caches.match(event.request);
      })
  );
});
