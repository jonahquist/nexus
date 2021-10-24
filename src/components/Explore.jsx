import React from "react";
import AvailabilityCalendar from "./AvailabilityCalendar";

function Explore() {
    return (
        <div className="explore">
            <div className="profile">
                Interests
            </div>
            <textarea className="interests"></textarea>
            <div className="profile">
                Availability
            </div>
            <div className="calendar">
                <AvailabilityCalendar />
            </div>
        </div>
    )
} 

export default Explore;