import { GET_USER_HISTORY, FETCH_USER_HISTORY, RECIVE_USER_HISTORY } from './types';

export const getUserData = () => ({
  type: GET_USER_HISTORY,
});

export const fetchUserData = data => ({
  type: FETCH_USER_HISTORY,
  payload: data,
});
