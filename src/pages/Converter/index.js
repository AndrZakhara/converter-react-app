import React from 'react';
import { connect } from 'react-redux';
import Currency from 'components/Currency';
import { addCurrencyAsync, addCurrency, buyConvertCurrency, countCurrency, countCurrencyAsync } from 'actions/currencyAction';


const Converter = ({currencies, addCurrency, buyConvertCurrency, currenciesCount, countCurrency, amountBuy }) => {

  const submit = values => {
    buyConvertCurrency(values);
  };

  return (<div className="converter-wrapper">
    <Currency
      onSubmit={submit}
      currencies={currencies}
      addCurrency={addCurrency}
      countCurrency={countCurrency}
      currenciesCount={currenciesCount}
      amountBuy={amountBuy}
    />
  </div>);
};


const mapStateToProps = (state) => {
  return {
    currencies: state.combineEvents.currencies,
    currenciesFields: state.combineEvents.currenciesBuy,
    currenciesCount: state.form.currencyForm,
    amountBuy: state.combineEvents.amountBuy,
  }
}

const mapDispatchToProps = {
  addCurrency,
  addCurrencyAsync,
  buyConvertCurrency,
  countCurrency,
  countCurrencyAsync,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
