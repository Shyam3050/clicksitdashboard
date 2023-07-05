import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxR8z_JKkuNasUYRKma0i5Y1ujQ9SCQOw",
  authDomain: "ptrfoodzone.firebaseapp.com",
  databaseURL: "https://ptrfoodzone-default-rtdb.firebaseio.com",
  projectId: "ptrfoodzone",
  storageBucket: "ptrfoodzone.appspot.com",
  messagingSenderId: "177693330884",
  appId: "1:177693330884:web:47dea7772a44204072a891",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
auth.languageCode = "it";

export { app, firestore, storage, auth };
