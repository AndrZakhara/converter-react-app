import {
  COUNT_CURRENCY,
  SWAP_CURRENCY,
  SEND_DIAL,
  LOAD_CURRENCY,
  LOAD_CURRENCY_REQUEST,
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_ERROR,
  COUNT_CURRENCY_ASYNC,
} from './types';

export const loadCurrencies = () => ({
  type: LOAD_CURRENCY,
});

export const loadCurrenciesRequest = () => ({
  type: LOAD_CURRENCY_REQUEST,
  onLoading: true,
});

export const loadCurrenciesSuccess = data => ({
  type: LOAD_CURRENCY_SUCCESS,
  payload: data,
  onLoading: false,
});

export const loadCurrenciesError = error => ({
  type: LOAD_CURRENCY_ERROR,
  payload: error,
  onLoading: false,
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
