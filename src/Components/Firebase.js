import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAFjFWM2Zs0rx3k6laTPTqRX8v708YgmGA",
  authDomain: "auto-dummy.firebaseapp.com",
  projectId: "auto-dummy",
  storageBucket: "auto-dummy.appspot.com",
  messagingSenderId: "1028869580260",
  appId: "1:1028869580260:web:52205517dd6645428053f1",
};

var fire;
if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig);
} else {
  fire = firebase.app(); // if already initialized, use that one
}
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = firebase.storage();
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const providefb = new FacebookAuthProvider();
export const signInWithFacebook = () => {
  signInWithPopup(auth, providefb)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
// export { auth, db };
// Initialize Firebase
// const fire = initializeApp(firebaseConfig);
export default fire;
