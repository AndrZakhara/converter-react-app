import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { UserList, UserInfo } from '../../components/Admin';
import { getAllUsers } from '../../actions';

class Admin extends Component {
  componentDidMount() {
    console.log('get data');
    getAllUsers();
  }

  render() {
    const { userList } = this.props;
    console.log(this.props);
    console.log('------ul: ', userList);

    return (
      <div>
        <UserList />
        <UserInfo />
      </div>
    );
  }
}

//  Admin.propTypes = {

// };

// function mapStateToProps(state){
//   return {
//     users: state.store,
//   }
// }

// export default connect(mapStateToProps)(Admin);

export default connect(
  state => ({
    userList: state.userReducer.userList,
  }),
  { getAllUsers },
)(Admin);
