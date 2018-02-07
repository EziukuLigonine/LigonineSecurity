import React from 'react';
import axios from 'axios';
import {UserListComponent} from "./UserListComponent";


export class UserListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { users: []};
    }

    componentWillMount = () => {
        axios.get('http://localhost:8081/api/doctors')
            .then((response) => {
                this.setState( {users: response.data} );
            })
            .catch( (error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                <UserListComponent users={this.state.users} history={this.props.history}/>
            </div>
        )

    }
}
