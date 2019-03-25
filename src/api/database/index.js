import { db } from 'api/firebase';
import { USER } from 'constants/roles';
import { USER_LIST, USERDEALS_LIST } from 'constants/dbRoutes';

export const createUserInDB = (
  uid,
  ava,
  email,
  firstName,
  lastName,
  phone,
  role = USER,
) =>
  db.ref(`${USER_LIST}/${uid}`).set({
    uid,
    ava,
    email,
    firstName,
    lastName,
    phone,
    role,
  });

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

export const createDealInDB = ({
  uid,
  transactionDate,
  currencySell,
  amountSell,
  currencyBuy,
  amountBuy,
  fee,
}) =>
  db.ref(`${USERDEALS_LIST}/${uid}`).push({
    transactionDate,
    currencySell,
    amountSell,
    currencyBuy,
    amountBuy,
    fee,
  });
