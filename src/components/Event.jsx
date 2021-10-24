import React from "react";
import './event.css';
import { Media} from 'reactstrap';

class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const event = this.props.infos.map((info) => {
            return(
                <div class="event"key={info.id}>
                    <div body className="details">
                        <h3>{info.name}</h3>
                        <div>{info.description}</div>
                        <div>{info.tags}</div>
                    </div> 
                </div>
            )
        });

        return(
            <div class ="container" className="container">
                <div className="row">
                    <Media list>
                        {event}
                    </Media>
                </div>
            </div>
        )
    }
}

export default Event;