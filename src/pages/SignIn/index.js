import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { SignIn } from 'components';
import { signIn } from 'actions/signIn';

const SignInFormBase = ({ signIn, error }) => {
  const onSubmit = ({ email, password }) => {
    signIn(email, password);
  };

  return <SignIn onSubmit={onSubmit} errorMsg={error} />;
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
});

const mapDispatchToProps = {
  signIn,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignInFormBase);
