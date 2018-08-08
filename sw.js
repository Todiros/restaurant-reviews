const cacheName = 'cache_v1';
const assets = [
  'index.html',
  'restaurant.html',
  '/css/styles.css',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/mapResizer.js',
  '/js/restaurant_info.js'
];

// Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
  
  e.waitUntil(  
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(assets);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  
  // Deleting old caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Deleting Old Cache...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event

self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching...');
  
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})