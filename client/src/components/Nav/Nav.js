import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = ({ type }) => {
    if (type === "direct") return (
        <nav className="Nav">
            <Link className="Nav__camera" to="/camera">
                <img src="assets/camera.png" alt="camera icon" />

                <span>Camera</span>
            </Link>
        </nav>
    )

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