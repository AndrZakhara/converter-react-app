import { put, call, takeEvery } from 'redux-saga/effects';

import {
  LOAD_CURRENCY,
  COUNT_CURRENCY,
  loadCurrenciesAsync,
  countCurrencyAsync,
} from 'actions/converter.actions';
import getCurrencyApi from 'api/axios';
import buyCurrency from 'helpers/converter.helper';

function* getCurrencies() {
  const currenciesList = yield call(getCurrencyApi);
  yield put(loadCurrenciesAsync(currenciesList));
}

function* countCurrencies(action) {
  const {
    currencies,
    currencySell,
    currencyBuy,
    amountSell,
    fee,
  } = action.payload;
  const buyValue = buyCurrency(
    currencies,
    currencySell,
    currencyBuy,
    amountSell,
    fee,
  );
  yield put(countCurrencyAsync(buyValue));
}

export function* watchGetAllCurrencies() {
  yield takeEvery(LOAD_CURRENCY, getCurrencies);
}

export function* watchCountCurrencies() {
  yield takeEvery(COUNT_CURRENCY, countCurrencies);
}
