import React, { useRef, useState } from "react"
import "./Post.css"
import useIntersectionObserver from "../../../hooks/useIntersectionObserver"

const Post = ({
    imageURL,
    lazyURL,
    aspectRatio,
    name,
    profileImageURL,
    profileLazyURL
}) => {
    const [lazyProfileImageLoaded, setLazyProfileImageLoaded] = useState(false)
    const [profileImageLoaded, setProfileImageLoaded] = useState(false)
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const ref = useRef()

    const [intersected] = useIntersectionObserver(ref)

    return  (
        <div className="Post" ref={ref}>
            {/* Header */}
            <div className="Post__header">
                <div className="Post__header__profile-image">
                    <div className={`Post__header__profile-image__lazy ${lazyProfileImageLoaded}`}>
                        <img src={profileLazyURL} alt="Random Lazy" onLoad={() => setLazyProfileImageLoaded(true)} />
                    </div>

                    {
                        intersected ?
                        (
                            <div className={`Post__header__profile-image__full ${profileImageLoaded}`}>
                                <img src={profileImageURL} alt="Random" onLoad={() => setProfileImageLoaded(true)} />
                            </div>
                        ) :
                        null
                    }
                </div>

                <h5 className="Post__header__name">{name}</h5>
            </div>

            {/* Image */}
            <div className="Post__image">
                <div className="Post__image__placeholder"
                    style={{ paddingBottom: `${aspectRatio}%` }}>
                </div>

                <div className={`Post__image__lazy ${lazyImageLoaded}`}>
                    <img src={lazyURL} alt="Random Lazy" onLoad={() => setLazyImageLoaded(true)} />
                </div>

                {
                    intersected ?
                    (
                        <div className={`Post__image__full ${imageLoaded}`}>
                            <img src={imageURL} alt="Random" onLoad={() => setImageLoaded(true)} />
                        </div>
                    ) :
                    null
                }
            </div>

            {/* Engagement */}
            <div className="Post__engagement">
                <div className="Post__engagement__actions">
                    <button className="Post__engagement__like"></button>
                    <button className="Post__engagement__comment"></button>
                    <button className="Post__engagement__forward"></button>
                </div>

                <div className="Post__engagement__actions">
                    <button className="Post__engagement__bookmark"></button>
                </div>
            </div>

            <div className="Post__description">
                <h6 className="Post__description__name">{name}</h6>

                <span className="Post__description__placeholder Post__description__placeholder--grey"
                    style={{width: `${Math.random() * (17 - 4 + 1) + 4}rem`}}>
                </span>
                <span className="Post__description__placeholder Post__description__placeholder--blue"></span>
            </div>

            <div className="Post__comments">
                <span className="Post__comments__placeholder Post__comments__placeholder--black"></span>
                <span className="Post__comments__placeholder Post__comments__placeholder--grey"></span>
            </div>
        </div>
    )
}

export default Post