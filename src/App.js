import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Account from "./pages/Account"
import Activity from "./pages/Activity"
import Camera from "./pages/Camera"
import Direct from "./pages/Direct"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import Upload from "./pages/Upload"

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Home} />

                <Route path="/account" component={Account} />

                <Route path="/activity" component={Activity} />

                <Route path="/camera" component={Camera} />

                <Route path="/direct" component={Direct} />

                <Route path="/explore" component={Explore} />

                <Route path="/upload" component={Upload} />
            </div>
        </BrowserRouter>
    )
}

export default App