// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1429EiOQ6bjIhrfmTf8tj8mMJ6CixhwM",
  authDomain: "react-dragon-news-auth-af0bc.firebaseapp.com",
  projectId: "react-dragon-news-auth-af0bc",
  storageBucket: "react-dragon-news-auth-af0bc.appspot.com",
  messagingSenderId: "229821518901",
  appId: "1:229821518901:web:e4e498d1d28b854b7a0d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;