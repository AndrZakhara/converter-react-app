export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_CURRENCY_ASYNC = 'ADD_CURRENCY_ASYNC';
export const BUY_CURRENCY = 'BUY_CURRENCY';
export const SELL_CURRENCY = 'SELL_CURRENCY';

export const addCurrency = () => ({
  type: ADD_CURRENCY,
});

export const addCurrencyAsync = data => ({
  type: ADD_CURRENCY_ASYNC,
  payload: data,
});

export const chooseCurrencyBuy = data => ({
  type: BUY_CURRENCY,
  payload: data,
});

export const chooseCurrencySell = data => ({
  type: SELL_CURRENCY,
  payload: data,
});
