// firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/firestore';

const Config = {
  // tu configuración de firebase
};

firebase.initializeApp(Config);
const firestore = firebase.firestore();

export default firestore;
