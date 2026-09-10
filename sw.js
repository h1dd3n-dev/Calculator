const CACHE_NAME = 'bima-calc-v24';

// শুধুমাত্র নিশ্চিত ফাইলগুলো ক্যাশে রাখা হলো
const CORE_ASSETS = [
    './index.html',
    './calc.js',
    './app.js',
    './plan-details.js',
    './sidebar.js',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CORE_ASSETS);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    // API কল ক্যাশ বাইপাস করবে
    if (event.request.url.includes('script.google.com') || event.request.url.includes('ipapi.co')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // অফলাইনে যেকোনো নেভিগেশন পেজ রিকোয়েস্টে ক্যাশ করা index.html দেবে
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
        })
    );
});
