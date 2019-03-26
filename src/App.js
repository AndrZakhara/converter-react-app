/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react';
import PrivateRoute from 'pages/PrivateRoute';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageNotFound } from './components';
import {
  Admin,
  Converter,
  Profile,
  SignUp,
  SignIn,
  Home,
  WeatherWrap,
} from './pages';

const App = () => (
  <Fragment>
    <Header />
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/admin-panel" component={Admin} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/converter" component={Converter} />
      <PrivateRoute path="/weather" component={WeatherWrap} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </Fragment>
);

export default App;
