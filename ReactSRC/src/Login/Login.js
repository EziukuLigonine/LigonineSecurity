import React from 'react';
import Forma from "./Forma";
import axios from 'axios';
axios.defaults.withCredentials = true; // leidzia dalintis cookies

export class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    }
  );
};

  onPassChange = (event) => {
    this.setState({
      password: event.target.value
    }
  );
};

  onSubmit = (event) => {
    let userData = new URLSearchParams();
    userData.append('username', this.state.username);
    userData.append('password', this.state.password);
    axios.post('http://localhost:8081/login', userData,
    {headers:{'Content-type':'application/x-www-form-urlencoded'}})
    .then((response) => { /* login ok */ })
    .catch((e) => { console.log(e); });
    event.preventDefault();
  };
render() {
  return(
    <Forma
      username={this.state.username}
      password={this.state.password}
      onUsernameChange={this.onUsernameChange}
      onPassChange={this.onPassChange}
      onSubmit={this.onSubmit} />
  );
}

}
