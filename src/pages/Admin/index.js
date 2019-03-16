import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { UserList, UserInfo } from 'components/Admin';
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

    const userInfoElem = selectedUser ? (
      <UserInfo selectedUser={selectedUser} />
    ) : (
      <h2 className={classes.infoHeader}>Any user selected.</h2>
    );

    return (
      <div className={classes.wrapper}>
        <UserList
          userListFiltered={userListFiltered}
          setSelectedUser={setSelectedUser}
          setFilter={setFilter}
        />
        {userInfoElem}
      </div>
    );
  }
}

Admin.propTypes = {
  getAllUsers: func.isRequired,
  setSelectedUser: func.isRequired,
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
