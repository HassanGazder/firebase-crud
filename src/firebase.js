import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADoxUgU4-vTog8u1ibsMoozvEWFEMIYa8",
  authDomain: "fir-crud-e4500.firebaseapp.com",
  projectId: "fir-crud-e4500",
  storageBucket: "fir-crud-e4500.appspot.com",
  messagingSenderId: "956660247673",
  appId: "1:956660247673:web:ece30c62d178f3060738a8",
  measurementId: "G-M4LFMM6WXV",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
