import { db } from 'api/firebase';
import { USER_LIST, USERDEALS_LIST } from 'constants/dbRoutes';

export const createUserInDB = user =>
  db.ref(`${USER_LIST}/${user.uid}`).set(user);

export const getUserfromDB = uid => db.getUserFromDatabase(uid);

export const updateUserInDB = (uid, user) => {
  db.ref(`${USER_LIST}/${uid}`).update(user);
};

export const getUserFromDB = uid =>
  db
    .ref(`${USER_LIST}/${uid}`)
    .once('value')
    .then(snapshot => snapshot.val());

export const getAllUsersFromDB = () =>
  db
    .ref(USER_LIST)
    .once('value')
    .then(snapshot => snapshot.val());

export const getUserDealsConvertation = uid =>
  db
    .ref(`${USERDEALS_LIST}/${uid}`)
    .once('value')
    .then(snapshot => snapshot.val());

export const getDealsConvertationfromDB = uid => getUserDealsConvertation(uid);

export const createDealInDB = ({
  uid,
  transactionDate,
  currencySell,
  amountSell,
  currencyBuy,
  amountBuy,
  fee,
  rate,
}) =>
  db.ref(`${USERDEALS_LIST}/${uid}`).push({
    date: transactionDate,
    currencyFrom: currencySell,
    amountFrom: amountSell,
    currencyTo: currencyBuy,
    amountTo: amountBuy,
    commission: fee,
    rate,
  });
