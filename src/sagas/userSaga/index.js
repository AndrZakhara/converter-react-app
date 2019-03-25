/* eslint-disable  */
import { call, put, take, takeEvery } from 'redux-saga/effects';
import getProfile from 'api/getProfile';
import { FETCH_USER, GET_USER_CURRENCY_DIALS, SIGNIN_SUCCESS, SIGNUP_SUCCESS } from 'actions/types';
import { fetchUser, fetchUserSuccess, serverError, fetchDialsSuccess, createDbProfileStart, createDbProfileSuccess } from 'actions';
import { data, defUser } from '../../mocks/db';
import { getUserFromDB } from 'api/database';
import { createUserInDB } from 'api/database';


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

function* getUserProfile({ payload: uid }) {
  try {
    yield put(fetchUser());    
    const user = yield call(getUserFromDB, uid);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(serverError(e));
  }
}

function* createUserProfileInDB({ payload: user }) {
  try {
    yield put(createDbProfileStart()); 
    yield call(
      createUserInDB,
      user.uid,
      user.ava,
      user.email,
      user.firstName,
      user.lastName,
      user.phone,
    );
    yield put(createDbProfileSuccess(user));
  } catch (e) {
    yield put(serverError(e));
  }
}

export function* watchGetAllUser() {
  yield takeEvery(GET_USER_CURRENCY_DIALS, getUserDialsData);
  yield takeEvery(SIGNIN_SUCCESS, getUserProfile);
  yield takeEvery(SIGNUP_SUCCESS, createUserProfileInDB);
}

export default function* getUserDialsSaga() {
  yield call(watchGetAllUser);
}


function* mySaga() {
  yield takeEvery(SIGNIN, SignIn);
}
