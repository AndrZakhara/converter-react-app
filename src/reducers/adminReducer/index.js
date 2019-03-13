import * as actions from '../../actions/adminPage';

const initialState = {
  filterValue: '',
  userList: {},
};

function adminReducer(state = initialState, action) {
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

    case actions.SET_FILTER:
      return {
        ...state,
        filterValue: action.payload,
      };

    default:
      return state;
  }
}

export default adminReducer;
