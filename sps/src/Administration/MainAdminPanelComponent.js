import React, { Component } from 'react';
import {AdminNavigationComponent} from "../NavigationComponent/AdminNavigationComponent";

  export class MainAdminPanelComponent extends Component {
      render(){
        return(
          <div>
            <AdminNavigationComponent />
            Here will be admin panel
          </div>
        );
      }
    }
