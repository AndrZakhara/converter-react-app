import combineEvents from 'utils/combineEvents';
import { ADD_CURRENCY_ASYNC, BUY_CURRENCY, COUNT_CURRENCY_ASYNC } from 'actions/currencyAction';

const initialState = {
  currencies: [],
  currenciesBuy: [],
  amountBuy: 0,
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
    [COUNT_CURRENCY_ASYNC]: (state, action) => ({
      ...state,
      amountBuy: action.payload,
    })
  },
  initialState,
);