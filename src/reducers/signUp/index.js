import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../actions/types';

const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      // There we can add spinner in future
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
