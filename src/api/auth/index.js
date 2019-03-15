import Firebase from 'api/firebase';

<<<<<<< HEAD
export const register = (email, password) =>
  Firebase.DoCreateUserWithEmailAndPassword(email, password);
=======
export const register = (email, password) => {
  return Firebase.DoCreateUserWithEmailAndPassword(email, password);
}
>>>>>>> 516c8931e92ae6034ad7a0358e6b2e48a2094a56
