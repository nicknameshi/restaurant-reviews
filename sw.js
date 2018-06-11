self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('restaurant-static-v1').then(function(cache) {
			return cache.addAll([
				'/',
				'js/main.js',
				'js/restaurant_info.js',
				'css/main.css',
				'imgs/1.jpg',
				'imgs/2.jpg',
				'imgs/3.jpg',
				'imgs/4.jpg',
				'imgs/5.jpg',
				'imgs/6.jpg',
				'imgs/7.jpg',
				'imgs/8.jpg',
				'imgs/9.jpg',
				'imgs/7.jpg',
				])
		}))
});

self.addEventListener('fetch', function(event) {
	event..respondWith(
		caches.match(event.request).then(function(response) {
			if(response) return response;
			return fetch(event.request);
		}))
})