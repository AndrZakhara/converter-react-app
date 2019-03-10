import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
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

UserListItem.propTypes = {};

export default withStyles(styles)(UserListItem);
