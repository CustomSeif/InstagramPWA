import React, { useRef, useState } from "react"
import "./AccountGalleryGridImage.css"
import useIntersectionObserver from "../../../../../hooks/useIntersectionObserver"

const AccountGalleryGridImage = ({ imageMediumURL, lazyURL }) => {
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const ref = useRef()

    const [intersected] = useIntersectionObserver(ref)

    return (
        <div className="Account__gallery__grid__image" ref={ref}>
            <div className={`Account__gallery__grid__image__lazy ${lazyImageLoaded}`}>
                <img src={lazyURL} alt="Random Lazy" onLoad={() => setLazyImageLoaded(true)} />
            </div>

            {
                intersected && lazyImageLoaded ?
                (
                    <div className={`Account__gallery__grid__image__full ${imageLoaded}`}>
                        <img src={imageMediumURL} alt="Random" onLoad={() => setImageLoaded(true)} />
                    </div>
                ) :
                null
            }
        </div>
    )
}

export default AccountGalleryGridImage