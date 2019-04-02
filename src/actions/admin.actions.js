import { RESET_PASSWORD } from 'constants/modalMessage';
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  SET_SELECTED_USER,
  SET_FILTER,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './types.actions';

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = userList => ({
  type: GET_USERS_SUCCESS,
  payload: userList,
});

export const getUsersError = err => ({
  type: GET_USERS_ERROR,
  payload: err,
});

export const setSelectedUser = userId => ({
  type: SET_SELECTED_USER,
  payload: userId,
});

export const setFilter = filterValue => ({
  type: SET_FILTER,
  payload: filterValue,
});

export const resetPasswordRequest = () => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: RESET_PASSWORD.success,
});

export const resetPasswordError = data => ({
  type: RESET_PASSWORD_ERROR,
  payload: data,
});
