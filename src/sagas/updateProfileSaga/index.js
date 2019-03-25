import { call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_PROFILE } from 'actions/types';
import {
  updateProfileStart,
  updateProfileSuccess,
  updateProfileError,
} from 'actions';
import { updateUserInDB } from 'api/database';

function* updateProfileSaga({ payload: { uid, ...user } }) {
  try {
    yield put(updateProfileStart());
    yield call(updateUserInDB, uid, user);
    yield put(updateProfileSuccess(user));
  } catch (e) {
    yield put(updateProfileError(e));
  }
}

function* mySaga() {
  yield takeEvery(UPDATE_PROFILE, updateProfileSaga);
}

export default mySaga;
