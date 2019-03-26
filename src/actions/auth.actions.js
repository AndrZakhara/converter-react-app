import {
  SIGNIN,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGN_OUT,
  CREATE_DB_PROFILE,
  CREATE_DB_PROFILE_SUCCESS,
} from './types.actions';

export const createDbProfileStart = () => ({
  type: CREATE_DB_PROFILE,
});

export const createDbProfileSuccess = user => ({
  type: CREATE_DB_PROFILE_SUCCESS,
  payload: user,
});

export const signIn = (email, password) => ({
  type: SIGNIN,
  payload: {
    email,
    password,
  },
});

export const signInStart = () => ({
  type: SIGNIN_START,
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

export const signUpStart = () => ({
  type: SIGNUP_START,
});

export const signUpSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signUpError = error => ({
  type: SIGNUP_ERROR,
  payload: error,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
