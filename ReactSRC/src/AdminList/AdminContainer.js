import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminAdminListComponent} from "./AdminAdminListComponent";


export class AdminContainer extends Component {

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

    newAdmin = () => {
        this.props.history.push("/admin/admins/new");
    };

    removeAdmin = (index) => {
        const items = this.state.admins.filter((admin) => {
          return admin.id !== parseInt(index, 10); //heroku serveriui
        });
        this.setState({ admins : items });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newAdmin}>Add new admin</button>
                <AdminAdminListComponent admins={this.state.admins} history={this.props.history} remove={this.removeAdmin}/>
            </div>
        );
    }
}
