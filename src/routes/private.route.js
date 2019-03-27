import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isLoggedIn ? <Component {...props} /> : <Redirect to="sign-in" />
    }
  />
);

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
