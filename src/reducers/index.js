import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import userReducer from './userReducer/userReducer';
import combineEvents from './currencyReducer';
import signUpReducer from './signUpReducer';
import user from './userReducer/user';

export default combineReducers({
  userReducer,
  combineEvents,
  user,
  signUpReducer,
  form,
});
