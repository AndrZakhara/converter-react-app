export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_CURRENCY_ASYNC = 'ADD_CURRENCY_ASYNC';
export const BUY_CURRENCY = 'BUY_CURRENCY';
export const COUNT_CURRENCY = 'COUNT_CURRENCY';
export const COUNT_CURRENCY_ASYNC = 'COUNT_CURRENCY_ASYNC';

export const addCurrency = () => ({
  type: ADD_CURRENCY,
});

export const addCurrencyAsync = data => ({
  type: ADD_CURRENCY_ASYNC,
  payload: data,
});

export const buyConvertCurrency = value => ({
  type: BUY_CURRENCY,
  payload: value,
});

export const countCurrency = (currencies, currencySell, currencyBuy, amountSell, fee) => ({
  type: COUNT_CURRENCY,
  payload: {
    currencies,
    currencySell,
    currencyBuy,
    amountSell,
    fee
  }
});

export const countCurrencyAsync = value => ({
  type: COUNT_CURRENCY_ASYNC,
  payload: value,
});