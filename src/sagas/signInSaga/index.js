import { call, put, takeEvery } from 'redux-saga/effects';
import { signInError, signInSuccess } from 'actions/signIn';
import { signIn } from 'api/auth';
import { getUserfromDB } from 'api/database';
import { SIGNIN, SIGNIN_SUCCESS } from 'actions/types';

function* SignIn({ payload: { email, password } }) {
  console.log(email, password);
  try {
    const response = yield call(signIn, email, password);
    yield put(signInSuccess(response.user.uid));
  } catch (e) {
    yield put(signInError(e));
  }
}

function* getUser({ payload: uid }) {
  try {
    const response = yield call(getUserfromDB, uid, val => console.log(val));
    yield put(signInSuccess(response.user.uid));
  } catch (e) {
    yield put(signInError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGNIN, SignIn);
  yield takeEvery(SIGNIN_SUCCESS, getUser);
}

export default mySaga;
