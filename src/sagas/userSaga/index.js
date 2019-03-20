/* eslint-disable  */
import { call, put, take, takeEvery } from 'redux-saga/effects';
import getProfile from 'api/getProfile';
import { FETCH_USER, GET_USER_CURRENCY_DIALS } from 'actions/types';
import { fetchUserSuccess, serverError, fetchDialsSuccess } from 'actions';
import { saveProfile } from 'actions/user';
import { data, defUser } from '../../mocks/db';
import { getUserfromDB } from 'api/database';


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

function* getUserProfile({ payload: { uid } }) {
  try {
    const user = yield call(getUserfromDB, uid);
    yield put(saveProfile(user));
  } catch (e) {
    yield put(serverError(e));
  }
}

export function* watchGetAllUser() {
  yield takeEvery(GET_USER_CURRENCY_DIALS, getUserDialsData);
  yield takeEvery(SIGNIN, getUserProfile);
}

export default function* getUserDialsSaga() {
  yield call(watchGetAllUser);
}


function* mySaga() {
  yield takeEvery(SIGNIN, SignIn);
}
