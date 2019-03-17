import combineEvents from 'utils/combineEvents';
import {
  LOAD_CURRENCY_ASYNC,
  BUY_CURRENCY,
  COUNT_CURRENCY_ASYNC,
} from 'actions/currencyAction';

const initialState = {
  currencies: [],
  currenciesBuy: [],
  amountBuy: 0,
};
const UAH = {ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1'};

export default combineEvents(
  {
    [LOAD_CURRENCY_ASYNC]: (state, { payload }) => ({ ...state, currencies: [UAH, ...payload] }),
    [BUY_CURRENCY]: (state, { payload }) => ({...state, currenciesBuy: payload }),
    [COUNT_CURRENCY_ASYNC]: (state, { payload }) => ({...state, amountBuy: payload }),
  },
  initialState,
);
