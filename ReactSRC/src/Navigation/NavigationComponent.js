import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export var NavigationComponent = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/admin">Admin</NavLink></li>
                  <li><NavLink to="/doctor">Doctor</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};
