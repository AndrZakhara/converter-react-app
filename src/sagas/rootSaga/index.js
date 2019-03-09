import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'; //eslint-disable-line
import * as actions from '../../actions';
import { users } from '../../db';

export function* getAllUser() {
  const userList = yield call(() => users);
  yield put(actions.reciveAllUser(userList));
}

export function* watchGetAllUser() {
  yield takeEvery(actions.GET_ALL_USERS, getAllUser);
}

export default function* rootSaga() {
  yield all([fork(getAllUser), fork(watchGetAllUser)]);
}
