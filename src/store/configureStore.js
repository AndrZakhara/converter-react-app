import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import adminSaga from 'sagas/adminSaga';
import { composeWithDevTools } from 'redux-devtools-extension'; //eslint-disable-line
import watchGetAllCurrencies from 'sagas/currencySaga';
import {
  fetchUserSaga,
  getUserDialsData,
  watchGetAllUser,
} from 'sagas/userSaga';
import signUpSaga from 'sagas/signUpSaga';
import signInSaga from 'sagas/signInSaga';

import rootReducer from 'reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(adminSaga);
sagaMiddleware.run(watchGetAllCurrencies);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(getUserDialsData);
sagaMiddleware.run(signInSaga);
sagaMiddleware.run(fetchUserSaga);
sagaMiddleware.run(watchGetAllUser);

export default store;
