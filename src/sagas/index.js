import { all } from 'redux-saga/effects';
import currencyRootSaga from './currency.saga';
import { getUserDialsData, watchGetAllUser } from './user.saga';
import signUpSaga from './signup.saga';
import signInSaga from './signin.saga';
import admin from './admin.saga';

export default function* rootSaga() {
  yield all([
    currencyRootSaga(),
    getUserDialsData(),
    watchGetAllUser(),
    signUpSaga(),
    signInSaga(),
    admin(),
  ]);
}
