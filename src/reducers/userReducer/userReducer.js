import * as actions from '../../actions';

const initialState = { store: 'myStore' };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_USERS:
      return {
        ...state,
        store: action.item,
      };

    case actions.RECIVE_ALL_USERS:
      return {
        ...state,
        userList: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
