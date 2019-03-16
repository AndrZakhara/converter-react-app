import Firebase from 'api/firebase';

export const register = (email, password) =>
  Firebase.DoCreateUserWithEmailAndPassword(email, password);
