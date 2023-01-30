// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH0AMNVmWlMDsvOHT1rIU2-_C6eoaEUjg",
  authDomain: "nology-martin-firebase-test.firebaseapp.com",
  projectId: "nology-martin-firebase-test",
  storageBucket: "nology-martin-firebase-test.appspot.com",
  messagingSenderId: "120654255840",
  appId: "1:120654255840:web:ba48c87fdf44a29dc52285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
