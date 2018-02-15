import React, { Component } from 'react';
import axios from 'axios';
import {AdminDetailsComponent} from './AdminDetailsComponent';

export class AdminDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      admin: {}
    };

  }
  componentDidMount() {
    axios.get('http://localhost:8081/api/admins/' + this.props.match.params.id)
    .then((response) => {
      this.setState({
        admin: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

  };


  render(){
    return(
        <AdminDetailsComponent admin={this.state.admin} history={this.props.history}/>
    );
  }
}
