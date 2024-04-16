// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-44668.firebaseapp.com",
  projectId: "mern-estate-44668",
  storageBucket: "mern-estate-44668.appspot.com",
  messagingSenderId: "194993866351",
  appId: "1:194993866351:web:33e96d2d17ce963d8f2f9a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
