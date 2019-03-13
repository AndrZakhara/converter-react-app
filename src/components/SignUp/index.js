import React from 'react';
import { reduxForm, Field } from 'redux-form';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '../Input';
import { validateProfile } from '../../utils/validate'

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
  const { classes } = props;

  return (
  <div className = {classes.formContainer}>
    <Paper className={classes.form}>
      <form noValidate autoComplete="off" onSubmit={props.onSubmit}>
        <Field
          label="First name"
          name="firstName"
          className={classes.textField}
          component={Input}
          Icon={AccountIcon}
          type="text"
        />

        <Field
          label="Second name"
          name="secondName"
          className={classes.textField}
          component={Input}
          Icon={AccountIcon}
          type="text"
        />

        <Field
          label="Email"
          name="email"
          className={classes.textField}
          Icon={MailIcon}
          component={Input}
          type="email"
        />

        <Field
          label="Password"
          name="passwordOne"
          className={classes.textField}
          component={Input}
          Icon={Security}
          type="password"
        />

        <Field
          label="Repeat password"
          name="passwordTwo"
          className={classes.textField}
          component={Input}
          Icon={Security}
          type="password"
        />

        <Field
          label="Phone"
          name="phone"
          className={classes.textField}
          component={Input}
          Icon={Phone}
          type="number"
        />

        <Button
          // disabled={isInvalid}
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
  form: 'signUp',
  validate: validateProfile
})(withStyles(styles)(SignUpFormBase));