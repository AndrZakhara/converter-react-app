import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './style';

const UserInfo = ({ selectedUser, classes }) => {
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
};

UserInfo.propTypes = {
  selectedUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    ava: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    phone: PropTypes.string,
  }),
};

UserInfo.defaultProps = {
  selectedUser: {
    firstName: '',
    lastName: '',
    ava: '', //TODO add default value
    email: ' - ',
    role: 'user',
    phone: ' - ',
  },
};

export default withStyles(styles)(UserInfo);
