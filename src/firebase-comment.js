import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔹 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCl0t6J_o4oPl6A5QIa0-ANLpdpL5qY6P4",
  authDomain: "portfolio-projects-b7563.firebaseapp.com",
  projectId: "portfolio-projects-b7563",
  storageBucket: "portfolio-projects-b7563.firebasestorage.app",
  messagingSenderId: "800686472483",
  appId: "1:800686472483:web:76bb240c95941ddaeee096"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig, "comments-app");

// 🔹 Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Step 7 (3rd part): Add Comment function
export async function addComment(name, message) {
  try {
    await addDoc(collection(db, "comments"), {
      name: "Mahim",
      message: "Bye World",
      timestamp: serverTimestamp()
    });
    console.log("✅ Comment added successfully!");
  } catch (error) {
    console.error("❌ Error adding comment:", error);
  }
}

// Export Firestore and Storage if needed elsewhere
export { db, storage };
