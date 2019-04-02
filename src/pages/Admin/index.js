import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { func, shape, string } from 'prop-types';
import { userType, usersFilteredType } from 'types';

import withStyles from '@material-ui/core/styles/withStyles';

import { UserList, UserInfo, Modal } from 'components';
import {
  getUsersRequest as getAllUsersAction,
  setSelectedUser as setSelectedUserAction,
  setFilter as setFilterAction,
  closeModal as closeModalAction,
  openModal as openModalAction,
  resetPasswordRequest as resetPasswordRequestAction,
} from 'actions';
import styles from './style';
import getFilteredUserList from './selectors';

class Admin extends Component {
  componentDidMount() {
    const { getUsersRequest } = this.props;
    getUsersRequest();
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
      message,
      resetPasswordRequest,
      isQuery,
      isSuccess,
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
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          handleClick={resetPasswordRequest}
          modalMessage={message}
          isLoading={isQuery}
          isSuccess={isSuccess}
        />
      </div>
    );
  }
}

Admin.propTypes = {
  getUsersRequest: func.isRequired,
  setSelectedUser: func.isRequired,
  setFilter: func.isRequired,
  resetPasswordRequest: func.isRequired,
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

const mapStateToProps = ({ admin, modal }) => {
  const userListFiltered = getFilteredUserList(admin);
  const { selectedUser, filterValue, isQuery, isSuccess } = admin;
  const { isModalOpen, message } = modal;

  return {
    userListFiltered,
    selectedUser,
    filterValue,
    isModalOpen,
    message,
    isQuery,
    isSuccess,
  };
};

const mapDispatchToProps = {
  getUsersRequest: getAllUsersAction,
  setSelectedUser: setSelectedUserAction,
  setFilter: setFilterAction,
  closeModal: closeModalAction,
  openModal: openModalAction,
  resetPasswordRequest: resetPasswordRequestAction,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Admin);
