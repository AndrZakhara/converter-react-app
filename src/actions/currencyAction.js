export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_CURRENCY_ASYNC = 'ADD_CURRENCY_ASYNC';

export const addCurrency = () => {
   return {
      type: ADD_CURRENCY,
    };
}

export const addCurrencyAsync = data => {
   return {
      type: ADD_CURRENCY_ASYNC,
      payload: data
    };
}