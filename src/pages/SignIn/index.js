import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { SignIn } from 'components';
import { signIn as signInAction } from 'actions';

const SignInFormBase = ({ signIn, error, isLoggedIn }) => {
  const onSubmit = ({ email, password }) => {
    signIn(email, password);
  };

  return (
    <SignIn onSubmit={onSubmit} errorMsg={error} isLoggedIn={isLoggedIn} />
  );
};

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const mapDispatchToProps = {
  signIn: signInAction,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignInFormBase);
