import fb from 'api/firebase';

export const createUserInDB = (uid, ava, email, firstName, LastName, phone) =>
  fb.doCreateUserInDatabase(uid, ava, email, firstName, LastName, phone);

export const getUserfromDB = uid => fb.getUserFromDatabase(uid);
