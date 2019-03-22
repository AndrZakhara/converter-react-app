import { call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_PROFILE } from 'actions/types';
import { serverError } from 'actions';
import { updateProfileInDB } from 'api/database';

function* updateProfileSaga({
  payload: { uid, ava, email, firstName, lastName, phone },
}) {
  try {
    yield call(updateProfileInDB, uid, ava, email, firstName, lastName, phone);
  } catch (e) {
    yield put(serverError());
  }
}

function* updateProfile() {
  yield takeEvery(UPDATE_PROFILE, updateProfileSaga);
}

export default updateProfile;
