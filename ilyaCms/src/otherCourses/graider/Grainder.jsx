import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

import './grainder.css';

// import AppCard from './CappCard/AppCard';
// import SeasonDisplay from './SeasonDisplay';
import Pics from './Pics';

class Grainder extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
        {/* <div className="allnav-base">
          <div className="allnav-item">hello</div>
        </div> */}

        {/* <AppCard /> */}
        {/* <SeasonDisplay /> */}
        <Pics />
      </React.Fragment>
    );
  }
}

export default Grainder;
