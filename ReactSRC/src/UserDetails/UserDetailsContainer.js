import React from 'react';
import axios from 'axios';
import UserDetailsComponent from "./UserDetailsComponent";

export class UserDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: {}}
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/doctors/' + this.props.match.params.id)
            .then((response) => {
                this.setState({user: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return <UserDetailsComponent details={this.state.user} history={this.props.history}/>;
    }
}
