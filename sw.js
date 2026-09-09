const CACHE_NAME = 'dsk-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './payment/index.html',
  './payment/style.css',
  './payment/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Faz o cache de cada arquivo individualmente para não travar se 1 falhar
      return Promise.allSettled(
        urlsToCache.map(url => cache.add(url).catch(err => console.warn('Erro no cache:', url, err)))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
