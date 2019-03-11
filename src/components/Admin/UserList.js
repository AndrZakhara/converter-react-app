import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UserListItem from './UserListItem';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 320,
    overflowY: 'scroll',
    maxHeight: '70%',
  },
});

const UserList = props => {
  const { userList, classes, setSelectedUser } = props;
  let listItems = null;

  if (userList !== undefined) {
    listItems = Object.keys(userList).map(item => (
      <UserListItem
        userItem={userList[item]}
        key={item}
        id={item}
        setSelectedUser={setSelectedUser}
      />
    ));
  }

  return (
    <List component="nav" className={classes.root}>
      <Paper elevation={1}>
        <InputBase className={classes.input} placeholder="Search user" />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} />
      
      {listItems}
      </Paper>
    </List>
  );
};

UserList.propTypes = {
  // userList: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
