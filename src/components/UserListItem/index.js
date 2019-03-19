/* eslint-disable */
import React from 'react';
import { func, object } from 'prop-types';
import { userType } from 'types';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import styles from './style';

const UserListItem = props => {
  const { classes, user, handleClickUser } = props;
  const { firstName, lastName, ava, email } = user;
  return (
    <ListItem
      button
      className={classes.itemListPadding}
      onClick={() => handleClickUser(user)}>
      <ListItemIcon>
        <Avatar src={ava} alt="avatar" />
      </ListItemIcon>
      <ListItemText
        primary={
          firstName || lastName ? `${firstName} ${lastName}` : 'Unknown User'
        }
        secondary={`email: ${email || ' - '}`}
      />
    </ListItem>
  );
};

UserListItem.propTypes = {
  user: userType.isRequired,
  handleClickUser: func.isRequired,
  classes: object.isRequired,
};

export default withStyles(styles)(UserListItem);
