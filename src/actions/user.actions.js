import {
  SAVE_PROFILE,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  GET_USER_CURRENCY_DIALS,
  FETCH_USER_CURRENCY_DIALS_REQUEST,
  FETCH_USER_CURRENCY_DIALS_SUCCESS,
  FETCH_USER_CURRENCY_DIALS_ERROR,
} from './types';

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const saveProfile = profile => ({
  type: SAVE_PROFILE,
  payload: profile,
});

export const fetchUserDials = data => ({
  type: GET_USER_CURRENCY_DIALS,
  payload: data,
});

export const fetchDialsRequest = data => ({
  type: FETCH_USER_CURRENCY_DIALS_REQUEST,
  payload: data,
});

export const fetchDialsSuccess = data => ({
  type: FETCH_USER_CURRENCY_DIALS_SUCCESS,
  payload: data,
});

export const fetchDialsError = data => ({
  type: FETCH_USER_CURRENCY_DIALS_ERROR,
  payload: data,
});
