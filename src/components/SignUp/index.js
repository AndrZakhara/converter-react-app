import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles, Button  } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { withFirebase } from '../../api/firebase';

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


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    console.log(111);
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
  const {
    username,
    email,
    passwordOne,
    passwordTwo,
    phone,
    error,
  } = this.state;

  const isInvalid =
    passwordOne === '' ||
    passwordTwo === '' ||
    passwordTwo !== passwordOne ||
    email === '' ||
    username === '' ||
    phone === '';
    console.log(passwordOne, passwordOne, email, username)

  const { classes } = this.props;

  return (
  <div className = {classes.formContainer}>
    <Paper className={classes.form}>
      <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
        <TextField
          id="standard-password-input"
          label="UserName"
          name="username"
          required
          className={classes.textField}
          onChange={this.onChange}
          type="text"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Email"
          name="email"
          required
          className={classes.textField}
          onChange={this.onChange}
          type="email"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          name="passwordOne"
          required
          className={classes.textField}
          onChange={this.onChange}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          name="passwordTwo"
          required
          className={classes.textField}
          onChange={this.onChange}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Phone"
          name="phone"
          className={classes.textField}
          onChange={this.onChange}
          type="number"
          margin="normal"
        />

        <Button disabled={isInvalid} type='submit' className={classes.submitBtn} variant="contained" color="primary">
          Register
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    </Paper>
  </div>
  );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default withStyles(styles)(SignUpFormBase);

export { SignUpForm };
