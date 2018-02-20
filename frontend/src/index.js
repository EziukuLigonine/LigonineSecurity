import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminContainer from './Admin/AdminContainer';
import { HashRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import jQuery from 'jquery'
global.jQuery = jQuery
global.jquery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" name="home" component={App} />
      <Route path="/admin" name="loginToAdmin" component={AdminContainer} />
    </Switch>
  </HashRouter>
  , document.getElementById('root'));
registerServiceWorker();
