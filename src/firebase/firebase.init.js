// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZj41qvRrWJq3NnbwSEDeYa5xfLpKQC7A",
  authDomain: "coffee-store-2259d.firebaseapp.com",
  projectId: "coffee-store-2259d",
  storageBucket: "coffee-store-2259d.firebasestorage.app",
  messagingSenderId: "462700155903",
  appId: "1:462700155903:web:1346ed4111cf0feb70cdca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);