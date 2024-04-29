// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw9q2hDJ7O6pJ9r2I8O3UYmLSEblNrfwY",
  authDomain: "vibe-vault-6ef5b.firebaseapp.com",
  projectId: "vibe-vault-6ef5b",
  storageBucket: "vibe-vault-6ef5b.appspot.com",
  messagingSenderId: "750655314412",
  appId: "1:750655314412:web:fd2648a8bf18dfb38808c9",
  measurementId: "G-SYLDTYM09J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth  (app)

export {auth}