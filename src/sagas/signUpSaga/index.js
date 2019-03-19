import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP, SIGNUP_SUCCESS } from 'actions/types';
import { signUpError, signUpSuccess } from 'actions/auth';
import { register } from 'api/auth';
import { createUserInDB } from 'api/database';

function* SignUp({
  payload: { email, password, firstName, secondName, phone },
}) {
  console.log(email, password, firstName, secondName, phone);
  try {
    const response = yield call(register, email, password);
    yield call(
      createUserInDB,
      response.user.uid,
      '',
      email,
      firstName,
      secondName,
      phone,
    );
    yield put(
      signUpSuccess(response.user.uid, email, firstName, secondName, phone),
    );
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
