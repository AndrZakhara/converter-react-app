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
  const { classes, userItem, id, setSelectedUser } = props;
  return (
    <ListItem
      button
      className={classes.itemListPadding}
      onClick={() => setSelectedUser(id)}>
      <ListItemIcon>
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="avatar"
        />
      </ListItemIcon>
      <ListItemText
        primary={`${userItem.firstName} ${userItem.lastName}`}
        secondary={`email: ${userItem.email}`}
      />
    </ListItem>
  );
};

UserListItem.propTypes = {
  classes: PropTypes.object,
  userItem: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    ava: PropTypes.array
  }),
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(UserListItem);
