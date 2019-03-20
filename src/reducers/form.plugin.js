import { SWAP_CURRENCY, COUNT_CURRENCY_ASYNC } from 'actions/types';
import combineEvents from 'utils/combineEvents';

export default {
  currencyForm: combineEvents({
    [SWAP_CURRENCY]: state => ({
      values: {
        currencyBuy: state.values.currencySell,
        currencySell: state.values.currencyBuy,
        amountSell: state.values.amountBuy,
        amountBuy: state.values.amountSell,
        fee: state.values.fee,
      },
    }),
    [COUNT_CURRENCY_ASYNC]: (state, { payload }) => ({
      values: {
        ...state.values,
        amountBuy: payload,
      },
    }),
  }),
};
