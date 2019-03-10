<<<<<<< HEAD
import React from 'react';
=======
import React, { Fragment } from 'react';
>>>>>>> 7ed3d222f680af26fb4f1cd38614e5df8f5dad95
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UserListItem from './UserListItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
  },
});

const UserList = props => {
  const { userList, classes } = props;

  let listItems = null;
  if (userList !== undefined) {
    listItems = Object.keys(userList).map(item => (
      <UserListItem userItem={userList[item]} key={item} id={item} />
    ));
  }

  return (
    <List component="nav" className={classes.root}>
      {listItems}
    </List>
  );
};

UserList.propTypes = {
<<<<<<< HEAD
  // userList: PropTypes.object,
=======
  userList: PropTypes.object,
>>>>>>> 7ed3d222f680af26fb4f1cd38614e5df8f5dad95
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
