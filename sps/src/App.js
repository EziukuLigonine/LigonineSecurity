import React, { Component } from 'react';
import {NavigationComponent} from './NavigationComponent/NavigationComponent';
import {HomepageContent} from './HomepageContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationComponent />
        <HomepageContent />
      </div>
    );
  }
}

export default App;
