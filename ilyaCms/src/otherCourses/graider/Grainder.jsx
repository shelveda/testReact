import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './grainder.css';

import AppCard from './CappCard/AppCard';
import SeasonDisplay from './SeasonDisplay';
import Pics from './Pics';

import Songs from './components/Songs';

import Header from './header';
import Blog from './Blog/Blog';

class Grainder extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
        <div style={{ fontSize: '16px' }}>
          <Header />

          <Switch>
            <Route path="/grainder/Blog" component={Blog} />
            <Route path="/grainder/songs" component={Songs} />
            <Route path="/grainder/season" component={SeasonDisplay} />
            <Route path="/grainder/pics" component={Pics} />
            <Route path="/grainder/appcard" component={AppCard} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Grainder;
