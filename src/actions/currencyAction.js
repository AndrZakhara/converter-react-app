export const LOAD_CURRENCY = 'LOAD_CURRENCY';
export const LOAD_CURRENCY_ASYNC = 'LOAD_CURRENCY_ASYNC';
export const COUNT_CURRENCY = 'COUNT_CURRENCY';
export const COUNT_CURRENCY_ASYNC = 'COUNT_CURRENCY_ASYNC';

export const loadCurrencies = () => ({
  type: LOAD_CURRENCY,
});

export const loadCurrenciesAsync = data => ({
  type: LOAD_CURRENCY_ASYNC,
  payload: data,
});

export const countCurrency = ( currencies, item ) => ({
  type: COUNT_CURRENCY,
  payload: {
    currencies,
    ...item
  },
});

export const countCurrencyAsync = value => ({
  type: COUNT_CURRENCY_ASYNC,
  payload: value,
});
