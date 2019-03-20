import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import formPlugin from './form.plugin';
import users from './users.reducer';
import converter from './converter.reducer';
import signUp from './signUp';
import user from './user.reducer';

export default combineReducers({
  users,
  converter,
  user,
  signUp,
  form: form.plugin(formPlugin),
});
