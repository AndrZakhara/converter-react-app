import { put, call, takeEvery } from 'redux-saga/effects';
import {
  loadCurrenciesRequest,
  loadCurrenciesSuccess,
  loadCurrenciesError,
  countCurrencyAsync,
  sendCurrencyTransactionPost,
  sendCurrencyTransactionSuccess,
  sendCurrencyTransactionError,
} from 'actions/converter.actions';
import { LOAD_CURRENCY, COUNT_CURRENCY, SEND_DEAL } from 'actions/types';
import getCurrencyApi from 'api/getCurrency';
import buyCurrency from 'helpers/converter.helper';
import { createDealInDB } from 'api/database';

function* fetchCurrencies() {
  yield put(loadCurrenciesRequest());
  try {
    const currenciesList = yield call(getCurrencyApi);
    yield put(loadCurrenciesSuccess(currenciesList));
  } catch (error) {
    yield put(loadCurrenciesError(error));
  }
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

function* sendDealOfConverting(action) {
  const {
    uid,
    transactionDate,
    currencySell,
    amountSell,
    currencyBuy,
    amountBuy,
    fee,
  } = action.payload;

  yield put(sendCurrencyTransactionPost());
  try {
    yield call(
      createDealInDB,
      uid,
      transactionDate,
      currencySell,
      amountSell,
      currencyBuy,
      amountBuy,
      fee,
    );

    yield put(sendCurrencyTransactionSuccess());
  } catch (error) {
    yield put(sendCurrencyTransactionError(error));
  }
}

export function* watchGetAllCurrencies() {
  yield takeEvery(LOAD_CURRENCY, fetchCurrencies);
}

export function* watchCountCurrencies() {
  yield takeEvery(COUNT_CURRENCY, countCurrencies);
}

export function* watchSendDealConvertation() {
  yield takeEvery(SEND_DEAL, sendDealOfConverting);
}
