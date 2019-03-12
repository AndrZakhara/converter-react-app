import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR } from './types';

export const signIn = (email, password) => ({
  type: SIGNIN,
  payload: {
    email,
    password
  }
});

export const signInSuccess = (email, password) => ({
  type: SIGNIN_SUCCESS,
  payload: {
    email,
    password
  }
});

export const signInError = error => ({
  type: SIGNIN_ERROR,
  payload: {
    errorMsg: error
  },
});