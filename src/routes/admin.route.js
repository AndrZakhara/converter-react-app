import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADMIN } from 'constants/roles';

const AdminRoute = ({ component: Component, role, ...rest }) => {
  const isAdmin = role === ADMIN;
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? <Component {...props} /> : props.history.goBack()
      }
    />
  );
};

const mapStateToProps = ({ user }) => ({
  role: user.profile.role,
});

export default connect(mapStateToProps)(AdminRoute);
