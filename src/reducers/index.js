import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import userReducer from './userReducer/userReducer';
import currencyReducer from './currencyReducer';
import user from './userReducer/user';

export default combineReducers({
  userReducer,
  currencyReducer,
  user,
  form,
});
