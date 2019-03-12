import React from 'react';
import { reduxForm, Field } from "redux-form";
import { withStyles, Button  } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Input from "../Input";

import { Mail, Security } from "@material-ui/icons";

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
    marginBottom: '20px'
  },
  submitBtn: {
    display: 'block',
    margin: '0 auto'
  }
});


function SignInFormBase(props) {
  const { classes, isInvalid } = props;

  return (
  <div className = {classes.formContainer}>
    <Paper className={classes.form}>
      <form noValidate autoComplete="off" onSubmit={props.onSubmit}>
        <Field
          label="Email"
          name="email"
          className={classes.textField}
          Icon={Mail}
          component={Input}
        />

        <Field
          label="Password"
          name="password"
          className={classes.textField}
          component={Input}
          Icon={Security}
        />

        <Button
          disabled={false}
          type='submit'
          className={classes.submitBtn}
          variant="contained"
          color="primary">
          Log In
        </Button>

        {props.error && <p>{props.error.message}</p>}
      </form>
    </Paper>
  </div>
  );
}


export default reduxForm({
  form: "signIn"
})(withStyles(styles)(SignInFormBase));