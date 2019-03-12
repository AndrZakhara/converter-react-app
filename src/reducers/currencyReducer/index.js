import { ADD_CURRENCY_ASYNC } from '../../actions/currencyAction';
import combineEvents from '../../utils/combineEvents';

const initialState = {
  currencies: [],
};

export default combineEvents(
  {
    [ADD_CURRENCY_ASYNC]: (state, action) => ({
      ...state,
      currencies: action.payload,
    }),
  },
  initialState,
);
