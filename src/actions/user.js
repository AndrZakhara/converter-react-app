import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  GET_USER_CURRENCY_DIALS,
  FETCH_USER_CURRENCY_DIALS,
} from './types';

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserDials = () => ({
  type: GET_USER_CURRENCY_DIALS,
});

export const fetchDialsSuccess = data => ({
  type: FETCH_USER_CURRENCY_DIALS,
  payload: data,
});
