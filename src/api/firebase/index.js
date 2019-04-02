import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firebase-functions';
import config from 'config';

app.initializeApp(config);

const auth = app.auth();
const db = app.database();
const fn = app.functions();

export { db, auth, fn };
