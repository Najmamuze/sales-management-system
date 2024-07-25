// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiMvnn8Od-P48n1QHfOXlg6ZjLLMEALG0",
  authDomain: "sales-management-system-b93e9.firebaseapp.com",
  projectId: "sales-management-system-b93e9",
  storageBucket: "sales-management-system-b93e9.appspot.com",
  messagingSenderId: "395132519077",
  appId: "1:395132519077:web:babfcafa931a084d36834c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
