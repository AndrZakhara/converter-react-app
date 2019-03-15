import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDialsSuccess } from '../../actions';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';

class Home extends Component {
  componentDidMount() {
    this.props.fetchDialsSuccess();
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
    fetchDialsSuccess,
  },
)(Home);
