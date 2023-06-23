// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1DQj6wvwJH1id4CQEXB1mbwS-8wmQgw4",
  authDomain: "e-commerce-auth-11221.firebaseapp.com",
  projectId: "e-commerce-auth-11221",
  storageBucket: "e-commerce-auth-11221.appspot.com",
  messagingSenderId: "1077419950346",
  appId: "1:1077419950346:web:9e6e30e4ab3599a3763af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);