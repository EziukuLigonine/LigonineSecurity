import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminPatientListComponent} from "./AdminPatientListComponent";


export class PatientContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {patients: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/patients')
            .then((response) => {
                this.setState({patients: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    newPatient = () => {
        this.props.history.push("/admin/patients/new");
    };

    removePatient = (index) => {
        const items = this.state.patients.filter((patient) => {
          return patient.id !== parseInt(index, 10); //heroku serveriui
        });
        this.setState({ patients : items });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPatient}>Add new patient</button>
                <AdminPatientListComponent patients={this.state.patients} history={this.props.history} remove={this.removePatient}/>
            </div>
        );
    }
}
