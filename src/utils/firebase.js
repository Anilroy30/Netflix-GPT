// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp49UKt6dKq0r_ObozpsPzr8Y-UHJyCTY",
  authDomain: "my-netflix-gpt-f70d7.firebaseapp.com",
  projectId: "my-netflix-gpt-f70d7",
  storageBucket: "my-netflix-gpt-f70d7.firebasestorage.app",
  messagingSenderId: "180251823195",
  appId: "1:180251823195:web:08c4730bbb70674c3d837e",
  measurementId: "G-WC5QB274VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);