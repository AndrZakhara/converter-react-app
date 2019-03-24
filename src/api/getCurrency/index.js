import axios from 'axios';
import PRIVAT from 'constants/endpoints';

export default () =>
  axios
    .get(`${PRIVAT}/pubinfo?json&exchange&coursid=5`)
    .then(item => item.data);
