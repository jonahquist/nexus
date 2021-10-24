import React from "react";
import './event.css';
import { Media} from 'reactstrap';
import Button from "./ButtonParent"

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleClass()  {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    }

    render() {
        const event = this.props.infos.map((info) => {
            return(
                <div class="event"key={info.id}>
                    <div body className="details">
                        <h3 className={this.state.active ? "active" : "not"}>{info.name}</h3>
                        <div>{info.description}</div>
                        <ul class="tags">
                            <li>{info.tag1}</li>
                            <li>{info.tag2}</li>
                        </ul>
                        <Button />
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