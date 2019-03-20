import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP, SIGNUP_SUCCESS } from 'actions/types';
import { signUpError, signUpSuccess } from 'actions/auth';
import { register } from 'api/auth';
import { createUserInDB } from 'api/database';
import { saveProfile } from 'actions/user';

function* SignUp({ payload: { email, password, firstName, lastName, phone } }) {
  try {
    const response = yield call(register, email, password);
    const user = {
      uid: response.user.uid,
      ava: '',
      email,
      firstName,
      lastName,
      phone,
    };
    yield call(
      createUserInDB,
      user.uid,
      user.ava,
      user.email,
      user.firstName,
      user.lastName,
      user.phone,
    );
    yield put(saveProfile(user));
    yield put(signUpSuccess(user.uid));
  } catch (e) {
    yield put(signUpError(e));
  }
}

// function* createUser({ payload: { uid, email, firstName, lastName, phone } }) {
//   try {
//     const response = yield call(
//       createUserInDB,
//       uid,
//       '',
//       email,
//       firstName,
//       lastName,
//       phone,
//     );
//     yield console.log(response);
//     // yield put(createUserSuccesss(response.user.uid));
//   } catch (e) {
//     yield put(signUpError(e));
//   }
// }

function* mySaga() {
  yield takeEvery(SIGNUP, SignUp);
  // yield takeEvery(SIGNUP_SUCCESS, createUser);
}

export default mySaga;
