import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import formPlugin from './form.plugin';
import admin from './admin.reducer';
import converter from './converter.reducer';
import auth from './auth.reducer';
import user from './user.reducer';
import modal from './modal.reducer';
import weather from './weather.reducer';

const appReducer = combineReducers({
  admin,
  converter,
  user,
  auth,
  modal,
  weather,
  form: form.plugin(formPlugin),
});

export default (state, action) => {
  let st = state;
  if (action.type === 'SIGN_OUT') {
    st = undefined;
  }

  return appReducer(st, action);
};
