import React, { useState } from "react"
import "./AccountHeader.css"

const AccountHeader = () => {
    const [lazyImageLoaded, setLazyImageLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className="Account__header">
            <div className="Account__header__profile">
                <div className="Account__header__profile__image">
                    <div className={`Account__header__profile__image__lazy ${lazyImageLoaded}`}>
                        <img src="https://res.cloudinary.com/custom/image/upload/v1579089724/InstagramPWA/static/profile--lazy-current.jpg"
                            alt=""
                            onLoad={() => setLazyImageLoaded(true)}
                        />
                    </div>

                    {
                        lazyImageLoaded ?
                        (
                            <div className={`Account__header__profile__image__full ${imageLoaded}`}>
                                <img src="https://res.cloudinary.com/custom/image/upload/v1579089738/InstagramPWA/static/profile_700-current.jpg"
                                    alt="Random"
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </div>
                        ) :
                        null
                    }

                    <div className="Account__header__profile__image__add">+</div>
                </div>

                <div className="Account__header__profile__meta">
                    <div>
                        <h2>0</h2>
                        <h2>Posts</h2>
                    </div>

                    <div>
                        <h2>38</h2>
                        <h2>Followers</h2>
                    </div>

                    <div>
                        <h2>19</h2>
                        <h2>Following</h2>
                    </div>
                </div>
            </div>

            <h1>Mohamed Seif Khalid</h1>

            <button>Edit Profile</button>
        </div>
    )
}

export default AccountHeader