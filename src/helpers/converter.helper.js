const convertToUa = (from, to) => from * to;
const convertFromUa = (from, to) => from / to;
const countTax = (sum, fee) => (sum * fee) / 100;

export default (array, CurrencyNameFrom, CurrencyNameTo, AmountSell, tax) => {
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
