import React, { Component } from 'react';
import axios from 'axios';
import {PatientDetailsComponent} from './PatientDetailsComponent';

export class PatientDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      patient: {}
    };

  }
  componentDidMount() {
    axios.get('http://localhost:8081/api/patients/' + this.props.match.params.id)
    .then((response) => {
      this.setState({
        patient: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

  };


  render(){
    return(
        <PatientDetailsComponent patient={this.state.patient} history={this.props.history}/>
    );
  }
}
