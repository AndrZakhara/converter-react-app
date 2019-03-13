import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUp } from '../../components'
import { connect } from 'react-redux';
import { withFirebase } from '../../api/firebase';
import { signUp } from '../../actions/signUp';

const SignUpFormBase = (props) => {
  
  function onSubmit(...params) {
    const {email, passwordOne} = params[0];
    props.signUp(email, passwordOne);
  };

  const {error} = props;

  return (
    <SignUp
      onSubmit={onSubmit}
      error={error}
    />
  );
}

const mapStateToProps = (state) => {
  return {
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