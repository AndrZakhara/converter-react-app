import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { UserList, UserInfo } from '../../components/Admin';
import {
  getAllUsers,
  setSelectedUser,
  setFilter,
} from '../../actions/adminPage';
import getFilteredUserList from './selectors';

const styles = () => ({
  wrapper: {
    display: 'flex',
    maxHeight: '300px',
    paddingTop: '20px',
  },
});

class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const {
      classes,
      userList,
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
        <UserInfo userList={userList} selectedUser={selectedUser} />
      </div>
    );
  }
}

Admin.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
};

const select = ({ users }) => {
  const userListFiltered = getFilteredUserList(users);
  const { selectedUser, filterValue, userList } = users;

  return { userListFiltered, selectedUser, filterValue, userList };
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
