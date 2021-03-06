/* eslint-disable */
import combineEvents from 'utils/combineEvents';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  UPDATE_PROFILE,
  FETCH_USER_CURRENCY_DIALS_SUCCESS,
  FETCH_USER_CURRENCY_DIALS_REQUEST,
  FETCH_USER_CURRENCY_DIALS_ERROR,
  CREATE_DB_PROFILE_SUCCESS
} from 'actions/types.actions';

const initialState = {
  profile: {
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    ava: null,
    role: null,
    uid: null,
  },
  error: null,
};

export default combineEvents(
  {
    [FETCH_USER]: state => ({ error: null }),
    [FETCH_USER_SUCCESS]: (state, { payload }) => ({ profile: payload }),
    [UPDATE_PROFILE]: (state, { payload }) => ({ profile: { ...state.profile, ...payload } }),
    [FETCH_USER_CURRENCY_DIALS_REQUEST]: (state) => ({
      //TODO add flag here.
    }),
    [FETCH_USER_CURRENCY_DIALS_SUCCESS]: (state, { payload }) => ({
      userDials: payload,
    }),
    [FETCH_USER_CURRENCY_DIALS_ERROR]: (state, { payload }) => ({
      error: payload,
    }),
    [CREATE_DB_PROFILE_SUCCESS]: (state, { payload }) => ({
      profile: payload,
    }),
  },
  initialState,
);
