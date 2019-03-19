import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './users.reducer';
import currencyReducer from './currencyReducer';
import auth from './authReducer';
import user from './user.reducer';

const appReducer = combineReducers({
  users,
  currencyReducer,
  user,
  form,
  auth,
});

export default (state, action) => {
  let st = state;
  if (action.type === 'SIGN_OUT') {
    st = undefined;
  }

  return appReducer(st, action);
};
