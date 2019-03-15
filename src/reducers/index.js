import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './users.reducer';
import currencyReducer from './currencyReducer';
import signUpReducer from './signUpReducer';
import user from './userReducer/user';

export default combineReducers({
  users,
  currencyReducer,
  user,
  signUpReducer,
  form,
});
