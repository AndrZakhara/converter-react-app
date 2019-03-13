import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'; //eslint-disable-line
import * as actions from 'actions/adminPageActons';
import { users } from 'mocks/db';

export function* getAllUser() {
  const userList = yield call(() => users); // async query here
  yield put(actions.reciveAllUser(userList));
}

export function* watchGetAllUser() {
  yield takeEvery(actions.GET_ALL_USERS, getAllUser);
}

export default function* adminSaga() {
  yield call(watchGetAllUser);
}
