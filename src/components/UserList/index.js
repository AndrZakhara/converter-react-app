import React from 'react';
import { func } from 'prop-types';
import { usersFilteredType } from 'types';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { UserListItem } from 'components';
import { StyledList, SearchWrapper, StyledInput, ListWrapper } from './style';

const UserList = ({ userListFiltered, setSelectedUser, setFilter }) => (
  <StyledList component="nav">
    <SearchWrapper>
      <StyledInput
        placeholder="Search user"
        onChange={e => setFilter(e.target.value)}
      />
      <Button disabled aria-label="Search">
        <SearchIcon />
      </Button>
    </SearchWrapper>
    <ListWrapper>
      {userListFiltered &&
        userListFiltered.map(item => (
          <UserListItem
            user={item}
            key={item.id}
            handleClickUser={setSelectedUser}
          />
        ))}
    </ListWrapper>
  </StyledList>
);

UserList.propTypes = {
  setFilter: func.isRequired,
  setSelectedUser: func.isRequired,
  userListFiltered: usersFilteredType,
};

UserList.defaultProps = {
  userListFiltered: null,
};

export default UserList;
