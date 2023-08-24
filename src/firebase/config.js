// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-t8Re6sZvR2YeMOhtvDUaG3QnY1uyk54",
  authDomain: "firegram-site-47f0e.firebaseapp.com",
  projectId: "firegram-site-47f0e",
  storageBucket: "firegram-site-47f0e.appspot.com",
  messagingSenderId: "824392036712",
  appId: "1:824392036712:web:08fe8f4bae48e374cb66dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };