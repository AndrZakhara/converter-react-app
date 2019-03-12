import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import UserListItem from './UserListItem';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 320,
    maxHeight: '70%',
  },
  searchWrapper: {
    display: 'flex',
    paddingLeft: '20px',
    alighnItems: 'center',
    margin: '0px 3px 5px 8px',
  },
  listWrapper: {
    overflowY: 'scroll',
    maxHeight: '300',
    margin: '0px 3px 5px 8px',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  divider: {
    width: 1,
    height: 36,
    margin: 4,
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
      <Paper className={classes.searchWrapper}>
        <InputBase className={classes.input} placeholder="Search user" />
        <Button disabled aria-label="Search">
          <SearchIcon />
        </Button>
      </Paper>
      <Paper className={classes.listWrapper}>{listItems}</Paper>
    </List>
  );
};

UserList.propTypes = {
  // userList: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
