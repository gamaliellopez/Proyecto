import firebase from "firebase/app";
import firestore from "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2sMvMjkI8KE9pekKxPX1T1YXtAXcyaHI",
  authDomain: "prueba-da87e.firebaseapp.com",
  databaseURL: "https://prueba-da87e.firebaseio.com",
  projectId: "prueba-da87e",
  storageBucket: "prueba-da87e.appspot.com",
  messagingSenderId: "435929158075",
  appId: "1:435929158075:web:0d53efe6e801dffa47349e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}