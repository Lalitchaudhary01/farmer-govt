// src/auth.js
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase";

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
