import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP } from 'actions/types';
import { signUpError, signUpSuccess } from 'actions/signUp';
import register from 'api/auth';

function* SignUp({ payload: { email, password } }) {
  try {
    const response = yield call(register, email, password);
    yield put(signUpSuccess(response.user.uid));
  } catch (e) {
    yield put(signUpError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGNUP, SignUp);
}

export default mySaga;
