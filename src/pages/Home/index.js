import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserDials } from '../../actions/user';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';

class Home extends Component {
  componentDidMount() {
    this.props.fetchUserDials();
  }

  render() {
    const { data } = this.props;
    return (
      <EnhancedTable allUserData={data}/>
  )}
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
