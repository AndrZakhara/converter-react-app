import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from 'components/EnhancedTable/EnhancedTable';
import { fetchUserDials } from 'actions/user.actions';

class Home extends Component {
  componentDidMount() {
    const { fetchUserDials: defState, uid } = this.props;
    console.log(this.props);
    defState(uid);
  }

  render() {
    const { data } = this.props;
    return <EnhancedTable allUserData={data} />;
  }
}

const select = ({ user }) => {
  const data = user.userDials;
  const { uid } = user.profile;
  return { data, uid };
};

export default connect(
  select,
  {
    fetchUserDials,
  },
)(Home);
