import { call, put, takeEvery } from 'redux-saga/effects';
import { signInError, signInSuccess } from 'actions/signIn';
import { signIn } from 'api/auth';
import { SIGNIN } from 'actions/types';

function* SignIn({ payload: { email, password } }) {
  console.log(email, password);
  try {
    const response = yield call(signIn, email, password);
    yield put(signInSuccess(response.user.uid));
  } catch (e) {
    yield put(signInError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGNIN, SignIn);
}

export default mySaga;
