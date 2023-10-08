
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAbJ8m3dRm788o9Hv0L845MJdWfGioYj9c",
  authDomain: "organiz-f07be.firebaseapp.com",
  projectId: "organiz-f07be",
  storageBucket: "organiz-f07be.appspot.com",
  messagingSenderId: "708456224457",
  appId: "1:708456224457:web:931d60afbd6c886456df18",
  databaseURL: "https://organiz-f07be-default-rtdb.europe-west1.firebasedatabase.app/",
  // storageBucket: "gs://organiz-f07be.appspot.com", // → Main Storage Bucket
  storageBucket: "gs://organiz-1.appspot.com", // → New Storage Bucket due to limit
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DBRT = getDatabase(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
