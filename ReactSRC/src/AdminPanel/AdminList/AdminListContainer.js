import React, {Component} from 'react';
import axios from 'axios';
import {AdminListComponent} from "./AdminListComponent";

export class AdminListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {admins: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/admins')
            .then((response) => {
                this.setState({admins: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    removeAdmin = (index) => {
        const items = this.state.admins.filter((admin) => {
          return admin.id !== parseInt(index, 10);
        });
        this.setState({ admins : items });
    }

    render() {
        return (
            <div>
                <AdminListComponent admins={this.state.admins} history={this.props.history} remove={this.removeAdmin} />
            </div>
        );
    }
}
