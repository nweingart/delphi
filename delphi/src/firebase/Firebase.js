import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { getFunctions } from 'firebase/functions'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn9m7bbkI45yu-JI_uG-S4eiBBo27N5aI",
  authDomain: "delphi-260ce.firebaseapp.com",
  projectId: "delphi-260ce",
  storageBucket: "delphi-260ce.appspot.com",
  messagingSenderId: "112897658630",
  appId: "1:112897658630:web:4e46a63afcce50b72a5887",
  measurementId: "G-4MN7NVT1GV"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)
const storage = getStorage(app)
const usersRef = collection(db, "users")

export { auth, db, functions, storage, usersRef }
