import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL4RMCx76fq-JhOHXvsoZmuz1OrYm-tp0",
  authDomain: "contact-form-ea3ec.firebaseapp.com",
  projectId: "contact-form-ea3ec",
  storageBucket: "contact-form-ea3ec.appspot.com",
  messagingSenderId: "624840378975",
  appId: "1:624840378975:web:9100d04b32b031068ae9ea",
  databaseURL: "https://contact-form-ea3ec-default-rtdb.firebaseio.com/"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
