import { put, call, takeEvery } from 'redux-saga/effects';

import { ADD_CURRENCY, addCurrencyAsync } from 'actions/currencyAction';
import getCurrencyApi from 'api/axios';

function* getCurrencies() {
  const currenciesList = yield call(getCurrencyApi);
  yield put(addCurrencyAsync(currenciesList));
}

export default function* watchGetAllCurrencies() {
  yield takeEvery(ADD_CURRENCY, getCurrencies);
}
