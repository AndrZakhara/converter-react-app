import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './users.reducer';
import currencyReducer from './currencyReducer';
import auth from './authReducer';
import user from './user.reducer';

export default combineReducers({
  users,
  currencyReducer,
  user,
  form,
  auth,
});
