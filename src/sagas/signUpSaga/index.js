import { call, put, takeEvery } from 'redux-saga/effects'
import { SIGNUP } from '../../actions/types';
import { signUpError,signUpSuccess } from '../../actions/signUp';
import { register } from '../../api/auth';

function* SignUp(action) {   
   const { email, password } = action.payload;
   try {
      yield call(register, email, password);
      yield put(call(signUpSuccess));
   } catch(e) {
      yield put(call(signUpError, e));
   }
 }

function* mySaga() {
  yield takeEvery(SIGNUP, SignUp);
}

export default mySaga;