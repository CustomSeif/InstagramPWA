import React, { useEffect, useState } from "react"
import "./ExplorePosts.css"
import axios from "axios"
import ExplorePost from "./ExplorePost/ExplorePost"

const ExplorePosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("/posts")
            .then(({ data }) => {
                let count = 0
                let posts = []
                let post = []
                for (let index in data) {
                    if (count === 9) {
                        posts.push(post)
                        post = []
                        count = 0
                    }
                    post.push(data[index])
                    count = count + 1
                }
                posts.push(post)

                setPosts(posts)
            })
    }, [])

    return (
        <div className="Explore__posts">
            {
                posts.map((nonad, index) => {
                    if (index % 2 === 0) return (
                        <div className="Explore__posts__grid Explore__posts__grid--right" key={index}>
                            {
                                nonad.map((post, index) => {
                                    return (
                                        <ExplorePost key={index}
                                            imageMediumURL={post.image_medium_url}
                                            lazyURL={post.lazy_url}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                    else return (
                        <div className="Explore__posts__grid Explore__posts__grid--left" key={index}>
                            {
                                nonad.map((post, index) => {
                                    return (
                                        <ExplorePost key={index}
                                            imageMediumURL={post.image_medium_url}
                                            lazyURL={post.lazy_url}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExplorePosts