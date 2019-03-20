/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUp } from 'components';
import { connect } from 'react-redux';
import { signUp as signUpAction } from 'actions/auth';

const SignUpForm = ({ error, signUp, isLoggedIn }) => {
  const onSubmit = ({ email, passwordOne, firstName, lastName, phone }) => {
    signUp(email, passwordOne, firstName, lastName, phone);
  };

  return <SignUp
    onSubmit={onSubmit}
    errorMsg={error}
    isLoggedIn={isLoggedIn}/>;
};

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error
});

const mapDispatchToProps = {
  signUp: signUpAction,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignUpForm);
