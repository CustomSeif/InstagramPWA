import React, { Component } from "react"
import "./Story.css"
import axios from "axios"

class Story extends Component {
    state = {
        name: "",
        profileImage: "",
        imageLoaded: false
    }

    componentDidMount() {
        axios
            .get("https://uinames.com/api/?ext")
            .then(({ data }) => {
                const profileImage = data.photo

                let name = `${data.name } ${data.surname}`
                if (name.length > 9) name = `${name.slice(0, 9).trim()}...`

                this.setState({
                    name,
                    profileImage
                })
            })
    }

    render() {
        return  (
            <div className="Story">
                <div className="Story__profile-image">
                    <img alt={this.state.name}
                        className={`Story__profile-image__img ${this.state.imageLoaded}`}
                        src={this.state.profileImage}
                        onLoad={() => this.setState({ imageLoaded: true })}
                    />
    
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
                    {this.state.name}
                </h6>
            </div>
        )
    }
}

export default Story