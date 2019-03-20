import {
  LOAD_CURRENCY,
  COUNT_CURRENCY,
  SWAP_CURRENCY,
  SEND_DIAL,
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_FAILURE,
  COUNT_CURRENCY_ASYNC,
} from './types';

export const loadCurrencies = () => ({
  type: LOAD_CURRENCY,
});

export const loadCurrenciesSuccess = data => ({
  type: LOAD_CURRENCY_SUCCESS,
  payload: data,
});

export const loadCurrenciesError = error => ({
  type: LOAD_CURRENCY_FAILURE,
  payload: error,
});

export const countCurrency = (currencies, item) => ({
  type: COUNT_CURRENCY,
  payload: {
    currencies,
    ...item,
  },
});

export const countCurrencyAsync = value => ({
  type: COUNT_CURRENCY_ASYNC,
  payload: value,
});

export const swappingCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const sendCurrencyTransaction = value => ({
  type: SEND_DIAL,
  payload: value,
});
