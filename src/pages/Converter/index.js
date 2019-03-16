import React from 'react';
import { connect } from 'react-redux';
import Currency from 'components/Currency';
import {
  loadCurrenciesAsync,
  loadCurrencies,
  buyConvertCurrency,
  countCurrency,
  countCurrencyAsync,
} from 'actions/currencyAction';

const Converter = ({
  currencies,
  loadCurrencies,
  buyConvertCurrency,
  currenciesCount,
  countCurrency,
  amountBuy,
}) => (
  <div className="converter-wrapper">
    <Currency
      onSubmit={buyConvertCurrency}
      currencies={currencies}
      loadCurrencies={loadCurrencies}
      countCurrency={countCurrency}
      currenciesCount={currenciesCount}
      amountBuy={amountBuy}
    />
  </div>
);

const mapStateToProps = ({ combineEvents, form }) => ({
  currencies: combineEvents.currencies,
  currenciesFields: combineEvents.currenciesBuy,
  currenciesCount: form.currencyForm,
  amountBuy: combineEvents.amountBuy,
});

const mapDispatchToProps = {
  loadCurrencies,
  loadCurrenciesAsync,
  buyConvertCurrency,
  countCurrency,
  countCurrencyAsync,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
