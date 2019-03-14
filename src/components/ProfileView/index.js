/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import styles from './styles';

const ProfileView = ({ user, classes, toggle }) => (
  <div className={classes.container}>
    <div className={classes.header}>
      <Typography variant="display1">Profile</Typography>
      <IconButton onClick={toggle} color="primary">
        <EditIcon />
      </IconButton>
    </div>
    <Card>
      <CardContent>
        <Typography variant="headline">{user.firstName}</Typography>
        <Typography variant="headline">{user.lastName}</Typography>
        <Typography variant="subheading">{user.phone}</Typography>
        <Typography variant="subheading" color="primary">
          {user.email}
        </Typography>
        <Typography variant="subheading">{user.role}</Typography>
      </CardContent>
    </Card>
  </div>
);

ProfileView.propTypes = {
  user: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProfileView);
