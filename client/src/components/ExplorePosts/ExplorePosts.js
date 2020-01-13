import React from "react"
import "./ExplorePosts.css"
import ExplorePost from "./ExplorePost/ExplorePost"

const ExplorePosts = () => {
    const explorePosts = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="Explore__posts">
            <div className="Explore__posts__grid Explore__posts__grid--right">
                {
                    explorePosts.map((_, index) => {
                        return <ExplorePost key={index} />
                    })
                }
            </div>

            <div className="Explore__posts__grid Explore__posts__grid--left">
                {
                    explorePosts.map((_, index) => {
                        return <ExplorePost key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default ExplorePosts