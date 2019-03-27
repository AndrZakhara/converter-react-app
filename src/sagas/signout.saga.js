import { call, put, takeEvery } from 'redux-saga/effects';
import { signOutStart, signOutSuccess, signOutError } from 'actions';
import { signOut } from 'api/auth';
import { SIGN_OUT } from 'actions/types.actions';

function* SignOut() {
  try {
    yield put(signOutStart());
    yield call(signOut);
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGN_OUT, SignOut);
}

export default mySaga;
