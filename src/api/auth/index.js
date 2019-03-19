import Firebase from 'api/firebase';

export default (email, password) =>
  Firebase.DoCreateUserWithEmailAndPassword(email, password);
