import React from 'react';
import { reduxForm, Field } from 'redux-form';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '../Input';
import {
  validateFirstName,
  validateSecondName,
  validateEmail,
  validatePhone,
  passwordLength,
  passwordMatch,
  validateProfile } from '../../utils/validate'

import AccountIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Security from '@material-ui/icons/Security';
import Phone from '@material-ui/icons/Phone';

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


const SignUpFormBase = (props) => {
  const { classes, handleSubmit, onSubmit } = props;

  return (
  <div className = {classes.formContainer}>
    <Paper className={classes.form}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="First name"
          name="firstName"
          className={classes.textField}
          component={Input}
          Icon={AccountIcon}
          type="text"
          validate={validateFirstName}
        />

        <Field
          label="Second name"
          name="secondName"
          className={classes.textField}
          component={Input}
          Icon={AccountIcon}
          type="text"
          validate={validateSecondName}
        />

        <Field
          label="Email"
          name="email"
          className={classes.textField}
          Icon={MailIcon}
          component={Input}
          type="email"
          validate={validateEmail}
        />

        <Field
          label="Password"
          name="passwordOne"
          className={classes.textField}
          component={Input}
          Icon={Security}
          type="password"
          validate={[passwordLength, passwordMatch]}
        />

        <Field
          label="Repeat password"
          name="passwordTwo"
          className={classes.textField}
          component={Input}
          Icon={Security}
          type="password"
          validate={[passwordLength, passwordMatch]}
        />

        <Field
          label="Phone"
          name="phone"
          className={classes.textField}
          component={Input}
          Icon={Phone}
          type="number"
          validate={validatePhone}
        />

        <Button
          type="submit"
          className={classes.submitBtn}
          variant="contained"
          color="primary">
          Register
        </Button>

        {props.error && <p>{props.error.message}</p>}
      </form>
    </Paper>
  </div>
  );
}


export default reduxForm({
  form: 'signUp'
})(withStyles(styles)(SignUpFormBase));