import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {Login} from "./NavigationComponent/Login";
import {MainAdminPanelComponent} from "./Administration/MainAdminPanelComponent";
import {AdminDoctorContainer} from "./Administration/AdminDoctorContainer";
import {AdminPatientContainer} from "./Administration/AdminPatientContainer";
import {AdminPharmacistContainer} from "./Administration/AdminPharmacistContainer";
import {AdminAdminContainer} from "./Administration/AdminAdminContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
    
    <Route path="/admin" component={MainAdminPanelComponent} />
    <Route path="/doctors" component={AdminDoctorContainer} />
    <Route path="/patients" component={AdminPatientContainer} />
    <Route path="/pharmacists" component={AdminPharmacistContainer} />
    <Route path="/admins" component={AdminAdminContainer} />
    </Switch>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
