// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFYNxttjyBDxhULMu6EetFmgV6yG85Rgw",
  authDomain: "netflix-gpt-6a17e.firebaseapp.com",
  projectId: "netflix-gpt-6a17e",
  storageBucket: "netflix-gpt-6a17e.appspot.com",
  messagingSenderId: "164354642893",
  appId: "1:164354642893:web:1cbf7c5e0d2a3b1a946a84",
  measurementId: "G-KJ5D75HM68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
