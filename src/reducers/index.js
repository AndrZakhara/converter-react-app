import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import userReducer from './userReducer/userReducer';
import currencyReducer from './currencyReducer';
import signUp from './signUp';
import user from './userReducer/user';
import enhancedTableReducer from './enhancedTableReducer/enhancedTable.reducer';

export default combineReducers({
  userReducer,
  currencyReducer,
  user,
  signUp,
  form,
  enhancedTableReducer,
});
