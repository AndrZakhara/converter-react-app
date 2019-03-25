import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { updateProfile, uploadImage } from 'actions';
import { ProfileEdit, ProfileView } from 'components';
import styles from './styles';

class Profile extends Component {
  state = {
    editing: false,
  };

  toggleEditing = () => {
    this.setState(state => ({ editing: !state.editing }));
  };

  save = profile => {
    const { onUpdateProfile } = this.props;
    onUpdateProfile(profile);
    this.toggleEditing();
  };

  handleImageUploadSuccess = url => {
    console.log('heh', url);
    const { onUploadImage, user } = this.props;
    onUploadImage(url, user);
    this.toggleEditing();
  };

  handleImageUploadFailure = e => {
    console.log('meh', e);
  };

  render() {
    const { user, classes } = this.props;
    const { editing } = this.state;

    if (!user) {
      // TODO "NO RESPONSE" FUNCTIONAL
      return <CircularProgress className={classes.loader} />;
    }
    return (
      <div className={classes.container}>
        {editing ? (
          <ProfileEdit
            toggle={this.toggleEditing}
            initialValues={user}
            onSave={this.save}
          />
        ) : (
          <ProfileView
            user={user}
            toggle={this.toggleEditing}
            handleImageUploadSuccess={this.handleImageUploadSuccess}
            handleImageUploadFailure={this.handleImageUploadFailure}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.profile,
});

const mapDispatchToProps = {
  onUpdateProfile: updateProfile,
  onUploadImage: uploadImage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Profile));
