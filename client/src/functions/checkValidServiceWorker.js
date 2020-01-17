import registerValidServiceWorker from "./registerValidServiceWorker"

const checkValidServiceWorker = (swUrl, config) => {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, { headers: { "Service-Worker": "script" } })
        .then(response => {
            // Ensure service worker exists, and that we really are getting a JS file.
            const contentType = response
                .headers
                .get("content-type")

            const serviceWorkerDoesNotExist = Boolean(
                response.status === 404 ||
                (contentType != null && contentType.indexOf("javascript") === -1)
            )

            if (serviceWorkerDoesNotExist) {
                // Reload the page.
                navigator
                    .serviceWorker
                    .ready
                    .then(registration => {
                        registration
                            .unregister()
                            .then(() => window.location.reload())
                    })
            }
            else {
                // Register service worker.
                registerValidServiceWorker(swUrl, config)
            }
        })
        .catch(() => console.log("No internet connection found. App is running in offline mode."))
}

export default checkValidServiceWorker