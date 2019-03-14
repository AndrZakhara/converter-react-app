import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../actions/enhancedTable';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';

class Home extends Component {
  render() {
    return (
      <EnhancedTable />
  )}
}

const select = store => {
  const data = store.enhancedTableReducer.getUserData;

  return { data };
};

export default connect(
  select,
  {
    getUserData,
  },
)(Home);
