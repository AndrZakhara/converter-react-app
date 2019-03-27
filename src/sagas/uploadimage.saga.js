import { call, put, select, takeLatest } from 'redux-saga/effects';
import { storage } from 'api/firebase';

import { UPLOAD_IMAGE } from 'actions/types.actions';
import { updateProfile } from 'actions/profile.actions';

const storageRef = storage.ref();

function* onUploadImage({ payload: { file, storagePath } }) {
  const distRef = storageRef.child(storagePath).child(file.name);

  try {
    yield call([distRef, distRef.put], file);

    const downloadURL = yield call([distRef, distRef.getDownloadURL]);
    const uid = yield select(state => state.user.profile.uid);

    yield put(updateProfile({ ava: downloadURL, uid }));
  } catch (error) {
    console.error(error);
  }
}

export default function* uploadImage() {
  yield takeLatest(UPLOAD_IMAGE, onUploadImage);
}
