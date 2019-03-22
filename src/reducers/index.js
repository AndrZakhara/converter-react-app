import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import formPlugin from './form.plugin';
import users from './users.reducer';
import converter from './converter.reducer';
import auth from './auth.reducer';
import user from './user.reducer';

const appReducer = combineReducers({
  users,
  converter,
  user,
  auth,
  form: form.plugin(formPlugin),
});

export default (state, action) => {
  let st = state;
  if (action.type === 'SIGN_OUT') {
    st = undefined;
  }

  return appReducer(st, action);
};
