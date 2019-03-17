import combineEvents from 'utils/combineEvents';
import { RECIVE_ALL_USERS, SET_SELECTED_USER, SET_FILTER } from 'actions/types';

const initialState = {
  filterValue: '',
  userList: {},
};

export default combineEvents(
  {
    [RECIVE_ALL_USERS]: (state, { payload }) => ({ userList: payload }),
    [SET_SELECTED_USER]: (state, { payload }) => ({ selectedUser: payload }),
    [SET_FILTER]: (state, { payload }) => ({ filterValue: payload }),
  },
  initialState,
);
