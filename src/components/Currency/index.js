import React, { Component } from "react";
import {
  Select,
  MenuItem,
  FilledInput,
  TextField,
  Button
} from "@material-ui/core";
import './style.css';


class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyBuy: "RUR",
      currencySell: "USD",
      amountSell: 0,
      amountBuy: 0,
      fee: 1
    };
  }

  handleChange = event => {
    this.setState(() => ({ [event.target.name]: event.target.value }));
  };
  handleInput = (event) => {
    this.setState({ amountSell: event.target.value });
  }

  convertToUa = (from, to) => {
    const result = from * to;

    return result;
  }

  convertFromUa = (from, to) => {
    const res = from / to;

    return res;
  }

  countTax = (sum, pr) => {
    const res = sum * pr / 100;

    return res;
  }

  _changeCurrencies = () => {
      this.setState({ currencyBuy: this.state.currencySell});
      this.setState({ currencySell: this.state.currencyBuy});
      this.setState({ amountSell: this.state.amountBuy});
      this.setState({ amountBuy: this.state.amountSell});
  }

  _buyCurrency = event => {
const a = this.props.currencies.findIndex(item => item.ccy === this.state.currencySell);
const b = this.props.currencies.findIndex(item => item.ccy === this.state.currencyBuy);

let firstConvert = this.convertToUa(event.target.value, this.props.currencies[b].buy);
let secondConvert = this.convertFromUa(firstConvert, this.props.currencies[a].sale);
let countWithTax = secondConvert - this.countTax(secondConvert, this.state.fee);


this.setState({amountBuy: countWithTax });

}

  render() {
    const { currencies } = this.props;
    const { currencyBuy, currencySell, fee, amountBuy, amountSell } = this.state;
    
    return (
        <div className="app-content">
        <div className="converter-title">
          <h2>Currency Converter</h2>
        </div>
              <div className="currency-line">
                <label>
                  <p>give back</p>
                  <Select
                    value={ currencyBuy }
                    onChange={ this.handleChange }
                    input={<FilledInput name="currencyBuy" />}
                  >
                  { 
                    currencies.filter(item => item.ccy !== currencySell).map(item => {
                    return (
                    <MenuItem value={ item.ccy } key={item.ccy}>{ item.ccy }</MenuItem>
                    )
                  })
                    }
                  </Select>
                </label>
                <Button
                  variant="contained"
                   color="primary"
                   onClick = {
                     this._changeCurrencies
                   }
                >
                  &#8660;
                </Button>
                <label>
                  <p>we get</p>
                  <Select
                    value={ currencySell }
                    onChange={ this.handleChange }
                    input={ <FilledInput name="currencySell"/> }
                  >
                    { currencies.filter(item => item.ccy !== currencyBuy).map(item => {
                    return (
                    <MenuItem value={ item.ccy } key={item.ccy}>{ item.ccy }</MenuItem>
                    )
                  })}
                  </Select>
                </label>
              </div>
              <div className="counter-line">
                <TextField
                  id="outlined-adornment-amount"
                  variant="outlined"
                  label="How much to exchange"
                  type="number"
                  value = { amountSell }
                  name = 'amountSell'
                  min='0'
                  onInput={ this.handleInput }
                  onChange={ this._buyCurrency }
                />
                <TextField
                 id="outlined-number"
                  label="How much will we get"
                  type="number"
                  value = { amountBuy }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <div className="bottom-btns-wrap">
                <label className="fee-wrapper">
                  Fee
                  <Select
                    value={ fee }
                    onChange={ this.handleChange }
                    input={<FilledInput name="fee" />}>
                    <MenuItem value={ 0 }>0</MenuItem>
                    <MenuItem value={ 1 }>1</MenuItem>
                    <MenuItem value={ 2 }>2</MenuItem>
                    <MenuItem value={ 3 }>3</MenuItem>
                    <MenuItem value={ 4 }>4</MenuItem>
                    </Select>
                    %
                </label>
                <p>Sell<i>{ currencyBuy }</i> to <i>{ currencySell }</i></p>
              </div>
              <Button variant="contained" color="primary">
              Buy
              </Button>
        </div>
    );
  }
}

export default Currency;
