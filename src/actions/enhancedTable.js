import { TABLE_GET_USER_DATA, TABLE_FETCH_USER_DATA } from './types';

export const getUserData = () => ({
  type: TABLE_GET_USER_DATA,
});

export const fetchUserData = data => ({
  type: TABLE_FETCH_USER_DATA,
  payload: data,
});
