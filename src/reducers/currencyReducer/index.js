import { ADD_CURRENCY_ASYNC } from '../../actions/currencyAction';

const initialState = {
  currencies: [],
};

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CURRENCY_ASYNC:
      return { ...state, currencies: action.payload };
    default:
      return state;
  }
}

export default currencyReducer;
