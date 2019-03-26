import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Admin,
  Converter,
  Profile,
  SignUp,
  SignIn,
  Home,
  WeatherWrap,
} from 'pages';
import { PageNotFound } from 'components';
import AdminRoute from './admin.route';
import PrivateRoute from './private.route';

export default () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <AdminRoute path="/admin-panel" component={Admin} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/converter" component={Converter} />
    <PrivateRoute path="/weather" component={WeatherWrap} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
