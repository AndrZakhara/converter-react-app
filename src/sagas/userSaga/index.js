/* eslint-disable  */
import { call, put, take, takeEvery } from 'redux-saga/effects';
import getProfile from 'api/getProfile';
import { FETCH_USER, GET_USER_CURRENCY_DIALS } from 'actions/types';
import { fetchUserSuccess, serverError, fetchDialsSuccess } from 'actions';
import { data, defUser } from '../../mocks/db';

export function* fetchUserSaga() {
  try {
    yield take(FETCH_USER);
    const { data } = yield call(getProfile);
    yield put(fetchUserSuccess(data.user));
  } catch (e) {
    yield put(serverError());
  }
}

export function* getUserDialsData() {
  const dataList = yield call(() => defUser); // TODO
  yield put(fetchDialsSuccess(dataList));
}

export function* watchGetAllUser() {
  yield takeEvery(GET_USER_CURRENCY_DIALS, getUserDialsData);
}

export default function* getUserDialsSaga() {
  yield call(watchGetAllUser);
}
