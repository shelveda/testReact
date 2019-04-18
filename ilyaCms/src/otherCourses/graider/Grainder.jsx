import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import './grainder.css';
// import AppCard from './CappCard/AppCard';

import SeasonDisplay from './SeasonDisplay';

class Grainder extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
        {/* <AppCard /> */}
        <SeasonDisplay />
      </React.Fragment>
    );
  }
}

export default Grainder;
