import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = () => ({
  itemListPadding: {
    padding: '2px 16px',
  },
});

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

UserListItem.propTypes = { //TODO fix proptypes
  classes: PropTypes.object,
  userItem: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    ava: PropTypes.array
  }),
};

export default withStyles(styles)(UserListItem);
