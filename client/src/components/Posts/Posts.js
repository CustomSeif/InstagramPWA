import React, { useEffect, useState } from "react"
import "./Posts.css"
import axios from "axios"
import Post from "./Post/Post"

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("/posts")
            .then(({ data }) => setPosts(data))
    }, [])

    return  (
        <section className="Posts">
            {
                posts.map((post, index) => {
                    return (
                        <Post key={index}
                            imageURL={post.image_url}
                            imageMediumURL={post.image_medium_url}
                            lazyURL={post.lazy_url}
                            aspectRatio={post.aspect_ratio}
                        />
                    )
                })
            }
        </section>
    )
}

export default Posts