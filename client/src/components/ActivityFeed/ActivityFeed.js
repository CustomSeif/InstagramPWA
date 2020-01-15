import React, { useEffect, useState } from "react"
import "./ActivityFeed.css"
import axios from "axios"
import ActivityNotification from "./ActivityNotification/ActivityNotification"

const ActivityFeed = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get("/profiles")
            .then(({ data }) => setProfiles(data))
    }, [])

    return (
        <div className="ActivityFeed">
            <ActivityNotification imageURL={profiles.length ? profiles[0].image_url : null}
                lazyURL={profiles.length ? profiles[0].lazy_url : null}
                type="follow"
            />

            <h2>This week</h2>

            <ActivityNotification imageURL={profiles.length ? profiles[1].image_url : null}
                lazyURL={profiles.length ? profiles[1].lazy_url : null}
                name={profiles.length ? profiles[1].name : null}
            />

            <h2>Earlier</h2>

            {
                profiles.slice(2).map((profile, index) => {
                    return (
                        <ActivityNotification key={index}
                            imageURL={profile.image_url}
                            lazyURL={profile.lazy_url}
                            name={profile.name}
                        />
                    )
                })
            }
        </div>
    )
}

export default ActivityFeed