import {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from '../../actions/types';

const initialState = {
  user: null,
  isLoggedIn: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      // There we can add spinner in future
      console.log(SIGNIN);
      return {
        ...state
      };
    case SIGNIN_SUCCESS:
      console.log(SIGNIN_SUCCESS);
      return {
        ...state,
        isLoggedIn: true,
        user: payload
      };
    case SIGNIN_ERROR:
      console.log(SIGNIN_ERROR);
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};