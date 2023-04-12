// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwobzVnQhcGRughDf4KZ6GmXFgZxHOsPM",
  authDomain: "aulafirebase-ca4ae.firebaseapp.com",
  projectId: "aulafirebase-ca4ae",
  storageBucket: "aulafirebase-ca4ae.appspot.com",
  messagingSenderId: "502180411968",
  appId: "1:502180411968:web:65c86c8818855c76957da5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
