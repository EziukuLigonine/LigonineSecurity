import React, {Component} from 'react';
import axios from 'axios';
import {AdminNavigationComponent} from "../NavigationComponent/AdminNavigationComponent";
import {AdminDoctorListComponent} from "./AdminDoctorList/AdminDoctorListComponent";

export class AdminDoctorContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      doctors: []
    };
  }
  componentDidMount = () => {
    axios.get('http://localhost:8081/api/doctors')
    .then((response) => {
      this.setState({doctors: response.data});
    })
    .catch((error) => {
      console.log(error);
    });
  };

  newDoctor = () => {
    this.props.history.push("/admin/doctors/new");
  };

  removeDoctor = (index) => {
    const items = this.state.doctors.filter((doctor) => {
      return doctor.id !== parseInt(index, 10); //heroku serveriui
    });
    this.setState({ doctors : items });
  }
  render(){
    return(
      <div>
        <AdminNavigationComponent />
        <button className="btn btn-primary" onClick={this.newDoctor}>Add new doctor</button>
        <AdminDoctorListComponent doctors={this.state.doctors} history={this.props.history} remove={this.removeDoctor}/>
      </div>
    );
  }
}
