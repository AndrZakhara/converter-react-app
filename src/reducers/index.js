import { combineReducers } from 'redux';
<<<<<<< HEAD
import { reducer as form } from 'redux-form';

import userReducer from './userReducer/userReducer';
import currencyReducer from './currencyReducer';
import user from './userReducer/user';

export default combineReducers({
  userReducer,
  currencyReducer,
  user,
  form,
=======
import temporaryReducer from './temporaryReducer/temporaryReducer';
import { reducer as form } from 'redux-form'

export default combineReducers({
  temporaryReducer,
  form
>>>>>>> feature/Sign-up add redux-form
});
