
// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDTXJjZdu27f0L8pfeU_-CuxIQ03zdICE8",
  authDomain: "netflix-final-6f79e.firebaseapp.com",
  projectId: "netflix-final-6f79e",
  storageBucket: "netflix-final-6f79e.appspot.com",  
  messagingSenderId: "248912407885",
  appId: "1:248912407885:web:2e97ca705ff3c8432c9b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "users"), {  
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    alert("Signup Successful!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    alert("Logout Successful!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export { auth, db, signup, login, logout };
