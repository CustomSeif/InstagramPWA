import checkValidServiceWorker from "./functions/checkValidServiceWorker"
import registerValidServiceWorker from "./functions/registerValidServiceWorker"

export const register = config => {
    const doesNotSupportServiceWorkers = Boolean(!("serviceWorker" in navigator))

    if (doesNotSupportServiceWorkers) return

    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href)
    if (publicUrl.origin !== window.location.origin) return

    window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`

        const isLocalHost = Boolean(
            window.location.hostname === "localhost" ||
            window.location.hostname === "[::1]" ||
            window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        )

        if (isLocalHost) {
            // Check if a service worker still exists or not.
            checkValidServiceWorker(swUrl, config)

            // Some additional logging to localhost.
            navigator
                .serviceWorker
                .ready
                .then(() => console.log("This web app is being served cache-first by a service worker."))
        }
        else {
            // Register service worker.
            registerValidServiceWorker(swUrl, config)
        }
    })
}

export const unregister = () => {
    const doesNotSupportServiceWorkers = Boolean(!("serviceWorker" in navigator))

    if (doesNotSupportServiceWorkers) return

    navigator
        .serviceWorker
        .ready
        .then(registration => registration.unregister())
}