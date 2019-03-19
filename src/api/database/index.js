import fb from 'api/firebase';

export const createUserInDB = (uid, ava, email, firstName, lastName, phone) =>
  fb.doCreateUserInDatabase(uid, ava, email, firstName, lastName, phone);

export const getUserfromDB = uid => fb.getUserFromDatabase(uid);

createUserInDB(
  '2x6QppJCggXYsN1zAZg78DaWXkj2',
  '',
  'alexyalovoy@mail.ru',
  'alex',
  'yalovoy',
  '3806311111',
);
