import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminPharmacistListComponent} from "./AdminPharmacistListComponent";


export class PharmacistContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {pharmacists: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/pharmacists')
            .then((response) => {
                this.setState({pharmacists: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    newPharmacist = () => {
        this.props.history.push("/admin/pharmacists/new");
    };

    removePharmacist = (index) => {
        const items = this.state.pharmacists.filter((pharmacist) => {
          return pharmacist.id !== parseInt(index, 10); //heroku serveriui
        });
        this.setState({ pharmacists : items });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPharmacist}>Add new pharmacist</button>
                <AdminPharmacistListComponent pharmacists={this.state.pharmacists} history={this.props.history} remove={this.removePharmacist}/>
            </div>
        );
    }
}
