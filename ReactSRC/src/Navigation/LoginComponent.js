import React, { Component } from 'react';

export class LoginComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleClick = (event) => {
    console.log(this.state);
    event.preventDefault();

  }

  render(){
    return(
      <form action="/login" method="post">
         <fieldset>
             <legend>Please Login</legend>

             <p>
             <label>Username</label>
             <input type="text" id="username" name="username" onChange={(event, newValue) => this.setState({ username: newValue })} />
             </p>
             <p>
             <label>Password</label>
             <input type="password" id="password" name="password" onChange={(event, newValue) => this.setState({ password: newValue })}/>
             </p>
             <div>
                 <button type="submit" className="btn" onClick={(event) => this.handleClick(event)}>Log in</button>
             </div>
         </fieldset>
      </form>
      );
    }
  }
