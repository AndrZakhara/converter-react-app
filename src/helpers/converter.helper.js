const convertToUa = (from, to) => from * to;
const convertFromUa = (from, to) => from / to;
const countTax = (sum, fee) => (sum * fee) / 100;

export const buyCurrency = (array, CurrencyNameFrom, CurrencyNameTo, AmountSell, tax) => {
  const indexSellCurrency = array.findIndex(
    item => item.ccy === CurrencyNameFrom,
  );
  const indexBuyCurrency = array.findIndex(item => item.ccy === CurrencyNameTo);
  const firstConvert = convertToUa(AmountSell, array[indexSellCurrency].buy);
  const secondConvert = convertFromUa(
    firstConvert,
    array[indexBuyCurrency].sale,
  );
  const countWithTax = secondConvert - countTax(secondConvert, tax);

  return Math.trunc(countWithTax * 100) / 100;
};
export const swappingVariables = (values, cb) => {
  const { currencyBuy, currencySell, amountSell, amountBuy } = values;
  cb('currencyBuy', currencySell);
  cb('currencySell', currencyBuy);
  cb('amountBuy', amountSell);
  cb('amountSell', amountBuy);
};
