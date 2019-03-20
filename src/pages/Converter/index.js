import React from 'react';
import { connect } from 'react-redux';
import Currency from 'components/Currency';
import {
  loadCurrencies,
  countCurrency,
  swappingCurrency,
  sendCurrencyTransaction,
} from 'actions/converter.actions';

const Converter = ({
  loadCurrencies: loadCurrenciesAction,
  countCurrency: countCurrencyAction,
  swappingCurrency: swappingCurrencyAction,
  sendCurrencyTransaction: sendCurrencyTransactionAction,
  currencies,
  currenciesCount,
}) => (
  <div className="converter-wrapper">
    <Currency
      currencies={currencies}
      currenciesCount={currenciesCount}
      loadCurrencies={loadCurrenciesAction}
      countCurrency={countCurrencyAction}
      swappingCurrency={swappingCurrencyAction}
      sendCurrencyTransaction={sendCurrencyTransactionAction}
    />
  </div>
);

const mapStateToProps = ({ converter, form }) => ({
  currencies: converter.currencies,
  currenciesCount: form.currencyForm,
});

const mapDispatchToProps = {
  loadCurrencies,
  countCurrency,
  swappingCurrency,
  sendCurrencyTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
