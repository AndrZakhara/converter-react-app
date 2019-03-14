const convertToUa = (from, to) => {
  const result = from * to;

  return result;
};

const convertFromUa = (from, to) => {
  const res = from / to;

  return res;
};

const countTax = (sum, pr) => {
  const res = (sum * pr) / 100;

  return res;
};

export const buyCurrency = (array, CurrencyNameFrom, CurrencyNameTo, AmountSell, tax, cb) => {

  const indexSellCurrency = array.findIndex(
    item => item.ccy === CurrencyNameFrom,
  );
  const indexBuyCurrency = array.findIndex(
    item => item.ccy === CurrencyNameTo,
  );

  const firstConvert = convertToUa(
    AmountSell,
    array[indexSellCurrency].buy,
  );
  const secondConvert = convertFromUa(
    firstConvert,
    array[indexBuyCurrency].sale,
  );
  const countWithTax = secondConvert - countTax(secondConvert, tax);
  cb('amountBuy', Math.trunc(countWithTax * 100) / 100);
};
