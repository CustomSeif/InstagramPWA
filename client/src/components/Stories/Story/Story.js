import React, { Component } from "react"
import "./Story.css"
import axios from "axios"

class Story extends Component {
    state = {
        lazyImageLoaded: false,
        imageLoaded: false
    }

    render() {
        return  (
            <div className="Story">
                <div className="Story__profile-image">
                    <div className="Story__profile-image__img">
                        <div className="Story__profile-image__img__placeholder"
                            style={{ paddingBottom: `${this.props.aspectRatio}%` }}>
                        </div>

                        <div className={`Story__profile-image__img__lazy ${this.state.lazyImageLoaded}`}>
                            <img src={this.props.lazyURL} alt="" onLoad={() => this.setState({ lazyImageLoaded: true })} />
                        </div>

                        <div className={`Story__profile-image__img__full ${this.state.imageLoaded}`}>
                            <img src={this.props.imageURL} alt="Random" onLoad={() => this.setState({ imageLoaded: true })} />
                        </div>
                    </div>

                    <svg className="Story__profile-image__border" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#f12711" />
                                <stop offset="70%" stopColor="#f7b733" />
                                <stop offset="100%" stopColor="#E94057" />
                            </linearGradient>
                        </defs>

                        <circle cx="12" cy="12" r="11" stroke="url(#gradient)"></circle>
                    </svg>
                </div>

                <h6 className="Story__name">
                    {`${this.props.name.slice(0, 9).trim()}...`}
                </h6>
            </div>
        )
    }
}

export default Story