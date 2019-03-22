import combineEvents from 'utils/combineEvents';
import {
  LOAD_CURRENCY_REQUEST,
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_ERROR,
  SEND_DEAL_POST,
  SEND_DEAL_SUCCESS,
  SEND_DEAL_ERROR,
} from 'actions/types';

const initialState = {
  currencies: [],
  onSending: false,
  onLoading: false,
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
    [SEND_DEAL_POST]: (state, { onSending }) => ({
      onSending,
    }),
    [SEND_DEAL_SUCCESS]: (state, { onSending }) => ({
      onSending,
    }),
    [SEND_DEAL_ERROR]: (state, { payload, onSending }) => ({
      error: payload,
      onSending,
    }),
  },
  initialState,
);
