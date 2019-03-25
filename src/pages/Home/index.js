import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from 'components/EnhancedTable/EnhancedTable';
import { fetchUserDials } from 'actions/user.actions';

class Home extends Component {
  componentDidMount() {
    const { fetchUserDials: defState, uid } = this.props;
    defState(uid);
  }

  render() {
    const { data } = this.props;
    return <EnhancedTable allUserData={data} />;
  }
}

const select = store => {
  const data = store.user.userDials;
  // eslint-disable-next-line prefer-destructuring
  const uid = store.user.profile.uid;
  return { data, uid };
};

export default connect(
  select,
  {
    fetchUserDials,
  },
)(Home);
