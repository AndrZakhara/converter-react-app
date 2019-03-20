import { call, put, takeEvery } from 'redux-saga/effects';
import { signInError, signInSuccess } from 'actions/auth';
import { saveProfile } from 'actions/user';
import { signIn } from 'api/auth';
import { getUserfromDB } from 'api/database';
import { SIGNIN } from 'actions/types';

function* SignIn({ payload: { email, password } }) {
  try {
    const response = yield call(signIn, email, password);
    const user = yield call(getUserfromDB, response.user.uid);
    yield put(saveProfile(user));
    yield put(signInSuccess(response.user.uid));
  } catch (e) {
    yield put(signInError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGNIN, SignIn);
}

export default mySaga;
