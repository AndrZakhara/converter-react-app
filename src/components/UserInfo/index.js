import React from 'react';
import { userType } from 'types';

import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import styles from './style';

const UserInfo = ({ selectedUser, classes, openModal }) => {
  const { firstName, lastName, ava, email, role, phone } = selectedUser;

  return (
    <Paper className={classes.paperWrapper}>
      <div className={classes.headerWrapper}>
        <Avatar src={ava} alt="avatar" className={classes.bigAvatar} />
        <h2 className={classes.header}>
          {firstName && lastName ? `${firstName} ${lastName}` : 'Unknown User'}
        </h2>
      </div>
      <div className={classes.infoBodyWrapper}>
        <div className={classes.userInfoWrapper}>
          <ListItem>
            <ListItemText secondary={`Email: ${email || ' - '}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary={`Phone: ${phone || ' - '}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary={`Role: ${role || 'user'}`} />
          </ListItem>
        </div>
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={openModal}>
            Reset password
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={openModal}>
            Delete user
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={openModal}>
            Change role
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={openModal}>
            User activity
          </Button>
        </div>
      </div>
    </Paper>
  );
};

UserInfo.propTypes = {
  selectedUser: userType.isRequired,
};

export default withStyles(styles)(UserInfo);
