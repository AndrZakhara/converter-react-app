import axios from 'axios';
import { P24_API_URL } from 'constants/endpoints';

export default () =>
  axios
    .get(`${P24_API_URL}/pubinfo?json&exchange&coursid=5`)
    .then(item => item.data);
