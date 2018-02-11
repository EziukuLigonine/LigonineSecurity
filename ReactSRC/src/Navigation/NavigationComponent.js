import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavigationCartContainer from "./NavigationCartContainer";
import UsernameContainer from './UsernameContainer';

export var NavigationComponent = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/admin/doctor">Doctor</NavLink></li>
                    <li><NavLink to="/admin/patient">Patient</NavLink></li>
                    <li><NavLink to="/admin/pharmacist">Pharmacist</NavLink></li>
                    <li><NavLink to="/admin/admin">Admin</NavLink></li>
                </ul>
                <UsernameContainer />
                <NavigationCartContainer/>
            </div>
        </nav>
    );
};
