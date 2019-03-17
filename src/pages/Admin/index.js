import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { userType, usersFilteredType } from 'types';
import withStyles from '@material-ui/core/styles/withStyles';
import { UserList, UserInfo } from 'components';
import { getAllUsers, setSelectedUser, setFilter } from 'actions';
import getFilteredUserList from './selectors';
import styles from './style';

class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const {
      classes,
      selectedUser,
      userListFiltered,
      setSelectedUser,
      setFilter,
    } = this.props;
    return (
      <div className={classes.wrapper}>
        <UserList
          userListFiltered={userListFiltered}
          setSelectedUser={setSelectedUser}
          setFilter={setFilter}
        />
        {selectedUser ? (
          <UserInfo selectedUser={selectedUser} />
        ) : (
          <h2 className={classes.infoHeader}>Any user selected.</h2>
        )}
      </div>
    );
  }
}

Admin.propTypes = {
  getAllUsers: func.isRequired,
  setSelectedUser: func.isRequired,
  setFilter: func.isRequired,
  selectedUser: userType,
  userListFiltered: usersFilteredType,
  classes: object.isRequired,
};

const select = ({ users }) => {
  const userListFiltered = getFilteredUserList(users);
  const { selectedUser, filterValue } = users;

  return { userListFiltered, selectedUser, filterValue };
};

const actionCreators = {
  getAllUsers,
  setSelectedUser,
  setFilter,
};

export default connect(
  select,
  actionCreators,
)(withStyles(styles)(Admin));
