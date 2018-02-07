import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {UserAdministrationComponent} from "./UserAdministrationComponent";

export class UserAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            specialisation: '',
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
        const outputUser = {
            name: this.state.name,
            surname: this.state.surname,
            username: this.state.username,
            password: this.state.password,
            specialisation: this.state.specialisation,
        };

        axios.post("http://localhost:8081/api/admin/doctors/new", outputUser)
            .then((response) => {
                this.setState( {
                    name: '',
                    surname: '',
                    username: '',
                    specialisation: '',
                    password: ''
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
                <UserAdministrationComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    specialisation={this.state.specialisation}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}
