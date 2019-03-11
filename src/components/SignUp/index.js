import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Card, CircularProgress, withStyles } from '@material-ui/core';
import { CardContent, ListItem, List, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

import { withFirebase } from '../../api/firebase';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  formContainer: {
    paddingTop: '100px',
    margin: '0 auto',
    width: '50%',
    maxWidth: '750px',
  },
  form: {
    padding: '20px',
  },
  textField: {
    width: '90%',
    marginBottom: '20px'
  },
  submitBtn: {
    display: 'block',
    margin: '0 auto'
  }
});

function SignUp(props) {
  // const {
  //   username,
  //   email,
  //   passwordOne,
  //   passwordTwo,
  //   error,
  // } = this.state;

  // const isInvalid =
  //   passwordOne !== passwordTwo ||
  //   passwordOne === '' ||
  //   email === '' ||
  //   username === '';

  const { classes } = props;

  return (
  <div className = {classes.formContainer}>
    <Paper className={classes.form}>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-password-input"
          label="Email"
          required
          className={classes.textField}
          type="email"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          required
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Phone"
          className={classes.textField}
          margin="normal"
        />

        <Button className={classes.submitBtn} variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Paper>
  </div>
  );
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={'sign-up'}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUp);

export default withStyles(styles)(SignUp);

export { SignUpForm, SignUpLink };
