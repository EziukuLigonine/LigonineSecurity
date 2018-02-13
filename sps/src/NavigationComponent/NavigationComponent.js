import React, { Component } from 'react';

export class NavigationComponent extends Component {
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">SPS</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/login"><span className="glyphicon glyphicon-log-in" aria-hidden="true"></span> Prisijungti</a></li>
              </ul>
            </div>
          </div>
        </nav>

      );
    }
  }
