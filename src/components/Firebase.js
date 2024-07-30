import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCBuAIbBvH0YbzZqZ651QMhrhGZ976FVbU",
  authDomain: "farmer-govt.firebaseapp.com",
  projectId: "farmer-govt",
  storageBucket: "farmer-govt.appspot.com",
  messagingSenderId: "513951760016",
  appId: "1:513951760016:web:68b5d6a2ac65f0bb13a215",
  measurementId: "G-FQDCQV5W70",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize and export Firestore
