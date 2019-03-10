import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UserList, UserInfo } from '../../components/Admin';
import { getAllUsers } from '../../actions';

class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { userList } = this.props;

    return (
      <div>
        <UserList userList={userList} />
        <UserInfo />
      </div>
    );
  }
}

Admin.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    userList: state.userReducer.userList,
  }),
  { getAllUsers },
)(Admin);
