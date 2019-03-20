import axios from 'axios';

export default () =>
  axios
    .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(item => item.data);
