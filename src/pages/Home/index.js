import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnhancedTable from 'components/EnhancedTable/EnhancedTable';
import { fetchUserDials } from 'actions/user.actions';

class Home extends Component {
  componentDidMount() {
    const { fetchUserDials: defState } = this.props;
    defState();
  }

  render() {
    const { data } = this.props;
    return <EnhancedTable allUserData={data} />;
  }
}

const select = store => {
  const data = store.user.userDials;

  return { data };
};

export default connect(
  select,
  {
    fetchUserDials,
  },
)(Home);
