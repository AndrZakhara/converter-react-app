import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';

export const signUp = (email, password, firstName, secondName, phone) => ({
  type: SIGNUP,
  payload: {
    email,
    password,
    firstName,
    secondName,
    phone,
  },
});

export const signUpSuccess = (uid, email, firstName, lastName, phone) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    uid,
    email,
    firstName,
    lastName,
    phone,
  },
});

export const signUpError = error => ({
  type: SIGNUP_ERROR,
  payload: {
    errorMsg: error,
  },
});
