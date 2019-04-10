import React from 'react';
import { func } from 'prop-types';
import { userType } from 'types';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { StyledList, StyledListText } from './style';

const UserListItem = props => {
  const { user, handleClickUser } = props;
  const { firstName, lastName, ava, email } = user;
  return (
    <StyledList button onClick={() => handleClickUser(user)}>
      <ListItemIcon>
        <Avatar src={ava} alt="avatar" />
      </ListItemIcon>
      <StyledListText
        primary={
          firstName || lastName ? `${firstName} ${lastName}` : 'Unknown User'
        }
        secondary={`email: ${email || ' - '}`}
      />
    </StyledList>
  );
};

UserListItem.propTypes = {
  user: userType.isRequired,
  handleClickUser: func.isRequired,
};

export default UserListItem;
