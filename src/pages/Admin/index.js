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
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <UserList {...this.props} />
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
    userListFiltered: getFilteredUserList(state),
    selectedUser: state.adminReducer.selectedUser,
    filterValue: state.adminReducer.filterValue,
    userList: state.adminReducer.userList,
  }),
  {
    getAllUsers,
    setSelectedUser,
    setFilter,
  },
)(withStyles(styles)(Admin));
