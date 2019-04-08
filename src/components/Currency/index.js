import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import moment from 'moment';
import Fade from '@material-ui/core/Fade';
import feeConvert from 'constants/tax';
import {
  StyledForm,
  ConverterTitle,
  Heading,
  CurrencyLine,
  StyledFormControl,
  FeeWrapper,
  TextField,
  Select,
  InputAmount,
  FeeSelect,
  BottomBtnsWrap,
  WrapperBuyBtn,
  BuyBtn,
  ButtonProgress,
} from './styles';

class Currency extends Component {
  componentDidMount() {
    const { loadCurrencies } = this.props;
    loadCurrencies();
  }

  changeCurrencies = () => {
    const { swappingCurrency } = this.props;
    swappingCurrency();
  };

  buyCurrency = () => {
    const { currenciesCount, currencies, countCurrency } = this.props;
    countCurrency(currencies, currenciesCount.values);
  };

  buyConcentrationCurrency = e => {
    e.preventDefault();
    const { sendCurrencyTransaction, currenciesCount, uid } = this.props;
    const transactionDate = moment().format('DD.MM.YYYY');
    const {
      currencySell,
      amountSell,
      currencyBuy,
      amountBuy,
      fee,
    } = currenciesCount.values;
    const rate = amountSell / amountBuy;

    sendCurrencyTransaction({
      uid,
      transactionDate,
      currencySell,
      amountSell,
      currencyBuy,
      amountBuy,
      fee,
      rate,
    });
  };

  render() {
    const { currencies, onSending, onLoad } = this.props;
    return (
      <Fade in={!onLoad}>
        <StyledForm
          name="currencyForm"
          onSubmit={this.buyConcentrationCurrency}>
          <ConverterTitle>
            <Heading>Currency Converter</Heading>
          </ConverterTitle>
          <CurrencyLine>
            <StyledFormControl>
              <TextField>give back</TextField>
              <Select
                name="currencySell"
                component="select"
                onChange={this.buyCurrency}>
                {currencies.map(item => (
                  <option value={item.ccy} key={item.ccy}>
                    {item.ccy}
                  </option>
                ))}
              </Select>
            </StyledFormControl>
            <BuyBtn
              variant="contained"
              color="primary"
              onClick={this.changeCurrencies}>
              &#8660;
            </BuyBtn>
            <StyledFormControl>
              <TextField>we get</TextField>
              <Select
                name="currencyBuy"
                component="select"
                onChange={this.buyCurrency}>
                {currencies.map(item => (
                  <option value={item.ccy} key={item.ccy}>
                    {item.ccy}
                  </option>
                ))}
              </Select>
            </StyledFormControl>
          </CurrencyLine>
          <CurrencyLine>
            <InputAmount
              name="amountSell"
              parse={value => Number(value)}
              component="input"
              type="number"
              label="How much to exchange"
              min="0"
              onKeyUp={this.buyCurrency}
            />
            <InputAmount
              name="amountBuy"
              parse={value => Number(value)}
              component="input"
              type="number"
              label="How much will we get"
              readOnly
            />
          </CurrencyLine>
          <BottomBtnsWrap>
            <FeeWrapper>
              <TextField>Fee </TextField>
              <FeeSelect
                name="fee"
                component="select"
                onChange={this.buyCurrency}>
                {feeConvert.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </FeeSelect>
              <TextField> %</TextField>
            </FeeWrapper>
          </BottomBtnsWrap>
          <WrapperBuyBtn>
            <BuyBtn
              variant="contained"
              color="primary"
              type="submit"
              disabled={onSending}
              onClick={this.handleButtonClick}>
              Buy
            </BuyBtn>
            {onSending && <ButtonProgress size={24} />}
          </WrapperBuyBtn>
        </StyledForm>
      </Fade>
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

export default compose(withForm)(Currency);
