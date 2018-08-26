//attempt#1
self.addEventListener('install', function(event) {
   event.waitUntil(
    // TODO: open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
    caches.open('main').then(function(cache) {
      return cache.addAll(
        [
          '/',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/js/dbhelper.js',
          '/css/styles.css',
          '/css/restaurants.css',
       '/index.html',
       '/restaurant.html',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg',
       '/data/restaurants.json'
      ]
      );
      })
    );
});

self.addEventListener('fetch', function(event) {
  // Leave this blank for now.
  // We'll get to this in the next task.
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) return response;
      return fetch(event.request);
      })
    );
});