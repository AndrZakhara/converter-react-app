import { put, takeEvery } from 'redux-saga/effects'
import { SIGNIN } from '../../actions/types';
import Firebase from '../../api/firebase';
import { signInError, signInSuccess } from '../../actions/signUp';

function* SignIn(action) { 
  const { email, password } = action.payload;
  try {
    yield Firebase.DoSignInWithEmailAndPassword(email, password)
    yield put(signInSuccess(email, password));
  } catch(e) {
    yield put(signInError(e));
  }
}

function* mySaga() {
  yield takeEvery(SIGNIN, SignIn);
}

export default mySaga;