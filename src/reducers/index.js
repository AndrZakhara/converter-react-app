import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import userReducer from './userReducer/userReducer';
import combineEvents from './currencyReducer';
import signUpReducer from './signUpReducer';
import user from './userReducer/user';
import { BUY_CURRENCY } from '../actions/currencyAction';

export default combineReducers({
  userReducer,
  combineEvents,
  user,
  signUpReducer,
  form,
  reducerBuy: form.plugin({
    login: (state, action) => {
      switch (action.type) {
        case BUY_CURRENCY:
          console.log(state);
          return state;
        default:
          return state;
      }
    },
  }),
});
