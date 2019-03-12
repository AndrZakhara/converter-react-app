import React, { Component } from 'react';
import {
  Select,
  MenuItem,
  FilledInput,
  TextField,
  Button,
} from '@material-ui/core';
import './style.css';

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyBuy: 'EUR',
      currencySell: 'USD',
      amountSell: 0,
      amountBuy: 0,
      fee: 1,
    };
  }

  handleChange = event => {
    this.setState(() => ({ [event.target.name]: event.target.value }));
  };

  handleInput = event => {
    this.setState({ amountSell: event.target.value });
  };

  convertToUa = (from, to) => {
    const result = from * to;

    return result;
  };

  convertFromUa = (from, to) => {
    const res = from / to;

    return res;
  };

  countTax = (sum, pr) => {
    const res = (sum * pr) / 100;

    return res;
  };

  _changeCurrencies = () => {
    const { currencySell, currencyBuy, amountBuy, amountSell } = this.state;
    this.setState({ currencyBuy: currencySell });
    this.setState({ currencySell: currencyBuy });
    this.setState({ amountSell: amountBuy });
    this.setState({ amountBuy: amountSell });
  };

  _buyCurrency = event => {
    const { currencies } = this.props;
    const { currencySell, currencyBuy, fee } = this.state;

    const a = currencies.findIndex(item => item.ccy === currencySell);
    const b = currencies.findIndex(item => item.ccy === currencyBuy);

    const firstConvert = this.convertToUa(
      event.target.value,
      currencies[b].buy,
    );
    const secondConvert = this.convertFromUa(firstConvert, currencies[a].sale);
    const countWithTax = secondConvert - this.countTax(secondConvert, fee);

    this.setState({ amountBuy: Math.trunc(countWithTax * 100) / 100 });
  };

  render() {
    const {currencies} = this.props;
    const {
      currencyBuy,
      currencySell,
      fee,
      amountBuy,
      amountSell,
    } = this.state;
    const { handleChange, _changeCurrencies, handleInput, _buyCurrency } = this;
    return (
      <div className="app-content">
        <div className="converter-title">
          <h2>Currency Converter</h2>
        </div>
        <div className="currency-line">
          <label>
            <p>give back</p>
            <Select
              value={currencyBuy}
              onChange={handleChange}
              input={<FilledInput name="currencyBuy" />}>
              {currencies
                .filter(item => item.ccy !== currencySell)
                .map((item, i )=> (
                  <MenuItem value={item.ccy} key={i}>
                    {item.ccy}
                  </MenuItem>
                ))}
            </Select>
          </label>
          <Button
            variant="contained"
            color="primary"
            onClick={_changeCurrencies}>
            &#8660;
          </Button>
          <label>
            <p>we get</p>
            <Select
              value={currencySell}
              onChange={handleChange}
              input={<FilledInput name="currencySell" />}>
              {currencies
                .filter(item => item.ccy !== currencyBuy)
                .map((item, i ) => (
                  <MenuItem value={item.ccy} key={ i }>
                    {item.ccy}
                  </MenuItem>
                ))}
            </Select>
          </label>
        </div>
        <div className="counter-line">
          <TextField
            id="outlined-adornment-amount"
            variant="outlined"
            label="How much to exchange"
            type="number"
            value={amountSell}
            name="amountSell"
            min="0"
            onInput={handleInput}
            onChange={_buyCurrency}
          />
          <TextField
            id="outlined-number"
            label="How much will we get"
            type="number"
            value={amountBuy}
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
              value={fee}
              onChange={handleChange}
              input={<FilledInput name="fee" />}>
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
            %
          </label>
          <p>
            Sell <i>{currencyBuy}</i> to <i>{currencySell}</i>
          </p>
        </div>
        <Button variant="contained" color="primary">
          Buy
        </Button>
      </div>
    );
  }
}

export default Currency;
