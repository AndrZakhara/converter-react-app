import { put, call, takeEvery } from 'redux-saga/effects';
import {
  loadWeatherRequest,
  loadWeatherSuccess,
  loadWeatherError,
} from 'actions/weather.actions';
import { LOAD_WEATHER } from 'actions/types';
import getWeatherApi from 'api/weatherAPI';

function* getWeather() {
  yield put(loadWeatherRequest());
  try {
    const weatherData = yield call(getWeatherApi, 40.7127753, -74.0059728);
    yield put(loadWeatherSuccess(weatherData));
  } catch (error) {
    yield put(loadWeatherError(error));
  }
}

export default function* watcherWeather() {
  yield takeEvery(LOAD_WEATHER, getWeather);
}
