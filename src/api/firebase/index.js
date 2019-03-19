import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.database = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doCreateUserInDatabase = (uid, ava, email, firstName, LastName, phone) => {
    this.database.ref(`listOfUsers/${uid}`).set({
      ava,
      email,
      firstName,
      LastName,
      phone,
    });
  };

  doUpdateUserInDatabase = (uid, ava, email, firstName, LastName, phone) => {
    this.database.ref(`listOfUsers/${uid}`).update({
      ava,
      email,
      firstName,
      LastName,
      phone,
    });
  };

  getUserFromDatabase = uid =>
    this.database
      .ref(`listOfUsers/${uid}`)
      .once('value')
      .then(snapshot => snapshot.val());
}

const p = new Firebase();
// p.doCreateUserInDatabase(
//   '123123',
//   '',
//   'alex@gmail.com',
//   'Alex',
//   'Alex',
//   '132123123',
// );

export default p;
