import combineEvents from '../../utils/combineEvents';
import { ADD_CURRENCY_ASYNC, BUY_CURRENCY } from 'actions/currencyAction';

const initialState = {
  currencies: [],
  currenciesBuy: [],
};

export default combineEvents(
  {
    [ADD_CURRENCY_ASYNC]: (state, action) => ({
      ...state,
      currencies: action.payload,
    }),
    [BUY_CURRENCY]: (state, action) => ({
      ...state,
      currenciesBuy: action.payload,
    }),
  },
  initialState,
);