const cacheName = "stadsopdracht-v64";
const filesToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.webmanifest",
  "./assets/favicon.png",
  "./assets/apple-touch-icon.png",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png",
  "./assets/hero-travel.jpg",
  "./assets/cities/malaga.jpg",
  "./assets/cities/dusseldorf.jpg",
  "./assets/cities/cologne.jpg",
  "./assets/cities/frankfurt.jpg",
  "./assets/cities/london.jpg",
  "./assets/cities/copenhagen.jpg",
  "./assets/cities/innsbruck.jpg",
  "./assets/cities/vienna.jpg",
  "./assets/cities/madrid.jpg",
  "./assets/cities/valencia.jpg",
  "./assets/cities/palma.jpg",
  "./assets/cities/paris.jpg",
  "./assets/cities/rome.jpg",
  "./assets/cities/amsterdam.jpg",
  "./assets/cities/berlin.jpg",
  "./assets/cities/lisbon.jpg",
  "./assets/cities/budapest.jpg",
  "./assets/cities/venice.jpg",
  "./assets/cities/barcelona.jpg",
  "./assets/cities/prague.jpg",
  "./assets/cities/munich.jpg",
  "./assets/cities/milan.jpg",
  "./assets/cities/athens.jpg",
  "./assets/cities/edinburgh.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(filesToCache)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match("./index.html")));
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
