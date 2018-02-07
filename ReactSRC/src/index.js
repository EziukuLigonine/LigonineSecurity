import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from "./Navigation/NavigationComponent";
import {LoginComponent} from "./Navigation/LoginComponent";
import {UserListContainer} from "./UserList/UserListContainer";
import {AdminContainer} from "./UserList/AdminContainer";
import {UserAdministrationContainer} from "./UserAdministration/UserAdministrationContainer";
import {UserDetailsContainer} from "./UserDetails/UserDetailsContainer";
import CartContainer from "./Cart/CartContainer";
import {UserEditComponent} from "./UserAdministration/UserEditComponent";

import {injector} from 'react-services-injector';
import services from './services';

injector.register(services);

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <NavigationComponent />
                <Switch>
                    <Route exact path="/" component={UserListContainer} />
                    <Route exact path="/doctors/:id" component={UserDetailsContainer} />
                    <Route exact path="/doctors" component={UserListContainer} />
                    <Route exact path="/admin/doctors/new" component={UserAdministrationContainer} />
                    <Route exact path="/admin" component={AdminContainer} />

                    <Route exact path="/doctors/:id" component={UserEditComponent} />
                    <Route path="/cart-details" component={CartContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));
