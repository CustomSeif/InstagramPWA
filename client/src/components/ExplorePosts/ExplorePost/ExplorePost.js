import React, { useState } from "react"
import "./ExplorePost.css"

const ExplorePost = ({ imageMediumURL, lazyURL }) => {
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className="ExplorePost">
            <div className="ExplorePost__placeholder">
            </div>

            <div className={`ExplorePost__lazy ${lazyImageLoaded}`}>
                <img src={lazyURL} alt="Random Lazy" onLoad={() => setLazyImageLoaded(true)} />
            </div>

            <div className={`ExplorePost__full ${imageLoaded}`}>
                <img src={imageMediumURL} alt="Random" onLoad={() => setImageLoaded(true)} />
            </div>
        </div>
    )
}

export default ExplorePost