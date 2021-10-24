import React from "react";
import { Link, withRouter} from "react-router-dom";
import './index.css';

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="topnav">
                <div class = "container">
                        <ul>
                            <li class={`nav-item ${
                                props.location.pathname === "/home" ? "active" : ""
                            }`}>
                                <Link to="/" class="nav-logo">Event Nexus</Link>
                            </li>
                            <li class={`nav-item ${
                                props.location.pathname === "/home" ? "active" : ""
                            }`}>
                                <Link to="/home" class="nav-link">Home</Link>
                            </li>
                            <li class={`nav-item ${
                                props.location.pathname === "/schedule" ? "active" : ""
                            }`}>
                                <Link to="/schedule" class="nav-link">Schedule</Link>
                            </li>
                            <li class={`nav-item ${
                                props.location.pathname === "/explore" ? "active" : ""
                            }`}>
                                <Link to="/explore" class="nav-link">Profile</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);
