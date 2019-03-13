import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
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
    marginBottom: '20px',
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
  const { userListFiltered, classes, setSelectedUser, setFilter } = props;
  let listItems = null;

  if (userListFiltered !== undefined) {
    listItems = Object.keys(userListFiltered).map(item => (
      <UserListItem
        userItem={userListFiltered[item]}
        key={item}
        id={item}
        setSelectedUser={setSelectedUser}
      />
    ));
  }

  return (
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
      <Paper className={classes.listWrapper}>{listItems}</Paper>
    </List>
  );
};

UserList.propTypes = {
  // userList: PropTypes.object,
  setFilter: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserList);
