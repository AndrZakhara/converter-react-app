import * as actions from '../../actions/types';

function userReducer(state = {}, action) {
  switch (action.type) {
    case actions.RECIVE_ALL_USERS:
      return {
        ...state,
        userList: action.payload,
      };

    case actions.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
