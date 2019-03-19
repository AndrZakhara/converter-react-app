import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'; //eslint-disable-line
import * as actions from 'actions';
import { GET_ALL_USERS } from 'actions/types';
import fb from 'api/firebase'; //TODO will fixed in another branch

export function* getAllUser() {
  const userList = yield call(fb.fetchUsers); //TODO will fixed in another branch

  yield put(actions.reciveAllUser(userList));
}

export function* watchGetAllUser() {
  yield takeEvery(GET_ALL_USERS, getAllUser);
}

export default function* adminSaga() {
  yield call(watchGetAllUser);
}
