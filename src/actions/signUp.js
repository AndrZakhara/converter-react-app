import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';

export const signUp = (email, password) => ({
  type: SIGNUP,
  payload: {
    email,
    password,
  }
});

export const signUpSuccess = (email, password, username, phone) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    email,
    password,
    username,
    phone
  }
});

export const signUpError = error => ({
  type: SIGNUP_ERROR,
  payload: {
    errorMsg: error
  },
});