import fb from 'api/firebase';

export const createUserInDB = (uid, ava, email, firstName, lastName, phone) =>
  fb.doCreateUserInDatabase(uid, ava, email, firstName, lastName, phone);

export const getUserfromDB = uid => fb.getUserFromDatabase(uid);

export const updateProfileInDB = (
  uid,
  ava,
  email,
  firstName,
  lastName,
  phone,
) => fb.doUpdateUserInDatabase(uid, ava, email, firstName, lastName, phone);
