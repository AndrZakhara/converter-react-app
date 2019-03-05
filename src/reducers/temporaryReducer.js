import {
MY_ACTION
} from '../actions/myAction';

const initialState = {
  store: 'myStore'
};

function temporaryReducer(state = initialState, action) {
  switch (action.type) {
    case MY_ACTION:
      return {
        ...state,
        store: action.item
      }

    default:
     return state
    }
}

export default temporaryReducer;