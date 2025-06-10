const CACHE_VERSION = "1";
const CACHE_NAME = `offline-cache-v${CACHE_VERSION}`;
const resourceUrls = ["index.html"];

async function cacheResources(resources) {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(resources);
    console.log("[SERVICE WORKER] Caching successful");
  } catch (error) {
    console.error(`[SERVICE WORKER] Caching failed: ${error}`);
  }
}

async function clearOldCache() {
  try {
    const keyList = await caches.keys();
    await Promise.all(
      keyList
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    );
  } catch (error) {
    console.error(`[SERVICE WORKER] Failed to clear old caches: ${error}`);
  }
}

async function fetchResources(request) {
  try {
    const response = await fetch(request);
    return response;
  } catch (error) {
    return new Response(
      `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Welcom to Lyon - Offline</title>

          <style>
            .mt-4{
              margin-top: 1rem;
            }
            .flex-center{
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .text-center {
              text-align: center;
            }
            .not-italic {
              font-style: normal;
            }
          </style>
        </head>
        <body>
          <main>
            <header class="text-center">
              <h1>Offline mode</h1>
            </header>
            <section>
              <h2 class="text-center">Essential Infomation</h2>
              <address class="text-center not-italic">
                <b>Contact</b>: 04 72 10 30 30
                <br />
                <b>Address</b>: Mairie de Lyon, 69205 Lyon cedex 01
              </address>
              <div class="flex-center mt-4">
                <button onclick="location.reload()">Try again</button>
              </div>
            </section>
          </main>
        </body>
      </html>
    `,
      { headers: { "Content-Type": "text/html" } }
    );
  }
}

self.addEventListener("install", (event) => {
  console.log("[SERVICE WORKER] Installing new one");
  event.waitUntil(cacheResources(resourceUrls));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SERVICE WORKER] Activating");
  event.waitUntil(clearOldCache());
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(fetchResources(event.request));
});
