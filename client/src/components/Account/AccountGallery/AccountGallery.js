import React from "react"
import "./AccountGallery.css"
import AccountGalleryGrid from "./AccountGalleryGrid/AccountGalleryGrid"

const AccountGallery = () => {
    return (
        <div className="Account__gallery">
            <nav className="Account__gallery__nav">
                <button className="Account__gallery__nav true">
                    <img src="assets/grid.png" alt="" />
                </button>

                <button className="Account__gallery__nav">
                    <img src="assets/profile.png" alt="" />
                </button>
            </nav>

            <AccountGalleryGrid />
        </div>
    )
}

export default AccountGallery