import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../actions/enhancedTable';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';

class Home extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { data } = this.props;
    return (
      <EnhancedTable allUserData={data}/>
  )}
}

const select = store => {
  const data = store.enhancedTableReducer.userData;

  return { data };
};

export default connect(
  select,
  {
    getUserData,
  },
)(Home);
