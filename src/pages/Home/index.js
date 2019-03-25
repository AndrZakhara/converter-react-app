import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from 'components/EnhancedTable/EnhancedTable';
// import { fetchUserDials } from 'actions/user.actions';
import { fetchUserDialsAction } from 'actions/user.actions';

class Home extends Component {
  componentDidMount() {
    // console.log('before');
    const { fetchUserDials, uid } = this.props;
    // console.log(defState, uid);
    fetchUserDials(uid);
  }

  render() {
    console.log('Home');
    const { data } = this.props;
    console.log('data', data);
    return <EnhancedTable allUserData={data} />;
  }
}

// const select = ({ user, auth }) => {
//   const data = user.userDials;
//   const { uid } = auth;
//   return { data, uid };
// };

const mapStateToProps = ({ user, auth }) => ({
  data: user.userDials,
  uid: auth,
});

const mapDispatchToProps = {
  fetchUserDials: fetchUserDialsAction,
};
// export default connect(
//   select,
//   {
//     fetchUserDials,
//   },
// )(Home);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
