import React, { useRef, useState } from "react"
import "./ExplorePost.css"
import useIntersectionObserver from "../../../hooks/useIntersectionObserver"

const ExplorePost = ({ imageMediumURL, lazyURL }) => {
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const ref = useRef()

    const [intersected] = useIntersectionObserver(ref)

    return (
        <div className="ExplorePost" ref={ref}>
            <div className="ExplorePost__placeholder">
            </div>

            <div className={`ExplorePost__lazy ${lazyImageLoaded}`}>
                <img src={lazyURL} alt="Random Lazy" onLoad={() => setLazyImageLoaded(true)} />
            </div>

            {
                intersected && lazyImageLoaded ?
                (
                    <div className={`ExplorePost__full ${imageLoaded}`}>
                        <img src={imageMediumURL} alt="Random" onLoad={() => setImageLoaded(true)} />
                    </div>
                ) :
                null
            }
        </div>
    )
}

export default ExplorePost