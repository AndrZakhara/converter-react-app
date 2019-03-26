import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from 'components/EnhancedTable/EnhancedTable';
import { fetchUserDialsAction } from 'actions/user.actions';

class Home extends Component {
  componentDidMount() {
    const { fetchUserDials, uid } = this.props;
    fetchUserDials(uid);
  }

  render() {
    const { data } = this.props;
    return <EnhancedTable allUserData={data} />;
  }
}

const mapStateToProps = ({ user, auth }) => ({
  data: user.userDials,
  uid: auth,
});

const mapDispatchToProps = {
  fetchUserDials: fetchUserDialsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
