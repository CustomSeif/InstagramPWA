import React, { Component } from "react"
import "./Post.css"
import axios from "axios"

class Post extends Component {
    state = {
        name: "",
        profileImage: "",
        profileImageLoaded: false,
        lazyImageLoaded: false,
        imageLoaded: false
    }

    // componentDidMount() {
    //     axios
    //         .get("https://uinames.com/api/?ext")
    //         .then(({ data }) => {
    //             const name = `${data.name } ${data.surname}`
    //             const profileImage = data.photo

    //             this.setState({
    //                 name,
    //                 profileImage
    //             })
    //         })
    // }

    render() {
        return  (
            <div className="Post">
                {/* <div className="Post__header">
                    <div className="Post__header__profile-image">
                        <img alt={this.state.name}
                            className={`Post__header__profile-image__img ${this.state.profileImageLoaded}`}
                            onLoad={() => this.setState({ profileImageLoaded: true })}
                            src={this.state.profileImage}
                        />
                    </div>

                    <h5 className="Post__header__name">{this.state.name}</h5>
                </div> */}

                {/* Image */}
                <div className="Post__image">
                    <div className="Post__image__placeholder"
                        style={{ paddingBottom: `${this.props.aspectRatio}%` }}>
                    </div>

                    <div className={`Post__image__lazy ${this.state.lazyImageLoaded}`}>
                        <img src={this.props.lazyURL} alt="Random Lazy" onLoad={() => this.setState({ lazyImageLoaded: true })} />
                    </div>

                    <div className={`Post__image__full ${this.state.imageLoaded}`}>
                        <img src={this.props.imageURL} alt="Random" onLoad={() => this.setState({ imageLoaded: true })} />
                    </div>
                </div>

                {/* Engagement */}
                <div className="Post__engagement">
                    <div className="Post__engagement__actions">
                        <button className="Post__engagement__like"></button>
                        <button className="Post__engagement__comment"></button>
                        <button className="Post__engagement__forward"></button>
                    </div>

                    <div className="Post__engagement__actions">
                        <button className="Post__engagement__bookmark"></button>
                    </div>
                </div>

                <div className="Post__description">
                    <h6 className="Post__description__name">{this.state.name}</h6>

                    <span className="Post__description__placeholder Post__description__placeholder--grey"
                        style={{width: `${Math.random() * (17 - 4 + 1) + 4}rem`}}>
                    </span>
                    <span className="Post__description__placeholder Post__description__placeholder--blue"></span>
                </div>

                <div className="Post__comments">
                    <span className="Post__comments__placeholder Post__comments__placeholder--black"></span>
                    <span className="Post__comments__placeholder Post__comments__placeholder--grey"></span>
                </div>
            </div>
        )
    }
}

export default Post