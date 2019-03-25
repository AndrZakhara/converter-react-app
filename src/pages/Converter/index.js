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
  loadCurrenciesAction,
  countCurrencyAction,
  swappingCurrencyAction,
  sendCurrencyTransactionAction,
  currencies,
  onSending,
  currenciesCount,
  uid,
}) => (
  <div className="converter-wrapper">
    <Currency
      uid={uid}
      currencies={currencies}
      onSending={onSending}
      currenciesCount={currenciesCount}
      loadCurrencies={loadCurrenciesAction}
      countCurrency={countCurrencyAction}
      swappingCurrency={swappingCurrencyAction}
      sendCurrencyTransaction={sendCurrencyTransactionAction}
    />
  </div>
);

const mapStateToProps = ({ converter, form, user }) => ({
  currencies: converter.currencies,
  currenciesCount: form.currencyForm,
  uid: user.profile.uid,
  deal: converter.deal,
  onSending: converter.onSending,
});

const mapDispatchToProps = {
  loadCurrenciesAction: loadCurrencies,
  countCurrencyAction: countCurrency,
  swappingCurrencyAction: swappingCurrency,
  sendCurrencyTransactionAction: sendCurrencyTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
