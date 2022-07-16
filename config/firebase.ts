// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAenxHV-NOU5EvI9DGuQEpUuS7zzyYSBP0",
  authDomain: "chat-app-f01cc.firebaseapp.com",
  projectId: "chat-app-f01cc",
  storageBucket: "chat-app-f01cc.appspot.com",
  messagingSenderId: "998289112707",
  appId: "1:998289112707:web:7c859b2708215b0347a5b6",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
