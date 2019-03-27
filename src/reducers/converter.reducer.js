import combineEvents from 'utils/combineEvents';
import {
  LOAD_CURRENCY_REQUEST,
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_ERROR,
  SEND_DEAL_POST,
  SEND_DEAL_SUCCESS,
  SEND_DEAL_ERROR,
} from 'actions/types.actions';

const initialState = {
  currencies: [],
  onSending: false,
  onLoading: false,
};
const UAH = { ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1' };

export default combineEvents(
  {
    [LOAD_CURRENCY_REQUEST]: () => ({
      onLoading: true,
    }),

    [LOAD_CURRENCY_SUCCESS]: (state, { payload }) => ({
      currencies: [UAH, ...payload],
      onLoading: false,
    }),
    [LOAD_CURRENCY_ERROR]: (state, { payload }) => ({
      error: payload,
      onLoading: false,
    }),
    [SEND_DEAL_POST]: () => ({
      onSending: true,
    }),
    [SEND_DEAL_SUCCESS]: () => ({
      onSending: false,
    }),
    [SEND_DEAL_ERROR]: (state, { payload }) => ({
      error: payload,
      onSending: false,
    }),
  },
  initialState,
);
