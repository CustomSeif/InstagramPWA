import React, { useEffect, useRef } from "react"
import "./LiveCamera.css"

const LiveCamera = () => {
    const liveCameraStream = useRef()

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => liveCameraStream.current.srcObject = stream)
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="LiveCamera">
            <video ref={liveCameraStream}
                className="LiveCamera__stream" src="" autoPlay>
            </video>
        </div>
    )
}

export default LiveCamera