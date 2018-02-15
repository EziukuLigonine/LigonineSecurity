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
import {PatientDetailsContainer} from "./AdminPanel/PatientDetails/PatientDetailsContainer";
import {AdminDetailsContainer} from "./AdminPanel/AdminDetails/AdminDetailsContainer";
import {DoctorDetailsContainer} from "./AdminPanel/DoctorDetails/DoctorDetailsContainer";
import {PharmacistDetailsContainer} from "./AdminPanel/PharmacistDetails/PharmacistDetailsContainer";
import {PrescriptionDetailsContainer} from "./DoctorPanel/PrescriptionDetails/PrescriptionDetailsContainer";
import {RecordDetailsContainer} from "./DoctorPanel/RecordDetails/RecordDetailsContainer";
import {injector} from 'react-services-injector';
import services from './services';

injector.register(services);

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <NavigationComponent />
                <Switch>
                    <Route exact path="/" component={HomePageComponent} />
                    <Route exact path="/admin" component={AdminContainer} />

                    <Route exact path="/admin/doctors/new" component={DoctorAdministrationContainer} />
                    <Route exact path="/doctors" component={DoctorListContainer} />
                    <Route exact path="/doctors/:id" component={DoctorDetailsContainer} />

                    <Route exact path="/admin/patients/new" component={PatientAdministrationContainer} />
                    <Route exact path="/patients" component={PatientListContainer} />
                    <Route exact path="/patients/:id" component={PatientDetailsContainer} />

                    <Route exact path="/admin/pharmacists/new" component={PharmacistAdministrationContainer} />
                    <Route exact path="/pharmacists" component={PharmacistListContainer} />
                    <Route exact path="/pharmacists/:id" component={PharmacistDetailsContainer} />

                    <Route exact path="/admin/admins/new" component={AdminAdministrationContainer} />
                    <Route exact path="/admins" component={AdminListContainer} />
                    <Route exact path="/admins/:id" component={AdminDetailsContainer} />


                    <Route exact path="/doctor" component={DoctorContainer} />
                    <Route exact path="/doctor/prescriptions/new" component={PrescriptionAdministrationContainer} />
                    <Route exact path="/doctor/records/new" component={RecordAdministrationContainer} />
                    <Route exact path="/doctor/prescriptions" component={PrescriptionListContainer} />
                    <Route exact path="/doctor/records" component={RecordListContainer} />
                    <Route exact path="/prescriptions/:id" component={PrescriptionDetailsContainer} />
                    <Route exact path="/records/:id" component={RecordDetailsContainer} />

                    <Route exact path="/products/:id" component={ProductDetailsContainer} />
                    <Route exact path="/products" component={ProductListContainer} />
                    <Route exact path="/admin/products/new" component={ProductAdministrationContainer} />

                    <Route exact path="/admin/products/:id" component={ProductEditComponent} />
                    <Route path="/cart-details" component={CartContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));
