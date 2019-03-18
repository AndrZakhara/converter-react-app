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

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      return {
        ...state,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        uid: payload,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        error: payload.errorMsg.message,
      };
    case SIGNUP:
      console.log(SIGNUP);
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      console.log(SIGNUP_SUCCESS);
      console.log(payload);
      return {
        ...state,
        isLoggedIn: true,
        uid: payload.uid,
      };
    case SIGNUP_ERROR:
      console.log(payload.errorMsg.message);
      return {
        ...state,
        error: payload.errorMsg.message,
      };
    default:
      return state;
  }
};
