<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import adminSaga from '../sagas/adminSaga';
import { composeWithDevTools } from 'redux-devtools-extension'; //eslint-disable-line
import watchGetAllCurrencies from '../sagas/currencySaga';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(adminSaga);
sagaMiddleware.run(watchGetAllCurrencies);
Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
=======
import {createStore,applyMiddleware} from 'redux';
import mainReducer from '../reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as sagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer,composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
>>>>>>> feature/profile, add profile page

export default store;
