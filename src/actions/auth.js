import {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGN_OUT,
} from './types';

export const signIn = (email, password) => ({
  type: SIGNIN,
  payload: {
    email,
    password,
  },
});

export const signInSuccess = uid => ({
  type: SIGNIN_SUCCESS,
  payload: uid,
});

export const signInError = error => ({
  type: SIGNIN_ERROR,
  payload: error,
});

export const signUp = (email, password, firstName, lastName, phone) => ({
  type: SIGNUP,
  payload: {
    email,
    password,
    firstName,
    lastName,
    phone,
  },
});

export const signUpSuccess = uid => ({
  type: SIGNUP_SUCCESS,
  payload: uid,
});

export const signUpError = error => ({
  type: SIGNUP_ERROR,
  payload: error,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
