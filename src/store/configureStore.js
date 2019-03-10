import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import usersSaga from '../sagas/usersSaga';
import { composeWithDevTools } from 'redux-devtools-extension'; //eslint-disable-line

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(usersSaga);

export default store;
