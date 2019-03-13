import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import adminReducer from './adminReducer';
import currencyReducer from './currencyReducer';
import signUpReducer from './signUpReducer';
import user from './userReducer/user';

export default combineReducers({
  adminReducer,
  currencyReducer,
  user,
  signUpReducer,
  form,
});
