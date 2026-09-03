// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqOsBW43NycY41J3e8thaXPLqFW1ruaeA",
  authDomain: "prop360-4ef97.firebaseapp.com",
  projectId: "prop360-4ef97",
  storageBucket: "prop360-4ef97.firebasestorage.app",
  messagingSenderId: "67882178773",
  appId: "1:67882178773:web:fe2a036c896e6a98262a5c",
  measurementId: "G-4QTC980H8T"
};

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);