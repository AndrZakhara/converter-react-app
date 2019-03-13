import React from 'react';
import { reduxForm, Field } from "redux-form";
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from 'components/Input';

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
    width: '90%',
    marginBottom: '20px'
  },
  submitBtn: {
    display: 'block',
    margin: '0 auto'
  }
});


function SignUpFormBase(props) {
  const { classes, isInvalid } = props;
  console.log(isInvalid);

  return (
  <div className = {classes.formContainer}>
    <Paper className={classes.form}>
      <form noValidate autoComplete="off" onSubmit={props.onSubmit}>
        <Field
          label="UserName"
          name="username"
          className={classes.textField}
          component={Input}
          Icon={AccountIcon}
          type='text'
          />
        <Field
          label="Email"
          name="email"
          className={classes.textField}
          Icon={MailIcon}
          component={Input}
        />

        <Field
          label="Password"
          name="passwordOne"
          className={classes.textField}
          component={Input}
          Icon={Security}
        />

        <Field
          label="Password"
          name="passwordTwo"
          className={classes.textField}
          component={Input}
          Icon={Security}
        />

        <Field
          label="Phone"
          name="phone"
          className={classes.textField}
          component={Input}
          Icon={Phone}
        />

        <Button disabled={isInvalid} type='submit' className={classes.submitBtn} variant="contained" color="primary">
          Register
        </Button>

        {props.error && <p>{props.error.message}</p>}
      </form>
    </Paper>
  </div>
  );
}


export default reduxForm({
  form: "signUp"
})(withStyles(styles)(SignUpFormBase));