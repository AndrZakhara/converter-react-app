import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { feeConvert } from 'mocks/db';
import { styles } from './style';
import { swappingVariables } from 'helpers/converter.helper';

class Currency extends Component {
  componentDidMount() {
    this.props.loadCurrencies();
  }

  changeCurrencies = () => {
    const { values, change } = this.props;
    const {
      currencyBuy,
      currencySell,
      amountSell,
      amountBuy,
    } = values;
    swappingVariables(currencyBuy, currencySell, amountSell, amountBuy, change);
  };

  buyCurrency = () => {
    const {
      values,
      change,
      currencies,
      amountBuy,
      countCurrency,
    } = this.props;
    countCurrency(currencies, values);
    change('amountBuy', amountBuy);
  };
  
  sendCurrenciesDeal = e => {
    const datas = moment().format('L');
    console.log(datas);
    console.log(this.props.values);
    e.preventDefault();
  };

  render() {
    const { currencies, classes, handleSubmit, values } = this.props;

    return (
      <form
        name="currencyForm"
        className={classes.appContent}
        onSubmit={handleSubmit(this.sendCurrenciesDeal)}>
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
              onChange={this.buyCurrency}>
              {
                currencies
                  .filter(item => item.ccy !== values.currencyBuy)
                  .map(item => (
                    <option value={item.ccy} key={item.ccy}>
                      {item.ccy}
                    </option>))
              }
            </Field>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={this.changeCurrencies}>
            &#8660;
          </Button>
          <FormControl className={classes.formControl}>
            <p className={classes.text}>we get</p>
            <Field
              className={classes.select}
              name="currencyBuy"
              component="select"
              onChange={this.buyCurrency}>
              {
                currencies
                  .filter(item => item.ccy !== values.currencySell)
                  .map(item => (
                    <option value={item.ccy} key={item.ccy}>
                      {item.ccy}
                    </option>))
              }
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
            onChange={this.buyCurrency}
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
              onChange={this.buyCurrency}>
              {
                feeConvert.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>))
              }
            </Field>
            <p className={classes.text}> %</p>
          </FormControl>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.buyBtn}
          type="submit"
          onClick={ this.sendCurrenciesDeal }>
          Buy
        </Button>
      </form>
    );
  }
}

const withForm = reduxForm({
  form: 'currencyForm',
  enableReinitialize: true,
  initialValues: {
    currencyBuy: 'EUR',
    currencySell: 'USD',
    amountSell: 0,
    amountBuy: 0,
    fee: 2,
  },
});
const mapStateToProps = (state) => ({
  values: getFormValues('currencyForm')(state),
});
export default compose(
  withForm,
  connect(mapStateToProps),
  withStyles(styles),
)(Currency);
