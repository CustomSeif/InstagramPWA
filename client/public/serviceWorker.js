// Triggers when a service worker started installing.
self.addEventListener("install", (installEvent) => {
    console.log("[Service Worker] Installing Service Worker...", installEvent)
    // This waits until every thing is done including the promises before
    // the "fetch" event listener gets fired.
    // installEvent.waitUntil(
    //     // This opens up a new new cache called "static", if the cache
    //     // already exists, the cache will get updated.
    //     caches
    //     .open("static")
    //     .then(cache => {
    //         console.log("[Service Worker] Caching the app shell...")
    //         // This caches all the requests inside the array provided
    //         // in it's parameter.
    //         cache.addAll([
    //             ".",
    //             "/index.html",
    //             "https://fonts.googleapis.com/css?family=Roboto"
    //         ])
    //     })
    // )
})

// Triggers when a service worker starts activating.
self.addEventListener("activate", (activateEvent) => {
    console.log("[Service Worker] Activating Service Worker...", activateEvent)
    return self.clients.claim()
})

// Triggers whenever something is being fetched, AJAX requests not included.
self.addEventListener("fetch", (fetchEvent) => {
    // This let's us control what to respond with to a certain request.
    // fetchEvent.respondWith(
    //     // Checks if the request exists within the cache.
    //     caches.match(fetchEvent.request).then(result => {
    //         // If there is no match in the cache.
    //         // Fetch the response and store it in a "dynamic" cache then return it.
    //         if (!result) return (
    //             fetch(fetchEvent.request).then(response => {
    //                 return (
    //                     caches.open("dynamic").then(cache => {
    //                         cache.put(fetchEvent.request.url, response.clone())
    //                         return response
    //                     })
    //                 )
    //             })
    //         )
    //         // If there is a match in the cache return it for respondWith() to use.
    //         return result
    //     })
    // )
})