import React from "react"
import "./Posts.css"
import Post from "./Post/Post"

import hall from "./images/hall.jpg"
import hamburg from "./images/hamburg.jpg"
import london from "./images/london.jpg"
import photographer from "./images/photographer.jpg"
import road from "./images/road.jpg"

const Posts = () => {
    return  (
        <section className="Posts">
            <Post image={hall}></Post>

            <Post image={hamburg}></Post>

            <Post image={london}></Post>

            <Post image={photographer}></Post>

            <Post image={road}></Post>
        </section>
    )
}

export default Posts