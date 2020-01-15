import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"
import ActivityFeed from "../components/ActivityFeed/ActivityFeed"

const Activity = () => {
    return (
        <div className="Activity">
            <Header type="activity" />

            <ActivityFeed />

            <Nav />
            <NavSpacer />
        </div>
    )
}

export default Activity