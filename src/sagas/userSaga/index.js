/* eslint-disable import/prefer-default-export */
import { call, put, take, takeEvery } from 'redux-saga/effects';
import { getProfile } from '../../api/getProfile';
import { FETCH_USER, GET_USER_CURRENCY_DIALS } from '../../actions/types';
import { data } from '../../mocks/db';
import {
  fetchUserSuccess,
  serverError,
  fetchDialsSuccess,
} from '../../actions';

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
  const dataList = yield call(() => data); // TODO
  yield put(fetchDialsSuccess(dataList));
}

export function* watchGetAllUser() {
  yield takeEvery(GET_USER_CURRENCY_DIALS, getUserDialsData);
}

export default function* getUserDialsSaga() {
  yield call(watchGetAllUser);
}
