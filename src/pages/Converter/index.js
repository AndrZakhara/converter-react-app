import React from 'react';
import { connect } from 'react-redux';
import Currency from '../../components/Currency';
import {
  addCurrencyAsync,
  addCurrency,
  buyConvertCurrency,
} from '../../actions/currencyAction';

const Converter = ({currencies, addCurrency, buyConvertCurrency}) => (
  <div className="converter-wrapper">
    <Currency
      currencies={currencies}
      addCurrency={addCurrency}
      buyConvertCurrency={buyConvertCurrency}
    />
  </div>
);

export default connect(
  state => ({ currencies: state.combineEvents.currencies }),
  { addCurrency, addCurrencyAsync, buyConvertCurrency },
)(Converter);
