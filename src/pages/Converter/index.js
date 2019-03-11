import React, { Component } from "react";
import Currency from '../../components/Currency';
import { connect } from 'react-redux';
import { addCurrencyAsync, addCurrency } from '../../actions/currencyAction';


class Converter extends Component {
  componentDidMount(){
    this.props.addCurrency();
  }
  render() {
    return (
       <div className="converter-wrapper">
        <Currency currencies = { this.props.currencies } />
       </div>
    );
  }
}

export default connect(state => ({ currencies: state.currencyReducer }), { addCurrency, addCurrencyAsync })(Converter);
