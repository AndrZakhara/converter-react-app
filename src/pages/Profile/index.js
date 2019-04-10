import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from 'actions';
import { ProfileEdit, ProfileView } from 'components';
import { Сontainer, Loader } from './styles';

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

  render() {
    const { user } = this.props;
    const { editing } = this.state;

    if (!user) {
      // TODO "NO RESPONSE" FUNCTIONAL

      // eslint-disable-next-line react/jsx-pascal-case
      return <Сontainer />;
    }
    return (
      <Loader>
        {editing ? (
          <ProfileEdit
            toggle={this.toggleEditing}
            initialValues={user}
            onSave={this.save}
          />
        ) : (
          <ProfileView user={user} toggle={this.toggleEditing} />
        )}
      </Loader>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.profile,
});

const mapDispatchToProps = {
  onUpdateProfile: updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
