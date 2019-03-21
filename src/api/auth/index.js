import fb from 'api/firebase';

export const register = (email, password) =>
  fb.doCreateUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  fb.doSignInWithEmailAndPassword(email, password);
