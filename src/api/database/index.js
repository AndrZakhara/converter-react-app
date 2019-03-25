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

export const getUserfromDB = uid => db.getUserFromDatabase(uid);

export const getDealsConvertationfromDB = uid =>
  db.getUserDealsConvertation(uid);
export const updateUserInDB = (
  uid,
  ava,
  email,
  firstName,
  LastName,
  phone,
  role = USER,
) => {
  db.ref(`${USER_LIST}/${uid}`).update({
    ava,
    email,
    firstName,
    LastName,
    phone,
    role,
    uid,
  });
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
    .ref(`listOfDeals/${uid}`)
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
