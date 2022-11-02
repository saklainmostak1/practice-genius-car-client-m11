// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLN6bz8IXLXEY_3iKJAMAa58G2vLXJTPI",
  authDomain: "practice-genius-car-c1e34.firebaseapp.com",
  projectId: "practice-genius-car-c1e34",
  storageBucket: "practice-genius-car-c1e34.appspot.com",
  messagingSenderId: "328175583846",
  appId: "1:328175583846:web:73fef3a4b584177aaa23a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app