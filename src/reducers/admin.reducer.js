import combineEvents from 'utils/combineEvents';
import {
  GET_USERS_SUCCESS,
  SET_SELECTED_USER,
  SET_FILTER,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  CLOSE_MODAL,
} from 'actions/types.actions';

const initialState = {
  filterValue: '',
  userList: {},
  error: null,
  isQuery: false,
  isSuccess: false,
  isErr: false,
};

export default combineEvents(
  {
    [GET_USERS_SUCCESS]: (state, { payload }) => ({ userList: payload }),
    [SET_SELECTED_USER]: (state, { payload }) => ({ selectedUser: payload }),
    [SET_FILTER]: (state, { payload }) => ({ filterValue: payload }),
    [RESET_PASSWORD_REQUEST]: () => ({
      isQuery: true,
      isSuccess: false,
      isErr: false,
    }),
    [RESET_PASSWORD_SUCCESS]: () => ({
      isQuery: false,
      isSuccess: true,
      isErr: false,
    }),
    [RESET_PASSWORD_ERROR]: () => ({
      isQuery: false,
      isSuccess: false,
      isErr: true,
    }),
    [CLOSE_MODAL]: () => ({
      isQuery: false,
      isSuccess: false,
      isErr: false,
    }),
  },
  initialState,
);
