import React from "react"
import { NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="Nav">
            <NavLink exact className="Nav__home" to="/"></NavLink>
            <NavLink className="Nav__search" to="/explore"></NavLink>
            <NavLink className="Nav__upload" to="/upload"></NavLink>
            <NavLink className="Nav__likes" to="/activity"></NavLink>
            <NavLink className="Nav__account" to="/account"></NavLink>
        </nav>
    )
}

export default Nav