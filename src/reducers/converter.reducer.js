import combineEvents from 'utils/combineEvents';
import {
  LOAD_CURRENCY_REQUEST,
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_ERROR,
  SEND_DIAL,
} from 'actions/types';

const initialState = {
  currencies: [],
};
const UAH = { ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1' };

export default combineEvents(
  {
    [LOAD_CURRENCY_REQUEST]: (state, { onLoading }) => ({
      onLoading,
    }),

    [LOAD_CURRENCY_SUCCESS]: (state, { payload, onLoading }) => ({
      currencies: [UAH, ...payload],
      onLoading,
    }),
    [LOAD_CURRENCY_ERROR]: (state, { payload, onLoading }) => ({
      error: payload,
      onLoading,
    }),
    [SEND_DIAL]: (state, { payload }) => ({ purchasedCurrency: payload }),
  },
  initialState,
);
