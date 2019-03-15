import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'; //eslint-disable-line
import * as actions from 'actions/adminPage';
import { GET_ALL_USERS } from 'actions/types';
import fb from 'api/firebase/index';

export function* getAllUser() {
  const userList = yield call(() =>
    fb
      .getUserList()
      .once('value')
      .then(snapshot => snapshot.val()),
  );

  yield put(actions.reciveAllUser(userList));
}

export function* watchGetAllUser() {
  yield takeEvery(GET_ALL_USERS, getAllUser);
}

export default function* adminSaga() {
  yield call(watchGetAllUser);
}
