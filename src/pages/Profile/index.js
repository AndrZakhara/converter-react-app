/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchUser, saveProfile } from 'actions';
import { ProfileEdit, ProfileView } from 'components';
import styles from './styles';

class Profile extends Component {
  state = {
    editing: false,
  };

  componentDidMount() {
    this.props.onFetchUser();
  }

  toggleEditing = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  save = profile => {
    this.props.onSaveProfile(profile);
    this.toggleEditing();
  };

  render() {
    const { user, classes } = this.props;
    if (!user) {
      // TODO "NO RESPONSE" FUNCTIONAL
      return <CircularProgress className={classes.loader} />;
    }
    return (
      <div className={classes.container}>
        {this.state.editing ? (
          <ProfileEdit
            toggle={this.toggleEditing}
            initialValues={user}
            onSave={this.save}
          />
        ) : (
          <ProfileView user={user} toggle={this.toggleEditing} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.profile,
});

const mapDispatchToProps = {
  onFetchUser: fetchUser,
  onSaveProfile: saveProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Profile));
