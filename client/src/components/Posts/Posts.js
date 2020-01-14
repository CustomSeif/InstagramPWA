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
                            lazyURL={post.lazy_url}
                            aspectRatio={post.aspect_ratio}
                            name={post.name}
                            profileImageURL={post.profile_image_url}
                            profileLazyURL={post.profile_lazy_url}
                        />
                    )
                })
            }
        </section>
    )
}

export default Posts