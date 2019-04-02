import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'; //eslint-disable-line
import * as a from 'actions';
import {
  GET_USERS_REQUEST,
  RESET_PASSWORD_REQUEST,
} from 'actions/types.actions';
import { getAllUsersFromDB } from 'api/database';
import { resetSelectedUserPassword } from 'api/admin';

export function* getAllUser() {
  const userList = yield call(getAllUsersFromDB);

  yield put(a.getUsersSuccess(userList));
}

export function* resetPassword() {
  const getSelectedUserId = ({ admin }) => admin.selectedUser.id;
  const selectedUserId = yield select(getSelectedUserId);

  try {
    const isResetPass = yield call(resetSelectedUserPassword, {
      selectedUserId,
      newPassword: '1234567',
    });
    yield put(a.resetPasswordSuccess(isResetPass));
  } catch (e) {
    yield put(a.resetPasswordError(e));
  }
}

export function* watchAdminActions() {
  yield takeEvery(GET_USERS_REQUEST, getAllUser);
  yield takeEvery(RESET_PASSWORD_REQUEST, resetPassword);
}

export default function* adminSaga() {
  yield call(watchAdminActions);
}
