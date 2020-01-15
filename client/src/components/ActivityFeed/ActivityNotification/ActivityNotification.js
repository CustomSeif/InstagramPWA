import React, { useRef, useState } from "react"
import "./ActivityNotification.css"
import useIntersectionObserver from "../../../hooks/useIntersectionObserver"

const Activity = ({ imageURL, lazyURL, name, type }) => {
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const ref = useRef()

    const [intersected] = useIntersectionObserver(ref)

    if (type === "follow") {
        return (
            <div className="ActivityNotification" ref={ref}>
                <div className="ActivityNotification__image">
                    <div className={`ActivityNotification__image__lazy ${lazyImageLoaded}`}>
                        <img src={lazyURL} alt="" onLoad={() => setLazyImageLoaded(true)} />
                    </div>

                    {
                        intersected && lazyImageLoaded ?
                        (
                            <div className={`ActivityNotification__image__full ${imageLoaded}`}>
                                <img src={imageURL} alt="Random" onLoad={() => setImageLoaded(true)} />
                            </div>
                        ) :
                        null
                    }

                    <div className="ActivityNotification__image__count">
                        9
                    </div>
                </div>

                <div className="ActivityNotification__preview">
                    <h3>Follow Requests</h3>

                    <h4>Approve or ignore requests</h4>
                </div>
            </div>
        )
    }


    return (
        <div className="ActivityNotification" ref={ref}>
            <div className="ActivityNotification__image">
                <div className={`ActivityNotification__image__lazy ${lazyImageLoaded}`}>
                    <img src={lazyURL} alt="" onLoad={() => setLazyImageLoaded(true)} />
                </div>

                {
                    intersected && lazyImageLoaded ?
                    (
                        <div className={`ActivityNotification__image__full ${imageLoaded}`}>
                            <img src={imageURL} alt="Random" onLoad={() => setImageLoaded(true)} />
                        </div>
                    ) :
                    null
                }
            </div>

            <div className="ActivityNotification__preview--random-words">
                {[...new Array(Math.floor(Math.random() * (50 - 15 + 1) + 15))].map((_, key) => <span key={key}>word</span>)}
            </div>
        </div>
    )
}

export default Activity