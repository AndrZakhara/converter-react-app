import axios from 'axios';

export const getCurrencyApi = () =>
    axios
      .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(item => item.data);