import React from 'react';
import axios from 'axios';
import {PatientAdministrationComponent} from "./PatientAdministrationComponent";

export class PatientAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            personalId: '',
            dateOfBirth: '',
            doctorUsername: '',
            history: props.history
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
                [id]: value
            }
        );
    };

    handleClick = (event) => {
        const outputPatient = {
            name: this.state.name,
            surname: this.state.surname,
            username: this.state.username,
            password: this.state.password,
            personalId: this.state.personalId,
            dateOfBirth: this.state.dateOfBirth,
            doctorUsername: this.state.doctorUsername
        };

        axios.post("http://localhost:8081/api/admin/patients/new", outputPatient)
            .then((response) => {
                this.setState( {
                    name: '',
                    surname: '',
                    username: '',
                    password: '',
                    personalId: '',
                    dateOfBirth: '',
                    doctorUsername: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
            event.preventDefault();
    };

    render() {
        return (
            <div>
                <PatientAdministrationComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    personalId={this.state.personalId}
                    dateOfBirth={this.state.dateOfBirth}
                    doctorUsername={this.state.doctorUsername}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}
