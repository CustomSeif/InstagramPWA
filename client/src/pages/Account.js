import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"

const Account = () => {
    return (
        <div className="Account">
            <Header type="account" />

            <Nav />
            <NavSpacer />
        </div>
    )
}

export default Account