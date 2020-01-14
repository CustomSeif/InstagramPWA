import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"
import Messages from "../components/Messages/Messages"

const Direct = () => {
    return (
        <div className="Direct">
            <Header type="direct" />

            <Messages />

            <Nav type="direct" />
            <NavSpacer />
        </div>
    )
}

export default Direct