import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUp } from 'components'
import { connect } from 'react-redux';
import { withFirebase } from 'api/firebase';
import { signUp } from 'actions/signUp';

class SignUpFormBase extends Component {
  
  onSubmit = event => {
    this.props.signUp(this.props.email, this.props.passwordOne);
    event.preventDefault();
  };

  render() {
  const {
    username,
    email,
    passwordOne,
    passwordTwo,
    phone,
    error,
  } = this.props;

  const isInvalid =
    passwordOne === undefined ||
    passwordTwo === undefined ||
    passwordTwo !== passwordOne ||
    email === undefined ||
    username === undefined ||
    phone === undefined;
    console.log(passwordOne, passwordTwo, email, username, phone);

  return (
    <SignUp
      isInvalid={isInvalid}
      onSubmit={this.onSubmit}
      error={error}
    />
  );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.form.signUp && state.form.signUp.values && state.form.signUp.values.email,
    passwordOne: state.form.signUp && state.form.signUp.values && state.form.signUp.values.passwordOne,
    passwordTwo: state.form.signUp && state.form.signUp.values && state.form.signUp.values.passwordTwo,
    username: state.form.signUp && state.form.signUp.values && state.form.signUp.values.username,
    phone: state.form.signUp && state.form.signUp.values && state.form.signUp.values.phone,
    error: state.signUpReducer.error
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUp(email, password)),
});

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);