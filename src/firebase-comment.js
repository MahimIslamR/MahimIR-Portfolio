import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔹 Your Firebase config
const firebaseConfig = {
  apiKey: "AIza....",
  authDomain: "mahimportfolio.firebaseapp.com",
  projectId: "mahimportfolio",
  storageBucket: "mahimportfolio.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
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
