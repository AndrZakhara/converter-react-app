import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { mySaga } from '../sagas';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

// sagaMiddleware.run(mySaga);

export default store;