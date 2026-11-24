// Pick My Music — service worker: szybkie otwieranie i instalacja jako aplikacja.
// Strona (index.html): najpierw sieć, żeby zawsze była najnowsza wersja; bez sieci — kopia z pamięci.
// Grafiki: od razu z pamięci, w tle odświeżane. Fragmenty muzyki (iTunes/Deezer) nie są tu w ogóle obsługiwane.
const CACHE = 'pmm-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'grafiki/logo.jpg', 'grafiki/baner.jpg', 'grafiki/tlo.jpg',
  'grafiki/zwyciezca.jpg', 'grafiki/ikona-192.png', 'grafiki/ikona-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    // Jedna kopia strony pod stałym kluczem — adresy z różnymi parametrami (?v=, ?fbclid=) nie mnożą wpisów.
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); }
      return res;
    }).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
