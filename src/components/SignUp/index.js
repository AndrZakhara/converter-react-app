import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'recompose';
import { Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AccountIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Security from '@material-ui/icons/Security';
import Phone from '@material-ui/icons/Phone';

import Input from 'components/Input';
import {
  validateTextEmpty,
  validateEmail,
  validatePhone,
  passwordLength,
  passwordMatch,
} from 'utils/validate';
import normalizePhone from 'utils/mask';
import styles from './style';

const SignUpForm = ({
  classes,
  handleSubmit,
  onSubmit,
  errorMsg,
  isLoggedIn,
}) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.formContainer}>
      <div className={classes.logoutTitle}>Sign Up</div>
      <Paper className={classes.form}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Field
            label="First name"
            name="firstName"
            className={classes.textField}
            component={Input}
            Icon={AccountIcon}
            type="text"
            validate={validateTextEmpty}
          />

          <Field
            label="Second name"
            name="lastName"
            className={classes.textField}
            component={Input}
            Icon={AccountIcon}
            type="text"
            validate={validateTextEmpty}
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
            type="tel"
            validate={validatePhone}
            normalize={normalizePhone}
          />
          <div className={classes.errorMsg}>{errorMsg && errorMsg.message}</div>
          <Button
            type="submit"
            className={classes.submitBtn}
            variant="contained"
            color="primary">
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default compose(
  reduxForm({ form: 'signUp' }),
  withStyles(styles),
)(SignUpForm);
