import axios from 'axios';
import { WEATHER_API_URL } from 'constants/endpoints';
import apiWeatherKey from 'config';

export default (lat, long) =>
  axios
    .get(`${WEATHER_API_URL}?lat=${lat}&lon=${long}&key=${apiWeatherKey}`)
    .then(item => item.data)
    .then(item => item.data[0]);
