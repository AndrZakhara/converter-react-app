import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config';

app.initializeApp(config);

const auth = app.auth();
const db = app.database();

export { db, auth };
