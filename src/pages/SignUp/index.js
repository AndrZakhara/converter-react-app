/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUp } from 'components';
import { connect } from 'react-redux';
import { signUp } from 'actions/auth';

const SignUpForm = ({ error, signUp }) => {
  const onSubmit = ({ email, passwordOne, firstName, secondName, phone }) => {
    signUp(email, passwordOne, firstName, secondName, phone);
  };

  return <SignUp onSubmit={onSubmit} errorMsg={error} />;
};

const mapStateToProps = ({ auth }) => ({ error: auth.error });

const mapDispatchToProps = {
  signUp,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignUpForm);
