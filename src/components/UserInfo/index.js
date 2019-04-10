import React from 'react';
import { userType } from 'types';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import {
  PaperWrapper,
  HeaderWrapper,
  BigAvatar,
  Header,
  InfoBodyWrapper,
  ButtonWrapper,
  StyledButton,
  UserInfoWrapper,
} from './style';

const UserInfo = ({ selectedUser, openModal }) => {
  const { firstName, lastName, ava, email, role, phone } = selectedUser;

  return (
    <PaperWrapper>
      <HeaderWrapper>
        <BigAvatar src={ava} alt="avatar" />
        <Header>
          {firstName && lastName ? `${firstName} ${lastName}` : 'Unknown User'}
        </Header>
      </HeaderWrapper>
      <InfoBodyWrapper>
        <UserInfoWrapper>
          <ListItem>
            <ListItemText secondary={`Email: ${email || ' - '}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary={`Phone: ${phone || ' - '}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary={`Role: ${role || 'user'}`} />
          </ListItem>
        </UserInfoWrapper>
        <ButtonWrapper>
          <StyledButton variant="contained" color="primary" onClick={openModal}>
            Reset password
          </StyledButton>
          <StyledButton variant="contained" color="primary" onClick={openModal}>
            Delete user
          </StyledButton>
          <StyledButton variant="contained" color="primary" onClick={openModal}>
            Change role
          </StyledButton>
          <StyledButton variant="contained" color="primary" onClick={openModal}>
            User activity
          </StyledButton>
        </ButtonWrapper>
      </InfoBodyWrapper>
    </PaperWrapper>
  );
};

UserInfo.propTypes = {
  selectedUser: userType.isRequired,
};

export default UserInfo;
