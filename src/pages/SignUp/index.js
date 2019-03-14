import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { SignUp } from '../../components';
import { withFirebase } from '../../api/firebase';
import { signUp } from '../../actions/signUp';

const SignUpForm = ({ error, signUpDispatch }) => {
  const onSubmit = inputs => {
    const { email, passwordOne } = inputs;
    signUpDispatch(email, passwordOne);
  };

  return <SignUp onSubmit={onSubmit} error={error} />;
};

const mapStateToProps = ({ signUp }) => ({ error: signUp.error });

const mapDispatchToProps = dispatch => ({
  signUpDispatch: (email, password) => dispatch(signUp(email, password)),
});

export default compose(
  withRouter,
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignUpForm);
