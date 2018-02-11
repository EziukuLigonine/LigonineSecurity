import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export class DoctorCardComponent extends React.Component {

    getDoctor = (event) => {
        this.props.history.push("/doctors/" + this.props.id);
        event.preventDefault();
    };

    render() {
        return (
            <div className="col-xs-12 col-sm-4 text-center">
                <div className="thumbnail">
                    <p>{this.props.name}</p>
                    <p>{this.props.surname}</p>
                    <p>{this.props.username}</p>
                    <p>{this.props.password}</p>
                    <p>{this.props.specialisation}</p>

                    <p><button className="btn btn-primary" onClick={this.getDoctor}>Details</button></p>
                </div>
            </div>
        );
    }

};
