import {
  COUNT_CURRENCY,
  SWAP_CURRENCY,
  SEND_DEAL,
  SEND_DEAL_POST,
  SEND_DEAL_SUCCESS,
  SEND_DEAL_ERROR,
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
});

export const loadCurrenciesSuccess = data => ({
  type: LOAD_CURRENCY_SUCCESS,
  payload: data,
});

export const loadCurrenciesError = error => ({
  type: LOAD_CURRENCY_ERROR,
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
  type: SEND_DEAL,
  payload: { ...value },
});

export const sendCurrencyTransactionPost = () => ({
  type: SEND_DEAL_POST,
});

export const sendCurrencyTransactionSuccess = data => ({
  type: SEND_DEAL_SUCCESS,
  payload: data,
});

export const sendCurrencyTransactionError = error => ({
  type: SEND_DEAL_ERROR,
  payload: error,
});
