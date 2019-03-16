import {
  RECIVE_ALL_USERS,
  SET_SELECTED_USER,
  SET_FILTER,
} from 'actions/types';

const initialState = {
  filterValue: '',
  userList: {},
};

function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case RECIVE_ALL_USERS:
      return {
        ...state,
        userList: payload,
      };

    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: payload,
      };

    case SET_FILTER:
      return {
        ...state,
        filterValue: payload,
      };

    default:
      return state;
  }
}

export default usersReducer;
