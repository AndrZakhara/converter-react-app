import { all } from 'redux-saga/effects';
import currencyRootSaga from './currency.saga';
import watchGetAllUser from './user.saga';
import signUpSaga from './signup.saga';
import signInSaga from './signin.saga';
import admin from './admin.saga';
import watcherWeather from './weather.saga';
import updateProfileSaga from './profile.saga';
import signOutSaga from './signout.saga';
import uploadImageSaga from './uploadimage.saga';

export default function* rootSaga() {
  yield all([
    currencyRootSaga(),
    watchGetAllUser(),
    signUpSaga(),
    signInSaga(),
    admin(),
    watcherWeather(),
    updateProfileSaga(),
    signOutSaga(),
    uploadImageSaga(),
  ]);
}
