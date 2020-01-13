import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"
import ExplorePosts from "../components/ExplorePosts/ExplorePosts"

const Explore = () => {
    return (
        <div className="Explore">
            <Header type="explore" />

            <ExplorePosts />

            <Nav />
            <NavSpacer />
        </div>
    )
}

export default Explore