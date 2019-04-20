import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';
import './App.css';
import NavigationAll from './NavigationAll';
import Grainder from './otherCourses/graider/Grainder';

const AsyncHome = asyncComponent(() => import('./pages/laptop/home'));
const AsyncHomeM = asyncComponent(() => import('./pages/mobile/home_m'));
const AsyncGrainder = asyncComponent(() =>
  import('./otherCourses/graider/Grainder')
);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationAll />
        <div className="main-wrapper" id="main-wrapper">
          <Switch>
            <Route path="/cms/m" component={AsyncHomeM} />
            <Route path="/grainder" component={AsyncGrainder} />
            <Route path="/cms" component={AsyncHome} />
            <Route path="/ccc" component={Grainder} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
