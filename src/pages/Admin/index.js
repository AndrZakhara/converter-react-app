import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { func, shape, string } from 'prop-types';
import { userType, usersFilteredType } from 'types';

import withStyles from '@material-ui/core/styles/withStyles';

import { UserList, UserInfo, Modal } from 'components';
import {
  getAllUsers as getAllUsersAction,
  setSelectedUser as setSelectedUserAction,
  setFilter as setFilterAction,
  closeModal as closeModalAction,
  openModal as openModalAction,
} from 'actions';
import styles from './style';
import getFilteredUserList from './selectors';

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
      isModalOpen,
      closeModal,
      openModal,
    } = this.props;

    return (
      <div className={classes.wrapper}>
        <UserList
          className={classes.leftSactionWrapper}
          userListFiltered={userListFiltered}
          setSelectedUser={setSelectedUser}
          setFilter={setFilter}
        />
        <div className={classes.sectionWrapper}>
          {selectedUser ? (
            <UserInfo openModal={openModal} selectedUser={selectedUser} />
          ) : (
            <h2 className={classes.infoHeader}>Any user selected.</h2>
          )}
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
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

const mapStateToProps = ({ users, modal }) => {
  const userListFiltered = getFilteredUserList(users);
  const { selectedUser, filterValue } = users;
  const { isModalOpen } = modal;

  return { userListFiltered, selectedUser, filterValue, isModalOpen };
};

const mapDispatchToProps = {
  getAllUsers: getAllUsersAction,
  setSelectedUser: setSelectedUserAction,
  setFilter: setFilterAction,
  closeModal: closeModalAction,
  openModal: openModalAction,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Admin);
