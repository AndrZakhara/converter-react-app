import { GET_USER_CURRENCY_DIALS, FETCH_USER_CURRENCY_DIALS, RECIVE_USER_CURRENCY_DIALS } from './types';

export const getUserData = () => ({
  type: GET_USER_CURRENCY_DIALS,
});

export const fetchUserData = data => ({
  type: FETCH_USER_CURRENCY_DIALS,
  payload: data,
});
