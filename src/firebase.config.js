// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIrxfG0EOJFvqA8elmwuSX1L6wFV2WRyE",
  authDomain: "house-marketplace-app-f61a5.firebaseapp.com",
  projectId: "house-marketplace-app-f61a5",
  storageBucket: "house-marketplace-app-f61a5.appspot.com",
  messagingSenderId: "367028718374",
  appId: "1:367028718374:web:195015eefc9af1f6f58fe7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
