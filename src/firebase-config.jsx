// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAELIZYoWlxmwnEjKomjwXdNUbfSIp6qxw",
  authDomain: "jerryfromkenya-space-dev.firebaseapp.com",
  projectId: "jerryfromkenya-space-dev",
  storageBucket: "jerryfromkenya-space-dev.appspot.com",
  messagingSenderId: "397737081244",
  appId: "1:397737081244:web:11efd467013fc2842c3059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init db
export const db =getFirestore(app);

//auth service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
