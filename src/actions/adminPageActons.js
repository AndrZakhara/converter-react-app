import {
  GET_ALL_USERS,
  GET_USER_DATA,
  RECIVE_ALL_USERS,
  SET_SELECTED_USER,
} from './types';

export const getAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const reciveAllUser = userList => ({
  type: RECIVE_ALL_USERS,
  payload: userList,
});

export const setSelectedUser = userId => ({
  type: SET_SELECTED_USER,
  payload: userId,
});
