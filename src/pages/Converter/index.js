import React from 'react';
import { connect } from 'react-redux';
import Currency from 'components/Currency';
import {
  loadCurrencies,
  countCurrency,
  swappingCurrency,
} from 'actions/converter.actions';

const Converter = ({
  loadCurrencies: loadCurrenciesAction,
  countCurrency: countCurrencyAction,
  swappingCurrency: swappingCurrencyAction,
  currencies,
  currenciesCount,
  amountBuy,
}) => (
  <div className="converter-wrapper">
    <Currency
      currencies={currencies}
      loadCurrencies={loadCurrenciesAction}
      countCurrency={countCurrencyAction}
      currenciesCount={currenciesCount}
      amountBuy={amountBuy}
      swappingCurrency={swappingCurrencyAction}
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
  countCurrency,
  swappingCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
