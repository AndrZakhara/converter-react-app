/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react';
import PrivateRoute from 'pages/PrivateRoute';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Home, Footer } from './components';
import { Admin, Converter, Profile, SignUp, SignIn } from './pages';

const App = ({ isLoggedIn }) => (
  <Fragment>
    <Header />
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/admin-panel" component={Admin} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/converter" component={Converter} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
    <Footer />
  </Fragment>
);

export default connect(({ auth }) => ({ isLoggedIn: auth.isLoggedIn }))(App);
