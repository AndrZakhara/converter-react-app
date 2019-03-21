/* eslint-disable */
import React from 'react';
import { object } from 'prop-types';
import { userType } from 'types';
import { spacing } from '@material-ui/system';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import styles from './style';

const UserInfo = ({ selectedUser, classes }) => {
  const { firstName, lastName, ava, email, role, phone } = selectedUser;

  return (
    <div className={classes.root}>
      <h3>
        {firstName && lastName ? `${firstName} ${lastName}` : 'Unknown User'}
      </h3>
      <Grid container spacing={24} direction="row" justify="center">
        <Grid item xs={6}>
          <Paper className={`${classes.paper} ${classes.infoWrapper}`}>
            <Avatar src={ava} alt="avatar" className={classes.bigAvatar} />
            <div>
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
              <Button className={classes.button} variant="contained" color="primary">Reset password</Button>
              <Button className={classes.button} variant="contained" color="primary">Delete user</Button>
              <Button className={classes.button} variant="contained" color="primary">Change role</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

UserInfo.propTypes = {
  selectedUser: userType.isRequired,
  classes: object.isRequired,
};

export default withStyles(styles)(UserInfo);
