import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import adminSaga from '../sagas/adminSaga';
import { composeWithDevTools } from 'redux-devtools-extension'; //eslint-disable-line
import watchGetAllCurrencies from '../sagas/currencySaga';
import { fetchUserSaga, getUserDialsData } from '../sagas/userSaga';
import signUpSaga from '../sagas/signUpSaga';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(adminSaga);
sagaMiddleware.run(watchGetAllCurrencies);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(getUserDialsData);
sagaMiddleware.run(fetchUserSaga);

export default store;
