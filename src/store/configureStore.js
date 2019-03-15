import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import adminSaga from 'sagas/adminSaga';
import { composeWithDevTools } from 'redux-devtools-extension'; //eslint-disable-line
import { watchGetAllCurrencies } from 'sagas/currencySaga';
import { watchCountCurrencies } from 'sagas/currencySaga';
import { fetchUserSaga } from 'sagas/userSaga';
import signUpSaga from 'sagas/signUpSaga';

import rootReducer from 'reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(adminSaga);
sagaMiddleware.run(watchGetAllCurrencies);
sagaMiddleware.run(watchCountCurrencies);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(fetchUserSaga);

export default store;
