import React from 'react';
import { func } from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { UserListItem } from 'components';
import styles from './style';

const UserList = ({
  userListFiltered,
  classes,
  setSelectedUser,
  setFilter,
}) => (
  <List component="nav" className={classes.root}>
    <Paper className={classes.searchWrapper}>
      <InputBase
        className={classes.input}
        placeholder="Search user"
        onChange={e => setFilter(e.target.value)}
      />
      <Button disabled aria-label="Search">
        <SearchIcon />
      </Button>
    </Paper>
    <Paper className={classes.listWrapper}>
      {userListFiltered &&
        userListFiltered.map(item => (
          <UserListItem
            user={item}
            key={item.id}
            getSetSelectedUser={setSelectedUser}
          />
        ))}
    </Paper>
  </List>
);

UserList.propTypes = {
  // TODO Add proptypes
  setFilter: func.isRequired,
};

export default withStyles(styles)(UserList);
