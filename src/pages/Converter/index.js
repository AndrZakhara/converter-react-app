import React from 'react';
import { connect } from 'react-redux';
import Currency from 'components/Currency';
import {
  loadCurrenciesAsync,
  loadCurrencies,
  countCurrency,
  countCurrencyAsync,
} from 'actions/currencyAction';

const Converter = ({
  currencies,
  loadCurrencies,
  currenciesCount,
  countCurrency,
  amountBuy,
}) => (
  <div className="converter-wrapper">
    <Currency
      currencies={currencies}
      loadCurrencies={loadCurrencies}
      countCurrency={countCurrency}
      currenciesCount={currenciesCount}
      amountBuy={amountBuy}
    />
  </div>
);

const mapStateToProps = ({ converter, form }) => ({
  currencies: converter.currencies,
  currenciesCount: form.currencyForm,
  amountBuy: converter.amountBuy,
});

const mapDispatchToProps = {
  loadCurrencies,
  loadCurrenciesAsync,
  countCurrency,
  countCurrencyAsync,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
