import { ADD_CURRENCY_ASYNC } from '../../actions/currencyAction';

const initialState = [{ ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1' }];

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CURRENCY_ASYNC:
      return [state, ...action.payload];
    default:
      return state;
  }
}

export default currencyReducer;
