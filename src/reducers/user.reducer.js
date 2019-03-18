import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  SAVE_PROFILE,
  FETCH_USER_CURRENCY_DIALS,
} from '../actions/types';

const initialState = {
  profile: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case SAVE_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case FETCH_USER_CURRENCY_DIALS:
      return {
        ...state,
        userDials: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

