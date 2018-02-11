import React from 'react';
import axios from 'axios';
import {NavigationComponent} from "../Navigation/NavigationComponent";
import {DoctorListComponent} from "./DoctorListComponent";


export class DoctorListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { doctors: []};
    }

    componentWillMount = () => {
        axios.get('http://localhost:8081/api/doctors')
            .then((response) => {
                this.setState( {doctors: response.data} );
            })
            .catch( (error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
              
                <DoctorListComponent doctors={this.state.doctors} history={this.props.history}/>
            </div>
        )

    }
}
