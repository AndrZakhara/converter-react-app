import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import currencyReducer from './currencyReducer';
import signUp from './signUp';
import user from './user.reducer';

export default combineReducers({
  currencyReducer,
  user,
  signUp,
  form,
});
