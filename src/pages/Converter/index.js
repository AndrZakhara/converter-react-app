import React, { Component } from 'react';
import { connect } from 'react-redux';
import Currency from 'components/Currency';
import { addCurrencyAsync, addCurrency, chooseCurrencyBuy, chooseCurrencySell } from 'actions/currencyAction';

class Converter extends Component {
  componentDidMount() {
    this.props.addCurrency();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div className="converter-wrapper">
        <Currency currencies={currencies} />
      </div>
    );
  }
}

export default connect(
  state => ({ currencies: state.currencyReducer }),
  { addCurrency, addCurrencyAsync, chooseCurrencyBuy, chooseCurrencySell },
)(Converter);
