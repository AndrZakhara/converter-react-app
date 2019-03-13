import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUp } from 'components';
import { connect } from 'react-redux';
import { withFirebase } from 'api/firebase';
import { signUp } from 'actions/signUp';

const SignUpForm = ({ error, signUp }) => {
  const onSubmit = inputs => {
    const { email, passwordOne } = inputs;
    signUp(email, passwordOne);
  };

  return <SignUp onSubmit={onSubmit} error={error} />;
};

const mapStateToProps = ({ signUp }) => ({ error: signUp.error });

const mapDispatchToProps = {
  signUp,
};

export default compose(
  withRouter,
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignUpForm);
