/* eslint-disable import/prefer-default-export */
import { call, put, take } from 'redux-saga/effects';
import { getProfile } from 'api/getProfile';
import { FETCH_USER } from 'actions/types';
import { fetchUserSuccess, serverError } from 'actions';

export function* fetchUserSaga() {
  try {
    yield take(FETCH_USER);
    const { data } = yield call(getProfile);
    yield put(fetchUserSuccess(data.user));
  } catch (e) {
    yield put(serverError());
  }
}
