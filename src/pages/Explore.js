import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"

const Explore = () => {
    return (
        <div className="Explore">
            <Header type="explore" />

            <Nav />
            <NavSpacer />
        </div>
    )
}

export default Explore