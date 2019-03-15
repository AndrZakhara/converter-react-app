import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

import { feeConvert } from '../../mocks/db';
import { styles } from './style';
import { buyCurrency } from '../../helpers/converter.helper';

class Currency extends Component {
  componentDidMount() {
    this.props.addCurrency();
  };

  _changeCurrencies = () => {
    const { currenciesCount, change } = this.props;
    const {
      currencyBuy,
      currencySell,
      amountSell,
      amountBuy,
    } = currenciesCount.values;
    change('currencyBuy', currencySell);
    change('currencySell', currencyBuy);
    change('amountBuy', amountSell);
    change('amountSell', amountBuy);
  };

  _buyCurrency = () => {
    const { currenciesCount, change, currencies } = this.props;
    const { currencyBuy, currencySell, amountSell, fee } = currenciesCount.values;
    buyCurrency(currencies, currencySell, currencyBuy, amountSell, fee, change);
    this.props.countCurrency(currenciesCount.values);
  };

  render() {
    const { currencies, classes, handleSubmit } = this.props;

    const selectsOptions = oppositeCurrency =>
      currencies
        .filter(item => item.ccy !== oppositeCurrency)
        .map(item => (
          <option value={item.ccy} key={item.ccy}>
            {item.ccy}
          </option>
        ));
    const feeSelectsOption = () =>
      feeConvert.map(item => (
        <option value={item} key={item}>
          {item}
        </option>
      ));

    return (
      <form
        name="currencyForm"
        className={classes.appContent}
        onSubmit={handleSubmit}>
        <div className={classes.converterTitle}>
          <h2 className={classes.marginDef}>Currency Converter</h2>
        </div>
        <div className={classes.currencyLine}>
          <FormControl className={classes.formControl}>
            <p className={classes.text}>give back</p>
            <Field
              className={classes.select}
              name="currencySell"
              component="select"
              onChange={this._buyCurrency}>
              {selectsOptions()}
            </Field>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={this._changeCurrencies}>
            &#8660;
          </Button>
          <FormControl className={classes.formControl}>
            <p className={classes.text}>we get</p>
            <Field
              className={classes.select}
              name="currencyBuy"
              component="select"
              onChange={this._buyCurrency}>
              {selectsOptions()}
            </Field>
          </FormControl>
        </div>
        <div className={classes.currencyLine}>
          <Field
            className={classes.inputAmount}
            name="amountSell"
            component="input"
            type="number"
            label="How much to exchange"
            min="0"
            onChange={this._buyCurrency}
          />
          <Field
            className={classes.inputAmount}
            name="amountBuy"
            component="input"
            type="number"
            label="How much will we get"
            readOnly
          />
        </div>
        <div className={classes.bottomBtnsWrap}>
          <FormControl className={classes.feeWrapper}>
            <p className={classes.text}>Fee </p>
            <Field
              className={classes.feeSelect}
              name="fee"
              component="select"
              onChange={this._buyCurrency}>
              {feeSelectsOption()}
            </Field>
            <p className={classes.text}> %</p>
          </FormControl>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.buyBtn}
          type="submit">
          Buy
        </Button>
      </form>
    );
  }
}

Currency.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  reduxForm({
    form: 'currencyForm',
    enableReinitialize: true,
    initialValues: {
      currencyBuy: 'EUR',
      currencySell: 'USD',
      amountSell: 0,
      amountBuy: 0,
      fee: 2,
    },
  }),
  withStyles(styles),
)(Currency);