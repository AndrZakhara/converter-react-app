import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import userReducer from './userReducer/userReducer';
import currencyReducer from './currencyReducer';
import signUpReducer from './signUpReducer';
import user from './userReducer/user';
import enhancedTableReducer from './enhancedTableReducer';

export default combineReducers({
  userReducer,
  currencyReducer,
  user,
  signUpReducer,
  form,
  enhancedTableReducer,
});
