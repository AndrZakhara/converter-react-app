import {
  GET_ALL_USERS,
  GET_USER_DATA,
  RECIVE_ALL_USERS,
  SET_SELECTED_USER,
  SET_FILTER,
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

export function setSelectedUser(userId) {
  return {
    type: SET_SELECTED_USER,
    payload: userId,
  };
}

export function setFilter(filterValue) {
  return {
    type: SET_FILTER,
    payload: filterValue,
  }
}
