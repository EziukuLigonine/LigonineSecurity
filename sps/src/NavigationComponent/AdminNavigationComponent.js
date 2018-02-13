import React, { Component } from 'react';

export class AdminNavigationComponent extends Component {
  render(){
    return(
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">SPS</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a href="/doctors">Gydytojai</a></li>
              <li><a href="/patients">Pacientai</a></li>
              <li><a href="/pharmacists">Vaistininkai</a></li>
              <li><a href="/admins">Administratoriai</a></li>
            </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="/logout"><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Atsijungti</a></li>
              </ul>
            </div>
          </div>
        </nav>

      );
    }
  }
