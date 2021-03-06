import React from 'react';
import { func } from 'prop-types';

import uploadImage from 'components/UploadImage/index';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';

import EditIcon from '@material-ui/icons/Edit';
import { userType } from 'types';

import styles from './styles';

const CardMediaWithUpload = uploadImage()(CardMedia);

const ProfileView = ({ user, classes, toggle }) => (
  <div className={classes.container}>
    <div className={classes.header}>
      <Typography variant="display1">Profile</Typography>
      <IconButton onClick={toggle} color="primary">
        <EditIcon />
      </IconButton>
    </div>
    <Card className={classes.cardWrapper}>
      <CardContent>
        <Typography variant="headline">{user.firstName}</Typography>
        <Typography variant="headline">{user.lastName}</Typography>
        <Typography variant="subheading">{user.phone}</Typography>
        <Typography variant="subheading" color="primary">
          {user.email}
        </Typography>
        <Typography variant="subheading">{user.role}</Typography>
      </CardContent>
      <CardMediaWithUpload className={classes.media} image={user.ava} />
    </Card>
  </div>
);

ProfileView.propTypes = {
  user: userType.isRequired,
  toggle: func.isRequired,
};

export default withStyles(styles)(ProfileView);
