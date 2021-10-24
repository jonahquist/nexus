import React from "react";
import Event from "./Event";
import { INFOS } from "./infos";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            infos: INFOS
        };
    }

    render() {
        return (
            <div className="home">
                <div class="dash-container">
                    <h1>Dashboard</h1>
                    <h2>Recommended Events</h2>
                </div>
                <Event infos={this.state.infos} />
            </div>
        );
    }
} 

export default Home;