import { SWAP_CURRENCY } from 'actions/types';

export default {
  currencyForm: (state, action) => {
    switch (action.type) {
      case SWAP_CURRENCY:
        return {
          ...state,
          values: {
            currencyBuy: state.values.currencySell,
            currencySell: state.values.currencyBuy,
            amountSell: state.values.amountBuy,
            amountBuy: state.values.amountSell,
            fee: state.values.fee,
          },
        };
      default:
        return state;
    }
  },
};
