import Firebase from 'api/firebase';

export const register = (email, password) => {
  return Firebase.DoCreateUserWithEmailAndPassword(email, password);
}