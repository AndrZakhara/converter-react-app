import { put, call, takeEvery } from 'redux-saga/effects';
import {
  loadCurrenciesRequest,
  loadCurrenciesSuccess,
  loadCurrenciesError,
  countCurrencyAsync,
} from 'actions/converter.actions';
import { LOAD_CURRENCY, COUNT_CURRENCY } from 'actions/types';
import getCurrencyApi from 'api/getCurrency';
import buyCurrency from 'helpers/converter.helper';

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

export function* watchGetAllCurrencies() {
  yield takeEvery(LOAD_CURRENCY, fetchCurrencies);
}

export function* watchCountCurrencies() {
  yield takeEvery(COUNT_CURRENCY, countCurrencies);
}
