import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
  loadCurrenciesRequest,
  loadCurrenciesSuccess,
  loadCurrenciesError,
  countCurrencyAsync,
  sendCurrencyTransactionPost,
  sendCurrencyTransactionSuccess,
  sendCurrencyTransactionError,
} from 'actions';
import {
  LOAD_CURRENCY,
  COUNT_CURRENCY,
  SEND_DEAL,
} from 'actions/types.actions';
import getCurrencyApi from 'api/getCurrency';
import buyCurrency from 'utils/converter';
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
  yield put(sendCurrencyTransactionPost());
  try {
    yield call(createDealInDB, action.payload);
    yield put(sendCurrencyTransactionSuccess());
  } catch (error) {
    yield put(sendCurrencyTransactionError(error));
  }
}

function* watchGetAllCurrencies() {
  yield takeEvery(LOAD_CURRENCY, fetchCurrencies);
}

function* watchCountCurrencies() {
  yield takeEvery(COUNT_CURRENCY, countCurrencies);
}

function* watchSendDealConvertation() {
  yield takeEvery(SEND_DEAL, sendDealOfConverting);
}

export default function* currencyRootSaga() {
  yield all([
    watchGetAllCurrencies(),
    watchCountCurrencies(),
    watchSendDealConvertation(),
  ]);
}
