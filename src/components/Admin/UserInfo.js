import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem,
  Divider,
  Grid,
  Paper,
  Avatar,
  ListItemText,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    color: '#999999',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
  },
  infoWrapper: {
    display: 'flex',
  },
  bigAvatar: {
    width: '100px',
    height: '100px',
  },
});

const UserInfo = ({ selectedUser, userList, classes }) => {
  if (selectedUser) {
    const selectedUserData = userList[selectedUser];
    const listElement = Object.keys(selectedUserData).map(item => {
      if (item === 'firstName' || item === 'lastName' || item === 'ava') {
        return null;
      }

      return (
        <Fragment key={item}>
          <ListItem>
            <ListItemText secondary={`${item}: ${selectedUserData[item]}`} />
          </ListItem>
          <Divider />
        </Fragment>
      );
    });
    const { firstName, lastName } = selectedUserData;
    const userName = (
      <Fragment>
        {firstName} {lastName}
      </Fragment>
    );

    return (
      <div className={classes.root}>
        <h2>User info</h2>
        <h3>{userName}</h3>
        <Grid container spacing={24} direction="row" justify="center">
          <Grid item xs={6}>
            <Paper className={`${classes.paper} ${classes.infoWrapper}`}>
              <Avatar src="" alt="avatar" className={classes.bigAvatar} />
              <div>{listElement}</div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <h2>Any selected user</h2>
    </div>
  );
};

UserInfo.propTypes = {
  selectedUser: PropTypes.string,
};

export default withStyles(styles)(UserInfo);
