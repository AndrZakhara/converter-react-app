import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { userType, usersFilteredType } from 'types';
import { UserInfo, Modal } from 'components';
import {
  getAllUsers as getAllUsersAction,
  setSelectedUser as setSelectedUserAction,
  setFilter as setFilterAction,
  closeModal as closeModalAction,
  openModal as openModalAction,
} from 'actions';
import {
  Wrapper,
  LeftSactionWrapper,
  InfoHeader,
  SectionWrapper,
} from './style';
import getFilteredUserList from './selectors';

class Admin extends Component {
  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const {
      selectedUser,
      userListFiltered,
      setSelectedUser,
      setFilter,
      isModalOpen,
      closeModal,
      openModal,
    } = this.props;

    return (
      <Wrapper>
        <LeftSactionWrapper
          userListFiltered={userListFiltered}
          setSelectedUser={setSelectedUser}
          setFilter={setFilter}
        />
        <SectionWrapper>
          {selectedUser ? (
            <UserInfo openModal={openModal} selectedUser={selectedUser} />
          ) : (
            <InfoHeader>Any user selected.</InfoHeader>
          )}
        </SectionWrapper>
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </Wrapper>
    );
  }
}

Admin.propTypes = {
  getAllUsers: func.isRequired,
  setSelectedUser: func.isRequired,
  setFilter: func.isRequired,
  selectedUser: userType,
  userListFiltered: usersFilteredType,
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
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Admin);
