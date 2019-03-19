import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './users.reducer';
import converter from './converter.reducer';
import signUp from './signUp';
import user from './userReducer/user';

export default combineReducers({
  users,
  converter,
  user,
  signUp,
  form,
});
