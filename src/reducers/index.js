import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import currencyReducer from './currencyReducer';

  export default combineReducers({
    userReducer,
  currencyReducer,
});
