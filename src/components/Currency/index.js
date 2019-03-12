import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  MenuItem,
  FilledInput,
  TextField,
  Button,
  FormControl,
  withStyles,
} from '@material-ui/core';
import { feeConvert } from '../../mocks/db';
import { styles } from './style';

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyBuy: 'EUR',
      currencySell: 'USD',
      amountSell: 0,
      amountBuy: 0,
      fee: 2,
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
    const { currencies, classes } = this.props;
    const {
      currencyBuy,
      currencySell,
      fee,
      amountBuy,
      amountSell,
    } = this.state;
    const { handleChange, _changeCurrencies, handleInput, _buyCurrency } = this;
    const selectsOptions = oppositeCurrency =>
      currencies
        .filter(item => item.ccy !== oppositeCurrency)
        .map(item => (
          <MenuItem value={item.ccy} key={item.ccy}>
            {item.ccy}
          </MenuItem>
        ));
    const feeSelectsOption = () =>
      feeConvert.map(item => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      ));

    return (
      <div className={classes.appContent}>
        <div className={classes.converterTitle}>
          <h2 className={classes.marginDef}>Currency Converter</h2>
        </div>
        <div className={classes.currencyLine}>
          <FormControl className={classes.formControl}>
            <p>give back</p>
            <Select
              value={currencyBuy}
              onChange={handleChange}
              input={<FilledInput name="currencyBuy" />}>
              {selectsOptions(currencySell)}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={_changeCurrencies}>
            &#8660;
          </Button>
          <FormControl className={classes.formControl}>
            <p>we get</p>
            <Select
              value={currencySell}
              onChange={handleChange}
              input={<FilledInput name="currencySell" />}>
              {selectsOptions(currencyBuy)}
            </Select>
          </FormControl>
        </div>
        <div className={classes.currencyLine}>
          <TextField
            className={classes.inputAmount}
            variant="outlined"
            label="How much to exchange"
            type="number"
            value={amountSell}
            name="amountSell"
            inputProps={{ min: '0', step: '1' }}
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
        <div className={classes.bottomBtnsWrap}>
          <FormControl className={classes.feeWrapper}>
            <p>Fee </p>
            <Select
              value={fee}
              onChange={handleChange}
              input={<FilledInput name="fee" />}>
              {feeSelectsOption()}
            </Select>
            <p> %</p>
          </FormControl>
          <p>
            Sell <i>{currencyBuy}</i> to <i>{currencySell}</i>
          </p>
        </div>
        <Button variant="contained" color="primary" className={classes.buyBtn}>
          Buy
        </Button>
      </div>
    );
  }
}

Currency.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Currency);
