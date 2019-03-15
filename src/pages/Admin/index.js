import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { UserList, UserInfo } from 'components/Admin';
import { getAllUsers, setSelectedUser } from 'actions/adminPageActons';

const adminPageHeight = window.innerHeight - 58 - 64;
const styles = () => ({
  wrapper: {
    display: 'flex',
    minHeight: adminPageHeight,
    paddingTop: '20px',
  },
});

class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { userList, classes, setSelectedUser } = this.props;

    return (
      <div className={classes.wrapper}>
        <UserList userList={userList} setSelectedUser={setSelectedUser} />
        <UserInfo {...this.props} />
      </div>
    );
  }
}

Admin.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    userList: state.userReducer.userList,
    selectedUser: state.userReducer.selectedUser,
  }),
  {
    getAllUsers,
    setSelectedUser,
  },
)(withStyles(styles)(Admin));
