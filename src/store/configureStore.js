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

export default store;