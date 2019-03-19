/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Home, LoginForm, Footer } from './components';
import { Admin, Converter, Profile, SignUp, SignIn } from './pages';

const App = ({ isLoggedIn }) => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginForm} />
      <Route path="/admin-panel" component={Admin} />
      <Route path="/profile" component={Profile} />
      <Route path="/converter" component={Converter} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
    {!isLoggedIn && <Redirect to="/sign-in" />}
    <Footer />
  </Fragment>
);

export default connect(({ auth }) => ({ isLoggedIn: auth.isLoggedIn }))(App);
