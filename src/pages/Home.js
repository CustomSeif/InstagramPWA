import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"
import Posts from "../components/Posts/Posts"
import Stories from "../components/Stories/Stories"


const Home = () => {
    return (
        <div className="Home">
            <Header />

            <Stories />

            <Posts />

            <Nav></Nav>
            <NavSpacer></NavSpacer>
        </div>
    )
}

export default Home