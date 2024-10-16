// src/services/UserService.js
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

const userCollectionRef = collection(db, "users");

// Add a new user
const addUser = async (newUser) => {
  return await addDoc(userCollectionRef, newUser);
};

// Get all users
const getAllUsers = async () => {
  const data = await getDocs(userCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

// Update a user
const updateUser = async (id, updatedUser) => {
  const userDoc = doc(db, "users", id);
  return await updateDoc(userDoc, updatedUser);
};

// Delete a user
const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  return await deleteDoc(userDoc);
};

export { addUser, getAllUsers, updateUser, deleteUser };
