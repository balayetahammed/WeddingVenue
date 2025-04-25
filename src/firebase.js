// import { initializeApp } from "firebase/app";

// import firebase from "firebase";

// let firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCtqnLZ12Y6oVB94urnVgOWoNQtlvA5ocs",
//   authDomain: "react-contact-form-c4283.firebaseapp.com",
//   projectId: "react-contact-form-c4283",
//   storageBucket: "react-contact-form-c4283.firebasestorage.app",
//   messagingSenderId: "205100062557",
//   appId: "1:205100062557:web:da866da11b60cae60afab4",
// });

// let db = firebaseApp.firestore();

// export { db };

// Firebase SDK থেকে প্রয়োজনীয় ফাংশন ইমপোর্ট করুন
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyCtqnLZ12Y6oVB94urnVgOWoNQtlvA5ocs",
  authDomain: "react-contact-form-c4283.firebaseapp.com",
  projectId: "react-contact-form-c4283",
  storageBucket: "react-contact-form-c4283.appspot.com", // এখানে `.app` ভুল ছিল
  messagingSenderId: "205100062557",
  appId: "1:205100062557:web:da866da11b60cae60afab4",
};

// Firebase অ্যাপ ইনিশিয়ালাইজ করুন
const firebaseApp = initializeApp(firebaseConfig);

// Firestore ডাটাবেস ইনিশিয়ালাইজ করুন
const db = getFirestore(firebaseApp);

// এক্সপোর্ট করুন যাতে অন্য ফাইল থেকে ব্যবহার করা যায়
export { db };
