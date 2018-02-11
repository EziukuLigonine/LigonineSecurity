import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminDoctorListComponent} from "./AdminDoctorListComponent";


export class DoctorContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {doctors: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/doctors')
            .then((response) => {
                this.setState({doctors: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    newUser = () => {
        this.props.history.push("/admin/doctors/new");
    };

    removeUser = (index) => {
        const items = this.state.doctors.filter((doctor) => {
          return doctor.id !== parseInt(index, 10); //heroku serveriui
        });
        this.setState({ doctors : items });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newUser}>Add new doctor</button>
                <AdminDoctorListComponent doctors={this.state.doctors} history={this.props.history} remove={this.removeUser}/>
            </div>
        );
    }
}
