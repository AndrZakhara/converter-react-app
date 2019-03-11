import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watchGetAllCurrencies from '../sagas/currencySaga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(watchGetAllCurrencies);

export default store;