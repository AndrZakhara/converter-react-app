import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import temporaryReducer from './temporaryReducer/temporaryReducer';
import user from './userReducer/user'


export default combineReducers({
  temporaryReducer,
  user,
  form
});
