import React, { useEffect, useState } from "react"
import "./Messages.css"
import axios from "axios"
import Message from "./Message/Message"

const Messages = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get("/profiles")
            .then(({ data }) => setProfiles(data))
    }, [])

    return (
        <div className="Messages">
            <div className="Messages__search">
                <img src="assets/search.png" alt="search icon" />

                <input type="text" placeholder="Search" />
            </div>

            <h1>Messages</h1>

            <div>
                {
                    profiles.map((profile, index) => {
                        return (
                            <Message key={index}
                                name={profile.name}
                                imageURL={profile.image_url}
                                lazyURL={profile.lazy_url}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Messages