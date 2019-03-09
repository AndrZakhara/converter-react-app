import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserList, UserInfo } from '../../components/Admin';

class Admin extends Component {
  render() {
    return (
      <div>
        <UserList />
        <UserInfo />
      </div>
    );
  }
}

 Admin.propTypes = {

};

export default Admin;