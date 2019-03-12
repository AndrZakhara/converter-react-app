import { combineReducers } from 'redux';
<<<<<<< HEAD
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
=======
import signUpReducer from './signUpReducer';
>>>>>>> feature/Sign-Up add sagas and redux-form
import { reducer as form } from 'redux-form'

export default combineReducers({
  signUpReducer,
  form
>>>>>>> feature/Sign-up add redux-form
});
