import { GET_USER_DATA, FETCH_USER_DATA } from './types';

export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const fetchUserData = data => ({
  type: FETCH_USER_DATA,
  payload: data,
});
