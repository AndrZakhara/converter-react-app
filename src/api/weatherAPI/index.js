import axios from 'axios';
import apiKey from './config';

export default (lat, long) =>
  axios
    .get(
      `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${apiKey}`,
    )
    .then(item => item.data)
    .then(item => item.data[0]);
