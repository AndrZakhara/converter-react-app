export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_DATA = 'GET_USER_DATA';
export const RECIVE_ALL_USERS = 'RECIVE_ALL_USERS';

export function getAllUsers() {
  return {
    type: GET_ALL_USERS,
  };
}

export function getUserData() {
  return {
    type: GET_USER_DATA,
  };
}

export function reciveAllUser(userList) {
  return {
    type: RECIVE_ALL_USERS,
    payload: userList,
  };
}
