# Instagram Progressive Web App

## Summary
InstagramPWA is a React.js application that aims to mimic the user interface and features of Instagram’s android mobile application. The website is installable as a Progressive Web App using service workers, and features lazy loading images and a live camera.

## Installability
Progressive web apps aim to make web apps seem more like native apps. InstagramPWA is installable thanks to service workers.

![Instagram Progessive Web App](/client/public/assets/Instagram-pwa.gif)

## Lazy Loading
Instagram loads low resolution images and blurs them until the full image is downloaded. There are three main components to achieving this effect:
### The Placeholder
Before the low resolution image is loaded a space has to be reserved for the image to sit in to avoid document reflows. The width will statically be set to 100% but the height can't be statically set because of the different aspect ratios of the images that are about to be loaded. So to resolve this we store the aspect ratio along with the images url in the database. We can then use the CSS padding hack which is the only way we can set height relative to width because padding is calculated with the width of the box.
### The Lazy Image
The lazy image is a 25px resized image from the original. Generated using the sharp node module. Without a blur filter it wouldn't look as nice. I tried using progressively loading JPEGs but the effect didn't look as good.
### The Full Image
The full image waits for the lazy image to finish loading and for the user to scroll it into view to start loading. Detecting if the image has been scrolled into view is done with Intersection Observer.

![InstagramPWA Lazy Loading](/client/public/assets/Instagram-lazy-loading.gif)

## Live Camera
When the camera icon is clicked a live camera will open after the browser asks for permission to use your camera. The live camera is a canvas to which a bitmap of every video frame recieved from the camera is drawn.

![InstagramPWA Live Camera](/client/public/assets/Instagram-live-camera.gif)