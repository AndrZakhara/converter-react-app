import combineEvents from 'utils/combineEvents';
import {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from 'actions/types';

const initialState = {
  uid: null,
  isLoggedIn: false,
  error: null,
};

export default combineEvents(
  {
    [SIGNIN]: () => ({}),
    [SIGNIN_SUCCESS]: (state, { payload }) => ({
      isLoggedIn: true,
      uid: payload,
    }),
    [SIGNIN_ERROR]: (state, { payload }) => ({
      error: payload,
    }),
    [SIGNUP]: () => ({}),
    [SIGNUP_SUCCESS]: (state, { payload }) => ({
      isLoggedIn: true,
      uid: payload.uid,
    }),
    [SIGNUP_ERROR]: (state, { payload }) => ({
      error: payload,
    }),
  },
  initialState,
);
