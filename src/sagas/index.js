import { all } from 'redux-saga/effects';
import currencyRootSaga from './currency.saga';
import watchGetAllUser from './user.saga';
import signUpSaga from './signup.saga';
import signInSaga from './signin.saga';
import admin from './admin.saga';
import watcherWeather from './weather.saga';

export default function* rootSaga() {
  yield all([
    currencyRootSaga(),
    watchGetAllUser(),
    signUpSaga(),
    signInSaga(),
    admin(),
    watcherWeather(),
  ]);
}