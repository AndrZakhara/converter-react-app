import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';
import { userType, usersFilteredType } from 'types';
import withStyles from '@material-ui/core/styles/withStyles';
import { UserList, UserInfo, EnhancedTable } from 'components';
import {
  getAllUsers as getAllUsersAction,
  setSelectedUser as setSelectedUserAction,
  setFilter as setFilterAction,
} from 'actions';
import { defUser } from 'mocks/db'; // TODO add real api
import getFilteredUserList from './selectors';
import styles from './style';

class Admin extends Component {
  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
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
        <div>
          {selectedUser ? (
            <UserInfo selectedUser={selectedUser} />
          ) : (
            <h2 className={classes.infoHeader}>Any user selected.</h2>
          )}
          {selectedUser && <EnhancedTable allUserData={defUser} />}
        </div>
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
  classes: shape({
    wrapper: string.isRequired,
    infoHeader: string.isRequired,
  }).isRequired,
};

Admin.defaultProps = {
  selectedUser: null,
  userListFiltered: null,
};

const mapStateToProps = ({ users }) => {
  const userListFiltered = getFilteredUserList(users);
  const { selectedUser, filterValue } = users;

  return { userListFiltered, selectedUser, filterValue };
};

const mapDispatchToProps = {
  getAllUsers: getAllUsersAction,
  setSelectedUser: setSelectedUserAction,
  setFilter: setFilterAction,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Admin);
