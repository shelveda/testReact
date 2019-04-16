import React, { Component } from 'react';
import Home from './pages/laptop/home';

class NavigationAll extends Component {
  render() {
    return <h1>navhere</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavigationAll /> */}

        <Home />
      </React.Fragment>
    );
  }
}

export default App;
