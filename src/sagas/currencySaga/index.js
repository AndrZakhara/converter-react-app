import { put, call, takeEvery } from 'redux-saga/effects';

import {
  ADD_CURRENCY,
  COUNT_CURRENCY,
  addCurrencyAsync,
  countCurrencyAsync,
} from 'actions/currencyAction';
import getCurrencyApi from 'api/axios';
import { buyCurrency } from 'helpers/converter.helper';

function* getCurrencies() {
  const currenciesList = yield call(getCurrencyApi);
  yield put(addCurrencyAsync(currenciesList));
}

function* countCurrencies(action) {
  const {
    currencies,
    currencySell,
    currencyBuy,
    amountSell,
    fee,
  } = action.payload;
  const buyValue = yield call(() =>
    buyCurrency(currencies, currencySell, currencyBuy, amountSell, fee),
  );
  yield put(countCurrencyAsync(buyValue));
}

export function* watchGetAllCurrencies() {
  yield takeEvery(ADD_CURRENCY, getCurrencies);
}

export function* watchCountCurrencies() {
  yield takeEvery(COUNT_CURRENCY, countCurrencies);
}
