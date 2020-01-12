import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"

const Activity = () => {
    return (
        <div className="Activity">
            <Header type="activity" />

            <Nav />
            <NavSpacer />
        </div>
    )
}

export default Activity