<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
=======
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
>>>>>>> 7ed3d222f680af26fb4f1cd38614e5df8f5dad95
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

<<<<<<< HEAD
const styles = () => ({
=======
const styles = theme => ({
>>>>>>> 7ed3d222f680af26fb4f1cd38614e5df8f5dad95
  itemListPadding: {
    padding: '2px 16px',
  },
});

const UserListItem = props => {
  const { classes, userItem, id } = props;
  return (
    <ListItem
      button
      className={classes.itemListPadding}
      onClick={() => console.log(id)}>
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

<<<<<<< HEAD
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
=======
UserListItem.propTypes = {};
>>>>>>> 7ed3d222f680af26fb4f1cd38614e5df8f5dad95

export default withStyles(styles)(UserListItem);
