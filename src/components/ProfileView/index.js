import React from 'react';
import { func } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import { userType } from 'types';

import { Container, Media, СardWrapper, Header, StyledIcon } from './styles';

const ProfileView = ({ user, toggle }) => (
  <Container>
    <Header>
      <Typography variant="display1">Profile</Typography>
      <StyledIcon onClick={toggle}>
        <EditIcon />
      </StyledIcon>
    </Header>
    {/* eslint-disable-next-line  */}
    <СardWrapper>
      <CardContent>
        <Typography variant="headline">{user.firstName}</Typography>
        <Typography variant="headline">{user.lastName}</Typography>
        <Typography variant="subheading">{user.phone}</Typography>
        <Typography variant="subheading" color="primary">
          {user.email}
        </Typography>
        <Typography variant="subheading">{user.role}</Typography>
      </CardContent>
      <Media image={user.ava} />
    </СardWrapper>
  </Container>
);

ProfileView.propTypes = {
  user: userType.isRequired,
  toggle: func.isRequired,
};

export default ProfileView;
