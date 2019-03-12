import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignIn } from '../../components'
import { connect } from 'react-redux';
import { withFirebase } from '../../api/firebase';
import { signIn } from '../../actions/signIn';

class SignInFormBase extends Component {
  
  onSubmit = event => {
    this.props.signIn(this.props.email, this.props.password);
    event.preventDefault();
  };

  render() {
  const {
    email,
    password,
    error
  } = this.props;

  const isInvalid =
    password === undefined ||
    email === undefined;

  return (
    <SignIn
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
    password: state.form.signUp && state.form.signUp.values && state.form.signUp.values.password,
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
});

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);