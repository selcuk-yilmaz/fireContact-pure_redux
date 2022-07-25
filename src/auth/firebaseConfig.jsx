// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvtUdGqIHNej5dkZPxfjESswZ1JaOIS6E",
  authDomain: "firecontact-pure-redux.firebaseapp.com",
  projectId: "firecontact-pure-redux",
  storageBucket: "firecontact-pure-redux.appspot.com",
  messagingSenderId: "414533712436",
  appId: "1:414533712436:web:6626a909174a9064ae2861",
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)