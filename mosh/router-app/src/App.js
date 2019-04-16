import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import NotFound from './components/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/movies/Movies';
import MovieForm from './components/movies/MovieForm';
import Rentals from './components/rentals';
import Customers from './components/customers';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/register/" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
