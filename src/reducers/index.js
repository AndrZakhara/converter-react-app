import { combineReducers } from 'redux';
import temporaryReducer from './temporaryReducer/temporaryReducer';
import currencyReducer from './currencyReducer';

export default combineReducers({
  temporaryReducer,
  currencyReducer,
});
