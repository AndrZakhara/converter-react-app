import { call, put, take, takeEvery } from 'redux-saga/effects';
import getProfile from 'api/getProfile';
import {
  FETCH_USER,
  FETCH_USER_CURRENCY_DIALS,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
} from 'actions/types';
import {
  fetchUser,
  fetchUserSuccess,
  serverError,
  fetchDialsRequest,
  fetchDialsSuccess,
  fetchDialsError,
  createDbProfileStart,
  createDbProfileSuccess,
} from 'actions';
import {
  getDealsConvertationfromDB,
  getUserFromDB,
  createUserInDB,
} from 'api/database';

export function* fetchUserSaga() {
  try {
    yield take(FETCH_USER);
    const { data } = yield call(getProfile);
    yield put(fetchUserSuccess(data.user));
  } catch (e) {
    yield put(serverError());
  }
}

export function* getUserDialsData({ payload }) {
  yield put(fetchDialsRequest());
  try {
    const dataList = yield call(getDealsConvertationfromDB, payload);
    const dataListArray = () => {
      const list = dataList;
      const newListArr = [];
      Object.entries(list).forEach(([key, item]) => {
        const itemCopy = { ...item };
        if (typeof itemCopy === 'object') {
          itemCopy.id = key;
        }
        newListArr.push(itemCopy);
      });
      return newListArr;
    };
    yield put(fetchDialsSuccess(dataListArray()));
  } catch (error) {
    yield put(fetchDialsError(error));
  }
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

export default function* watchGetAllUser() {
  yield takeEvery(FETCH_USER_CURRENCY_DIALS, getUserDialsData);
  yield takeEvery(SIGNIN_SUCCESS, getUserProfile);
  yield takeEvery(SIGNUP_SUCCESS, createUserProfileInDB);
}