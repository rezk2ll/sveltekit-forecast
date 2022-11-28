/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	(event as ExtendableEvent).waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	(event as ExtendableEvent).waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	if ((event as FetchEvent).request.method !== 'GET') return;

	async function respond(): Promise<Response | undefined> {
		const url = new URL((event as FetchEvent).request.url);
		const cache = await caches.open(CACHE);

		if (ASSETS.includes(url.pathname)) {
			return cache.match((event as FetchEvent).request);
		}

		try {
			const response = await fetch((event as FetchEvent).request);

			if (response.status === 200) {
				cache.put(url, response.clone());
			}

			return response;
		} catch {
			return cache.match((event as FetchEvent).request);
		}
	}

	(event as FetchEvent).respondWith(respond() as unknown as Response);
});
