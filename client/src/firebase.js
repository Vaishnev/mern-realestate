// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-25dda.firebaseapp.com",
  projectId: "mern-estate-25dda",
  storageBucket: "mern-estate-25dda.appspot.com",
  messagingSenderId: "792649727682",
  appId: "1:792649727682:web:874c57b8203e0cdd64c55b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);