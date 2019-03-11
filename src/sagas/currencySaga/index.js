import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { ADD_CURRENCY, addCurrencyAsync } from '../../actions/currencyAction';

function* getCurrencies() {
  const currenciesList = yield call(() => {
  return axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
        .then(item => item.data);
  });
  yield put(addCurrencyAsync(currenciesList));

}

export default function* watchGetAllCurrencies() {
  yield takeEvery(ADD_CURRENCY, getCurrencies);
}