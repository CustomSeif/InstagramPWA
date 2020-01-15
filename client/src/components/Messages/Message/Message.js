import React, { useRef, useState } from "react"
import "./Message.css"
import { Link } from "react-router-dom"
import useIntersectionObserver from "../../../hooks/useIntersectionObserver"

const Message = ({ name, imageURL, lazyURL }) => {
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const ref = useRef()

    const [intersected] = useIntersectionObserver(ref)

    return (
        <div className="Message" ref={ref}>
            <div className="Message__image">
                <div className={`Message__image__lazy ${lazyImageLoaded}`}>
                    <img src={lazyURL} alt="" onLoad={() => setLazyImageLoaded(true)} />
                </div>

                {
                    intersected && lazyImageLoaded ?
                    (
                        <div className={`Message__image__full ${imageLoaded}`}>
                            <img src={imageURL} alt="Random" onLoad={() => setImageLoaded(true)} />
                        </div>
                    ) :
                    null
                }
            </div>

            <div className="Message__sender-preview">
                <h3>{name}</h3>

                <div></div>
            </div>
            
            <Link className="Message__camera" to="/camera">
                <img src="assets/camera.png" alt="camera icon" />
            </Link>
        </div>
    )
}

export default Message