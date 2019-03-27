import { call, put, takeEvery } from 'redux-saga/effects';
import { signInStart, signInError, signInSuccess } from 'actions';
import { signIn } from 'api/auth';
import { SIGNIN } from 'actions/types.actions';

function* SignIn({ payload: { email, password } }) {
  try {
    yield put(signInStart());
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
