// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCriWvtDBGdoy0bh_lTrnCaVXEWPqu1FqI",
  authDomain: "flashcard-proj.firebaseapp.com",
  projectId: "flashcard-proj",
  storageBucket: "flashcard-proj.appspot.com",
  messagingSenderId: "167568108003",
  appId: "1:167568108003:web:158ff90a53ab2a5e6798d6",
  measurementId: "G-7BFG53JTZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);