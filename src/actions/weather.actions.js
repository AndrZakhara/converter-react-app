import {
  LOAD_WEATHER,
  LOAD_WEATHER_REQUEST,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
} from './types';

export const loadWeather = value => ({
  type: LOAD_WEATHER,
  payload: value,
});

export const loadWeatherRequest = () => ({
  type: LOAD_WEATHER_REQUEST,
});

export const loadWeatherSuccess = data => ({
  type: LOAD_WEATHER_SUCCESS,
  payload: data,
});

export const loadWeatherError = error => ({
  type: LOAD_WEATHER_ERROR,
  payload: error,
});
