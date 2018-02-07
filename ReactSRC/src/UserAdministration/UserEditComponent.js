import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {UserAdministrationComponent} from "./UserAdministrationComponent";

export class UserEditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            specialisation: '',
            history: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/doctors/' + this.props.match.params.id)
        .then(response => {
            const {username, surname, password, specialisation, name} = response.data;
            this.setState({
                name : name,
                surname : surname,
                username : username,
                password : password,
                specialisation : specialisation,
                history: this.props.history
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [id]: value
            }
        );
    };

    handleClick = (event) => {
        const outputUser = {
            username: this.state.username,
            surname: this.state.surname,
            password: this.state.password,
            specialisation: this.state.specialisation,
            name: this.state.name
        };

        axios.put('http://localhost:8081/api/doctors/' + this.props.match.params.id, outputUser)
            .then((response) => {
                this.props.history.goBack();
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
