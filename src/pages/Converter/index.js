import React from 'react';
import { connect } from 'react-redux';
import Currency from '../../components/Currency';
import {
  addCurrencyAsync,
  addCurrency,
  buyConvertCurrency,
  countCurrency,
} from '../../actions/currencyAction';


const Converter = ({currencies, addCurrency, buyConvertCurrency, currenciesCount, countCurrency }) => {

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
    />
  </div>);
};


const mapStateToProps = (state) => {
  return {
    currencies: state.combineEvents.currencies,
    currenciesFields: state.combineEvents.currenciesBuy,
    currenciesCount: state.form.currencyForm
  }
}

const mapDispatchToProps = {
  addCurrency,
  addCurrencyAsync,
  buyConvertCurrency,
  countCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
