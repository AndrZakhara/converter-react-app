import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { UserList, UserInfo } from '../../components/Admin';
import { getAllUsers } from '../../actions';

const styles = () => ({
  wrapper: {
    display: 'flex',
  },
});

class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { userList, classes } = this.props;

    return (
      <div className={classes.wrapper}>
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
)(withStyles(styles)(Admin));
