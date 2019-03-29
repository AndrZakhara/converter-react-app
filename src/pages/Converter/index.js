import React from 'react';
import { connect } from 'react-redux';

import Currency from 'components/Currency';
import {
  loadCurrencies,
  countCurrency,
  swappingCurrency,
  sendCurrencyTransaction,
} from 'actions';

const Converter = ({
  loadCurrenciesAction,
  countCurrencyAction,
  swappingCurrencyAction,
  sendCurrencyTransactionAction,
  currencies,
  onSending,
  currenciesCount,
  uid,
  onLoad,
}) => (
  <div className="converter-wrapper">
    <Currency
      uid={uid}
      onLoad={onLoad}
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
  onLoad: converter.onLoading,
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
