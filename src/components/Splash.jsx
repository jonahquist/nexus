import React from "react";
import { Link, withRouter} from "react-router-dom";
import './index.css';
import 'public\assets\img\Group 9.svg';

function Splash() {
    return (
        <div class="splash">
            <div class="landing-block">
                <h1>Event Nexus</h1>
                <p>Connect with others in the digital age! Set your avaliablility, create your profile, and join recommended events! Event nexus will take care of the rest. Find new friends, join communities, and build lasting relationships and hobbies. Get started by clicking the button below!</p>
                <Link to="/home" class="dash-button">Dashboard</Link>
                <Link to="/schedule" class="sched-button">Schedule</Link>
            </div>
            <img src={"assets/img/Group 10.png"}></img>
        </div>
    )
} 

export default Splash;