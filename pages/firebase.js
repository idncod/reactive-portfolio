import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPpgxp7Dxn0e2VI4XWlcVDxOAWs2l_1Os",
  authDomain: "blog-db-reactive-portfolio.firebaseapp.com",
  projectId: "blog-db-reactive-portfolio",
  storageBucket: "blog-db-reactive-portfolio.appspot.com",
  messagingSenderId: "1049882631011",
  appId: "1:1049882631011:web:e3c7f0385ba708aae05156"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();