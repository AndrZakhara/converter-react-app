import * as actions from '../../actions/types';

function enhancedTableReducer(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
}

export default enhancedTableReducer;
