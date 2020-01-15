import React, { useRef, useState } from "react"
import "./Story.css"
import useIntersectionObserver from "../../../hooks/useIntersectionObserver"

const Story = ({ aspectRatio, imageURL, lazyURL, name }) => {
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const ref = useRef()

    const [intersected] = useIntersectionObserver(ref)

    return  (
        <div className="Story" ref={ref}>
            <div className="Story__profile-image">
                <div className="Story__profile-image__img">
                    <div className="Story__profile-image__img__placeholder"
                        style={{ paddingBottom: `${aspectRatio}%` }}>
                    </div>

                    <div className={`Story__profile-image__img__lazy ${lazyImageLoaded}`}>
                        <img src={lazyURL} alt="" onLoad={() => setLazyImageLoaded(true)} />
                    </div>

                    {
                        intersected && lazyImageLoaded ?
                        (
                            <div className={`Story__profile-image__img__full ${imageLoaded}`}>
                                <img src={imageURL} alt="Random" onLoad={() => setImageLoaded(true)} />
                            </div>
                        ) :
                        null
                    }
                </div>

                <svg className="Story__profile-image__border" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f12711" />
                            <stop offset="70%" stopColor="#f7b733" />
                            <stop offset="100%" stopColor="#E94057" />
                        </linearGradient>
                    </defs>

                    <circle cx="12" cy="12" r="11" stroke="url(#gradient)"></circle>
                </svg>
            </div>

            <h6 className="Story__name">
                {`${name.slice(0, 9).trim()}...`}
            </h6>
        </div>
    )
}

export default Story