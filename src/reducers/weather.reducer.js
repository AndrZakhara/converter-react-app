import combineEvents from 'utils/combineEvents';
import {
  LOAD_WEATHER_REQUEST,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
} from 'actions/types';

const initialState = {
  weatherData: {
    city_name: 'New York',
    temp: 30,
    weather: { icon: 'c01d', description: 'Will be sun' },
  },
};

export default combineEvents(
  {
    [LOAD_WEATHER_REQUEST]: () => ({
      onLoading: true,
    }),

    [LOAD_WEATHER_SUCCESS]: (state, { payload }) => ({
      weatherData: payload,
      onLoading: false,
    }),
    [LOAD_WEATHER_ERROR]: (state, { payload }) => ({
      error: payload,
      onLoading: false,
    }),
  },
  initialState,
);
