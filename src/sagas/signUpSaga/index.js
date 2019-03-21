import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP } from 'actions/types';
import { signUpStart, signUpError, signUpSuccess } from 'actions/auth';
import { register } from 'api/auth';

function* SignUp({ payload: { email, password, firstName, lastName, phone } }) {
  try {
    yield put(signUpStart());
    const response = yield call(register, email, password);
    const user = {
      uid: response.user.uid,
      ava: '',
      email,
      firstName,
      lastName,
      phone,
    };
    yield put(signUpSuccess(user));
  } catch (e) {
    yield put(signUpError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGNUP, SignUp);
}

export default mySaga;
