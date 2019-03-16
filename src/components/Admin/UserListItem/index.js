import React from 'react';
import { object, shape, array, string } from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import styles from './style';

const UserListItem = props => {
  const { classes, user, getSetSelectedUser } = props;
  const { firstName, lastName, ava, email } = user;
  return (
    <ListItem
      button
      className={classes.itemListPadding}
      onClick={() => getSetSelectedUser(user)}>
      <ListItemIcon>
        <Avatar src={ava} alt="avatar" />
      </ListItemIcon>
      <ListItemText
        primary={`${firstName} ${lastName}`}
        secondary={`email: ${email}`}
      />
    </ListItem>
  );
};

UserListItem.propTypes = {
  // TODO fix proptypes
  classes: object,
  userItem: shape({
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    role: string,
    ava: array,
  }),
};

export default withStyles(styles)(UserListItem);
