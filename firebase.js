import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwtaFLpd-tmSWg28dFBINyUHBDhfcVVs8",
  authDomain: "fb-nextjstailwnd.firebaseapp.com",
  projectId: "fb-nextjstailwnd",
  storageBucket: "fb-nextjstailwnd.appspot.com",
  messagingSenderId: "528447397150",
  appId: "1:528447397150:web:d5e842adc378a7b97cbd0f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
