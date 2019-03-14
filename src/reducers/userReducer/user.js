import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  SAVE_PROFILE,
} from '../../actions/types';

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
      console.log(payload);
      return {
        ...state,
        profile: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
