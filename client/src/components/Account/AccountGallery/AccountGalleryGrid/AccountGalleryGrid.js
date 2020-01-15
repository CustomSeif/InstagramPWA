import React, { useEffect, useState } from "react"
import "./AccountGalleryGrid.css"
import axios from "axios"
import AccountGalleryGridImage from "./AccountGalleryGridImage/AccountGalleryGridImage"

const AccountGalleryGrid = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("/posts").then(({ data }) => setPosts(data))
    }, [])

    return (
        <div className="Account__gallery__grid">
            {
                posts.map((post, index) => {
                    return (
                        <AccountGalleryGridImage key={index}
                            imageMediumURL={post.image_medium_url}
                            lazyURL={post.lazy_url}
                        />
                    )
                })
            }
        </div>
    )
}

export default AccountGalleryGrid