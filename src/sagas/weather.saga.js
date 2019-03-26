import { put, call, takeEvery } from 'redux-saga/effects';
import {
  loadWeatherRequest,
  loadWeatherSuccess,
  loadWeatherError,
} from 'actions/weather.actions';
import { LOAD_WEATHER } from 'actions/types.actions';
import getWeatherApi from 'api/weatherAPI';

function* getWeather(action) {
  yield put(loadWeatherRequest());
  const { lat, lng } = action.payload;
  try {
    const weatherData = yield call(getWeatherApi, lat, lng);
    yield put(loadWeatherSuccess(weatherData));
  } catch (error) {
    yield put(loadWeatherError(error));
  }
}

export default function* watcherWeather() {
  yield takeEvery(LOAD_WEATHER, getWeather);
}
