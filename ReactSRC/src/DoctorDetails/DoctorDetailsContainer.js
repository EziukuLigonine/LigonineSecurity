import React from 'react';
import axios from 'axios';
import DoctorDetailsComponent from "./DoctorDetailsComponent";

export class DoctorDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          doctor: {}
      }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/doctors/' + this.props.match.params.id)
            .then((response) => {
                this.setState({doctor: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return <DoctorDetailsComponent details={this.state.doctor} history={this.props.history}/>;
    }
}
