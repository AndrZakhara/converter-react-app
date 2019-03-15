import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import userReducer from './userReducer/userReducer';
import combineEvents from './currencyReducer';
import signUp from './signUp';
import user from './userReducer/user';
import {formsReducers} from './currencyReducer/form.reducer';

export default combineReducers({
  userReducer,
  combineEvents,
  user,
  signUp,
  form,
  formsReducers
});
