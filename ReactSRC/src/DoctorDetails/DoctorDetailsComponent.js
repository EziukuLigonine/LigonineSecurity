import React from 'react';
import axios from 'axios';
import {injector} from 'react-services-injector';


const errorStyle = {
    color: 'red'
}

class DoctorDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    doctorPatients = () => {
        this.props.history.push("/doctors/" + this.props.details.id + '/patients');
    };
    render() {
        return (
            <div>
                <h4>{this.props.details.name}</h4>
                <h4>{this.props.details.id}</h4>
                <p>{this.props.details.surname}</p>
                <p>{this.props.details.username}</p>
                <p>{this.props.details.specialisation}</p>
                <button className="btn btn-default" onClick={this.props.history.goBack}>Back</button>
                <button className="btn btn-default" onClick={this.doctorPatients}>Patients</button>
                {this.state.errorMessage}
            </div>
        );
    }

};

export default injector.connect(DoctorDetailsComponent);
