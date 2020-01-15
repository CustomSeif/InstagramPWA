import React from "react"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import NavSpacer from "../components/Nav/NavSpacer"
import AccountHeader from "../components/Account/AccountHeader/AccountHeader"

const Account = () => {
    return (
        <div className="Account">
            <Header type="account" />

            <AccountHeader />

            <Nav />
            <NavSpacer />
        </div>
    )
}

export default Account