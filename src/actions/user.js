import { SAVE_PROFILE, FETCH_USER, FETCH_USER_SUCCESS } from "./types";

export const fetchUser = () => ({
  type: FETCH_USER
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const saveProfile = profile => ({
  type: SAVE_PROFILE,
  payload: profile
});