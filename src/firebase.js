// Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore import করতে হবে

// Firebase Config (এখানে নতুন ক্লায়েন্টের config দিবে)
const firebaseConfig = {
  apiKey: "AIzaSyAVpAr9If5WwMZg44kTWmf2pIQk_izGgGY",
  authDomain: "wedding-venue-39eea.firebaseapp.com",
  projectId: "wedding-venue-39eea",
  storageBucket: "wedding-venue-39eea.appspot.com", // এটা তোমার কোডে ভুল ছিল (".firebasestorage.app" না হয়ে ".appspot.com" হয়)
  messagingSenderId: "478310166816",
  appId: "1:478310166816:web:43a757cb61472efea3a745",
  measurementId: "G-PJ5QC6EM3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const analytics = getAnalytics(app);
const db = getFirestore(app); // Firestore init

// Export
export { analytics, db };
