const CACHE_NAME = 'bima-calc-v21'; // ভার্সন পরিবর্তন করুন
const CORE_ASSETS = [
    './',
    './index.html',
    './calc.js',
    './app.js',
    './plan-details.js',
    './sidebar.js',
    './manifest.json',
    './icon.png'
];

// ১. ইন্সটল ইভেন্ট
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CORE_ASSETS).catch((err) => {
                console.warn('ক্যাশিং সমস্যা:', err);
            });
        })
    );
});

// ২. অ্যাক্টিভেট ইভেন্ট
self.addEventListener('activate', (e) => {
    e.waitUntil(
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

// ৩. ফেচ ইভেন্ট (অফলাইন ক্যাশ ফার্স্ট লজিক)
self.addEventListener('fetch', (e) => {
    // গুগল অ্যাপস স্ক্রিপ্ট সরাসরি নেটওয়ার্কে যাবে
    if (e.request.url.includes('script.google.com') || e.request.url.includes('ipapi.co')) {
        return;
    }

    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(e.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && e.request.method === 'GET') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // অফলাইনে পেজ রিফ্রেশ দিলে ক্যাশ করা index.html রিটার্ন করবে
                if (e.request.mode === 'navigate') {
                    return caches.match('./index.html') || caches.match('./');
                }
            });
        })
    );
});
