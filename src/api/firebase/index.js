import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import config from 'config';

app.initializeApp(config);

const auth = app.auth();
const db = app.database();
const storage = app.storage();

export { db, auth, storage };
