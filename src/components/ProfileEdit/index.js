import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  withStyles,
  Typography,
} from '@material-ui/core';

import AccountIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import DateIcon from '@material-ui/icons/Phone';
import { validateProfile } from '../../utils/validate';
import Input from '../Input/index';

import styles from './styles';

const ProfileEdit = ({ handleSubmit, classes, onSave, toggle }) => (
  <div className={classes.container}>
    <Typography variant="display1" align="center">
      Edit profile
    </Typography>
    <form onSubmit={handleSubmit(onSave)} className={classes.form}>
      <Card>
        <CardContent>
          <Field
            name="name"
            component={Input}
            label="Name"
            Icon={AccountIcon}
            className={classes.input}
          />
          <Field
            name="email"
            component={Input}
            label="Name"
            Icon={MailIcon}
            className={classes.input}
          />
          <Field
            name="phone"
            component={Input}
            label="Phone Number"
            Icon={DateIcon}
            className={classes.input}
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button onClick={toggle} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  </div>
);

export default reduxForm({
  form: 'editProfile',
  validate: validateProfile,
})(withStyles(styles)(ProfileEdit));
