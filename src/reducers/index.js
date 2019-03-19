import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './users.reducer';
import currencyReducer from './currencyReducer';
import signUp from './signUp';
import user from './userReducer/user';

export default combineReducers({
  users,
  currencyReducer,
  user,
  signUp,
  form,
});
