// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl0t6J_o4oPl6A5QIa0-ANLpdpL5qY6P4",
  authDomain: "portfolio-projects-b7563.firebaseapp.com",
  projectId: "portfolio-projects-b7563",
  storageBucket: "portfolio-projects-b7563.firebasestorage.app",
  messagingSenderId: "800686472483",
  appId: "1:800686472483:web:76bb240c95941ddaeee096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };