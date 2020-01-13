import React, { useEffect, useState } from "react"
import "./Stories.css"
import axios from "axios"
import Story from "./Story/Story"

const Stories = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get("/profiles")
            .then(({ data }) => setProfiles(data))
    }, [])

    return  (
        <section className="Stories">
            {
                profiles.map((profile, index) => {
                    return (
                        <Story key={index}
                            name={profile.name}
                            imageURL={profile.image_url}
                            lazyURL={profile.lazy_url}
                        />
                    )
                })
            }
        </section>
    )
}

export default Stories