import axios from 'axios';
import { WEATHER_API_URL } from 'constants/endpoints';
import config from 'config';

export default (lat, long) =>
  axios
    .get(
      `${WEATHER_API_URL}?lat=${lat}&lon=${long}&key=${config.apiWeatherKey}`,
    )
    .then(item => item.data)
    .then(item => item.data[0]);
