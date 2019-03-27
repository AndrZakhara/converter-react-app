import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPLOAD_IMAGE,
} from './types.actions';

export const updateProfile = profile => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

export const updateProfileStart = () => ({
  type: UPDATE_PROFILE_START,
});

export const updateProfileSuccess = profile => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile,
});

export const updateProfileError = error => ({
  type: UPDATE_PROFILE_ERROR,
  payload: error,
});

export const uploadImage = (url, user) => ({
  type: UPLOAD_IMAGE,
  payload: Object.assign({}, user, { ava: url }),
});
