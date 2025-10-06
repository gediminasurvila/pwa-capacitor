self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("cap-pwa-v1")
      .then((cache) => cache.addAll(["/", "/index.html", "/src/js/app.js"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
