const registerValidServiceWorker = (swUrl, config) => {
    navigator
        .serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing

                if (installingWorker === null) return

                installingWorker.onstatechange = () => {
                    if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
                        console.log("New content is available and will be used when all tabs for this page are closed.")

                        if (config && config.onUpdate) config.onUpdate(registration)
                    }
                    else {
                        console.log("Content is cached for offline use.")

                        if (config && config.onSuccess) config.onSuccess(registration)
                    }
                }
            }
        })
        .catch(error => `Error during service worker registration: ${error}`)
}

export default registerValidServiceWorker