import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminUserListComponent} from "./AdminUserListComponent";

export class AdminContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/doctors')
            .then((response) => {
                this.setState({users: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    newUser = () => {
        this.props.history.push("/admin/doctors/new");
    };

    removeUser = (index) => {
        const items = this.state.users.filter((user) => {
          return user.id !== parseInt(index, 10); //heroku serveriui
        });
        this.setState({ users : items });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newUser}>Add new doctor</button>
                <AdminUserListComponent users={this.state.users} history={this.props.history} remove={this.removeUser}/>
            </div>
        );
    }
}
