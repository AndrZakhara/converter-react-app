import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import adminSaga from 'sagas/adminSaga';
import { composeWithDevTools } from 'redux-devtools-extension'; //eslint-disable-line
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  watchGetAllCurrencies,
  watchCountCurrencies,
} from 'sagas/currencySaga';
import { getUserDialsData, watchGetAllUser } from 'sagas/userSaga';
import signUpSaga from 'sagas/signUpSaga';
import signInSaga from 'sagas/signInSaga';
import updateProfile from 'sagas/updateProfileSaga';

import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);

sagaMiddleware.run(adminSaga);
sagaMiddleware.run(watchGetAllCurrencies);
sagaMiddleware.run(watchCountCurrencies);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(getUserDialsData);
sagaMiddleware.run(signInSaga);
sagaMiddleware.run(watchGetAllUser);
sagaMiddleware.run(updateProfile);

export { store, persistor };
