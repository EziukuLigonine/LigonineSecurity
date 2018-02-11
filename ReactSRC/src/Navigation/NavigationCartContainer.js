import React from 'react';
import {NavLink} from 'react-router-dom';
import {injector} from 'react-services-injector';

class NavigationCartContainer extends React.Component {

    render() {
        const {Cart} = injector.get();
        return (
            <form action="logout" method="post">
              <input type="submit" value="Logout" />
              <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
            </form>
        )
    }
}

export default injector.connect(NavigationCartContainer, {
    toRender: ['Cart'] //we only need Cart in the component's render() method
  });
