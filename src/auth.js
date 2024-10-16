import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const listenToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};
