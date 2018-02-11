import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from "./Navigation/NavigationComponent";
import {LoginComponent} from "./Navigation/LoginComponent";
import {DoctorListContainer} from "./DoctorList/DoctorListContainer";
import {DoctorContainer} from "./DoctorList/DoctorContainer";
import {DoctorAdministrationContainer} from "./DoctorAdministration/DoctorAdministrationContainer";
import {DoctorDetailsContainer} from "./DoctorDetails/DoctorDetailsContainer";
import {DoctorEditComponent} from "./DoctorAdministration/DoctorEditComponent";
import {DoctorPageComponent} from "./DoctorHomePage/DoctorPageComponent";

import {PatientContainer} from "./PatientList/PatientContainer";
import {PatientAdministrationContainer} from "./PatientAdministration/PatientAdministrationContainer";

import {PharmacistContainer} from "./PharmacistList/PharmacistContainer";
import {PharmacistAdministrationContainer} from "./PharmacistAdministration/PharmacistAdministrationContainer";

import {AdminContainer} from "./AdminList/AdminContainer";
import {AdminAdministrationContainer} from "./AdminAdministration/AdminAdministrationContainer";

import {HomePageComponent} from "./HomePage/HomePageComponent";

import {RecordAdministrationContainer} from "./RecordAdministration/RecordAdministrationContainer";


import {injector} from 'react-services-injector';
import services from './services';

injector.register(services);

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <NavigationComponent />
                <Switch>
                    <Route exact path="/" component={DoctorListContainer} />
                    <Route exact path="/doctor" component={DoctorPageComponent} />

                    <Route exact path="/admin/" component={DoctorListContainer} />
                    <Route exact path="/admin/doctors/:id" component={DoctorDetailsContainer} />
                    <Route exact path="/admin/doctors" component={DoctorListContainer} />
                    <Route exact path="/admin/doctors/new" component={DoctorAdministrationContainer} />
                    <Route exact path="/admin/doctor" component={DoctorContainer} />

                   <Route exact path="/admin/patient" component={PatientContainer} />
                   <Route exact path="/admin/patients/new" component={PatientAdministrationContainer} />

                   <Route exact path="/admin/pharmacist" component={PharmacistContainer} />
                   <Route exact path="/admin/pharmacists/new" component={PharmacistAdministrationContainer} />

                     <Route exact path="/admin/admin" component={AdminContainer} />
                     <Route exact path="/admin/admins/new" component={AdminAdministrationContainer} />

                     <Route exact path="/admin/records/new" component={RecordAdministrationContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));
