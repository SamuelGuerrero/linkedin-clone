import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6Ao1hDBTgaoRCTX5Ks-_13cIUDk-1yQk",
    authDomain: "likedin-clone-e36a3.firebaseapp.com",
    projectId: "likedin-clone-e36a3",
    storageBucket: "likedin-clone-e36a3.appspot.com",
    messagingSenderId: "485430573283",
    appId: "1:485430573283:web:fa883c45520e415814edd6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};