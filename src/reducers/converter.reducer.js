import combineEvents from 'utils/combineEvents';
import {
  LOAD_CURRENCY_SUCCESS,
  COUNT_CURRENCY_ASYNC,
  SEND_DIAL,
} from 'actions/types';

const initialState = {
  currencies: [],
  amountBuy: 0,
};
const UAH = { ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1' };

export default combineEvents(
  {
    [LOAD_CURRENCY_SUCCESS]: (state, { payload }) => ({
      currencies: [UAH, ...payload],
    }),
    [COUNT_CURRENCY_ASYNC]: (state, { payload }) => ({ amountBuy: payload }),
    [SEND_DIAL]: (state, { payload }) => ({ purchasedCurrency: payload }),
  },
  initialState,
);
