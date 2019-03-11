import { put, takeEvery } from 'redux-saga/effects'
import { SIGNUP, SIGNUP_SUCCESS } from '../../actions/types';
import Firebase from '../../api/firebase';
import { signUpError } from '../../actions/signUp';

function* SignUp(action) {   
   const { email, password } = action.payload;
   try {
      yield Firebase.DoCreateUserWithEmailAndPassword(email, password)
      yield put({type: SIGNUP_SUCCESS});
   } catch(e) {
      yield put(signUpError(e));
   }
 }

function* mySaga() {
  yield takeEvery(SIGNUP, SignUp);
}

export default mySaga;