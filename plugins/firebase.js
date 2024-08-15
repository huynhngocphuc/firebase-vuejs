// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOMyVycyMiQZ0zYrZq-2C36Z5pOXaFSXQ",
  authDomain: "vuejs-4d09c.firebaseapp.com",
  projectId: "vuejs-4d09c",
  storageBucket: "vuejs-4d09c.appspot.com",
  messagingSenderId: "618273581522",
  appId: "1:618273581522:web:20c652218f99510545c00b",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
