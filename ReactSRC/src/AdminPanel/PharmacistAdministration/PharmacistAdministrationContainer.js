import React from 'react';
import axios from 'axios';
import {PharmacistAdministrationComponent} from "./PharmacistAdministrationComponent";

export class PharmacistAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            companyType: '',
            companyName: '',
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
        const outputPharmacist = {
            name: this.state.name,
            surname: this.state.surname,
            username: this.state.username,
            password: this.state.password,
            companyType: this.state.companyType,
            companyName: this.state.companyName
        };

        axios.post("http://localhost:8081/api/admin/pharmacists/new", outputPharmacist)
            .then((response) => {
                this.setState( {
                    name: '',
                    surname: '',
                    username: '',
                    password: '',
                    companyType: '',
                    companyName: ''
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
                <PharmacistAdministrationComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    companyType={this.state.companyType}
                    companyName={this.state.companyName}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}