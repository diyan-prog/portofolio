// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoJrSQysYB-H7I0AIv8Dh_Uzh6yq54Oz8",
  authDomain: "diyan-portfolio.firebaseapp.com",
  projectId: "diyan-portfolio",
  storageBucket: "diyan-portfolio.firebasestorage.app",
  messagingSenderId: "364471384503",
  appId: "1:364471384503:web:02553f445073328a5d1032",
  measurementId: "G-SNCG3RGEJ1",
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
