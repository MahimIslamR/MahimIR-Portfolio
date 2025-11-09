import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATQszFhxN2ovWYtz2-fG48cYNrDTZ3mjs",
  authDomain: "mahimportfolio-b8ca2.firebaseapp.com",
  projectId: "mahimportfolio-b8ca2",
  storageBucket: "mahimportfolio-b8ca2.firebasestorage.app",
  messagingSenderId: "1079011196957",
  appId: "1:1079011196957:web:2489a4e7aff9f8430506f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };