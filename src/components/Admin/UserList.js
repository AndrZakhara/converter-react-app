import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UserListItem from './UserListItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 320,
    // backgroundColor: theme.palette.background.paper,
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
  // userList: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
