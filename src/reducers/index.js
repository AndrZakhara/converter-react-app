import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './users.reducer';
import converter from './converter.reducer';
import signUp from './signUp';
import user from './user.reducer';

export default combineReducers({
  users,
  converter,
  user,
  signUp,
  form: formReducer.plugin({
    currencyForm: (state, action) => {
      switch (action.type) {
        case 'SWAP_CURRENCY':
          return {
            ...state,
            values: {
              currencyBuy: state.values.currencySell,
              currencySell: state.values.currencyBuy,
              amountSell: state.values.amountBuy,
              amountBuy: state.values.amountSell,
            },
          };

        default:
          return state;
      }
    },
  }),
});
