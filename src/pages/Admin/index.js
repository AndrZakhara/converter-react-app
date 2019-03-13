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

const select = state => {
  const userListFiltered = getFilteredUserList(state);
  const { selectedUser, filterValue, userList } = state.adminReducer;

  return { userListFiltered, selectedUser, filterValue, userList };
};

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  setSelectedUser: id => dispatch(setSelectedUser(id)),
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(
  select,
  mapDispatchToProps,
)(withStyles(styles)(Admin));
