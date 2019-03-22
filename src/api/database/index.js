import fb from 'api/firebase';

export const createUserInDB = (uid, ava, email, firstName, lastName, phone) =>
  fb.doCreateUserInDatabase(uid, ava, email, firstName, lastName, phone);

export const getUserfromDB = uid => fb.getUserFromDatabase(uid);

export const createDealInDB = (
  uid,
  transactionDate,
  currencySell,
  amountSell,
  currencyBuy,
  amountBuy,
  fee,
) => {
  fb.doCreateDealInDatabase(
    uid,
    transactionDate,
    currencySell,
    amountSell,
    currencyBuy,
    amountBuy,
    fee,
  );
};
