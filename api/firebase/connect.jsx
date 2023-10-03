
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbJ8m3dRm788o9Hv0L845MJdWfGioYj9c",
  authDomain: "organiz-f07be.firebaseapp.com",
  projectId: "organiz-f07be",
  storageBucket: "organiz-f07be.appspot.com",
  messagingSenderId: "708456224457",
  appId: "1:708456224457:web:931d60afbd6c886456df18",
  databaseURL: "https://organiz-f07be-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DBRT = getDatabase(FIREBASE_APP);