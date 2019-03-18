import { call, put, takeEvery } from 'redux-saga/effects';
import { signInError, signInSuccess } from 'actions/signIn';
import { signIn } from 'api/auth';
import { SIGNIN } from 'actions/types';

function* SignIn(action) {
  const { email, password } = action.payload;
  console.log(email, password);
  try {
    yield call(signIn, email, password);
    yield put(signInSuccess(email, password));
  } catch (e) {
    yield put(signInError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGNIN, SignIn);
}

export default mySaga;
