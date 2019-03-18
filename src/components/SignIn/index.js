import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'recompose';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MailIcon from '@material-ui/icons/Mail';
import Security from '@material-ui/icons/Security';

import Input from 'components/Input';
import { validateEmail, passwordLength } from 'utils/validate';
import styles from './style';

const SignInForm = ({ classes, onSubmit, errorMsg, handleSubmit }) => (
    <div className={classes.formContainer}>
      <div className={classes.converterTitle}>Sign In</div>
      <Paper className={classes.form}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Field
            label="Email"
            name="email"
            type="email"
            className={classes.textField}
            Icon={MailIcon}
            component={Input}
            validate={validateEmail}
          />

          <Field
            label="Password"
            name="password"
            type="password"
            className={classes.textField}
            component={Input}
            Icon={Security}
            validate={passwordLength}
          />
          <div className={classes.errorMsg}>{errorMsg}</div>
          <Button
            type="submit"
            className={classes.submitBtn}
            variant="contained"
            color="primary">
            Log In
          </Button>
        </form>
      </Paper>
    </div>
  );

export default compose(
  reduxForm({ form: 'signIn' }),
  withStyles(styles),
)(SignInForm);
