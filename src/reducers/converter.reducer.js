import combineEvents from 'utils/combineEvents';
import { LOAD_CURRENCY_ASYNC, COUNT_CURRENCY_ASYNC } from 'actions/types';

const initialState = {
  currencies: [],
  amountBuy: 0,
};
const UAH = { ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1' };

export default combineEvents(
  {
    [LOAD_CURRENCY_ASYNC]: (state, { payload }) => ({
      currencies: [UAH, ...payload],
    }),
    [COUNT_CURRENCY_ASYNC]: (state, { payload }) => ({ amountBuy: payload }),
  },
  initialState,
);
