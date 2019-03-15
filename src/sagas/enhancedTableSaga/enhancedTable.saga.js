import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'; //eslint-disable-line
import * as actions from '../../actions/types';
import { data } from '../../mocks/db';
import { fetchUserData } from '../../actions/homePageActions';

export function* getUserData() {
  const dataList = yield call(() => data); // TODO
  yield put(fetchUserData(dataList));
}

export function* watchGetAllUser() {
  yield takeEvery(actions.GET_USER_HISTORY, getUserData);
}

export default function* enhancedTableSaga() {
  yield call(watchGetAllUser);
}