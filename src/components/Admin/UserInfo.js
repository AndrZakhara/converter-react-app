import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

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

const UserInfo = ({ selectedUser, classes }) => {
  if (selectedUser) {
    const { firstName, lastName, ava, email, role, phone } = selectedUser;

    return (
      <div className={classes.root}>
        <h2>User info</h2>
        <h3>{`${firstName} ${lastName}`}</h3>
        <Grid container spacing={24} direction="row" justify="center">
          <Grid item xs={6}>
            <Paper className={`${classes.paper} ${classes.infoWrapper}`}>
              <Avatar src={ava} alt="avatar" className={classes.bigAvatar} />
              <div>
                <ListItem>
                  <ListItemText secondary={`Email: ${email}`} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText secondary={`Phone: ${phone}`} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText secondary={`Role: ${role}`} />
                </ListItem>
              </div>
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

UserInfo.propTypes = { //TODO Proptypes
  selectedUser: PropTypes.object,
};

export default withStyles(styles)(UserInfo);
