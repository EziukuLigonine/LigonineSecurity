import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import RegisterAdmin from './Registration/RegisterAdmin';
import RegisterDoctor from './Registration/RegisterDoctor';

  class AdminRouter extends Component {
      render(){
        return(
          <div>
            <Switch>
              <Route exact path="/admin/register/admin" component={RegisterAdmin} />
              <Route exact path="/admin/register/doctor" component={RegisterDoctor} />
            </Switch>
          </div>
        );
      }
    }

  export default AdminRouter;
