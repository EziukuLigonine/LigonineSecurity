import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from "./Navigation/NavigationComponent";
import {ProductListContainer} from "./ProductList/ProductListContainer";
import {AdminContainer} from "./AdminPanel/AdminContainer";
import {ProductAdministrationContainer} from "./ProductAdministration/ProductAdministrationContainer";
import {ProductDetailsContainer} from "./ProductDetails/ProductDetailsContainer";
import CartContainer from "./Cart/CartContainer";
import {ProductEditComponent} from "./ProductAdministration/ProductEditComponent";
import {HomePageComponent} from "./HomePageComponent/HomePageComponent";
import {DoctorAdministrationContainer} from "./AdminPanel/DoctorAdministration/DoctorAdministrationContainer";
import {PatientAdministrationContainer} from "./AdminPanel/PatientAdministration/PatientAdministrationContainer";
import {PharmacistAdministrationContainer} from "./AdminPanel/PharmacistAdministration/PharmacistAdministrationContainer";
import {AdminAdministrationContainer} from "./AdminPanel/AdminAdministration/AdminAdministrationContainer";
import {DoctorListContainer} from "./AdminPanel/DoctorList/DoctorListContainer";
import {PatientListContainer} from "./AdminPanel/PatientList/PatientListContainer";
import {PharmacistListContainer} from "./AdminPanel/PharmacistList/PharmacistListContainer";
import {AdminListContainer} from "./AdminPanel/AdminList/AdminListContainer";
import {DoctorContainer} from "./DoctorPanel/DoctorContainer";
import {PrescriptionAdministrationContainer} from "./DoctorPanel/PrescriptionAdministration/PrescriptionAdministrationContainer";
import {RecordAdministrationContainer} from "./DoctorPanel/RecordAdministration/RecordAdministrationContainer";
import {PrescriptionListContainer} from "./DoctorPanel/PrescriptionList/PrescriptionListContainer";
import {RecordListContainer} from "./DoctorPanel/RecordList/RecordListContainer";
import {Login} from "./Login/Login";
import {injector} from 'react-services-injector';
import services from './services';

injector.register(services);

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <NavigationComponent />
                <Switch>
                    <Route exact path="/" component={HomePageComponent} />
                    <Route path="/admin" component={AdminContainer} />
                    <Route path="/login" component={Login} />

                    <Route path="/admin/doctors/new" component={DoctorAdministrationContainer} />
                    <Route path="/doctors" component={DoctorListContainer} />

                    <Route path="/admin/patients/new" component={PatientAdministrationContainer} />
                    <Route path="/patients" component={PatientListContainer} />

                    <Route path="/admin/pharmacists/new" component={PharmacistAdministrationContainer} />
                    <Route path="/pharmacists" component={PharmacistListContainer} />

                    <Route path="/admin/admins/new" component={AdminAdministrationContainer} />
                    <Route path="/admins" component={AdminListContainer} />


                    <Route path="/doctor" component={DoctorContainer} />
                    <Route path="/doctor/prescriptions/new" component={PrescriptionAdministrationContainer} />
                    <Route path="/doctor/records/new" component={RecordAdministrationContainer} />
                    <Route path="/doctor/prescriptions" component={PrescriptionListContainer} />
                    <Route path="/doctor/records" component={RecordListContainer} />

                    <Route path="/products/:id" component={ProductDetailsContainer} />
                    <Route path="/products" component={ProductListContainer} />
                    <Route path="/admin/products/new" component={ProductAdministrationContainer} />

                    <Route path="/admin/products/:id" component={ProductEditComponent} />
                    <Route path="/cart-details" component={CartContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));
