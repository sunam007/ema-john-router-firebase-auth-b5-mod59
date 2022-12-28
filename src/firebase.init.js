// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDURTGZQaqP5GJLntGn7YqNSjpvrvCm6qM",
  authDomain: "ema-john-simple-auth-793df.firebaseapp.com",
  projectId: "ema-john-simple-auth-793df",
  storageBucket: "ema-john-simple-auth-793df.appspot.com",
  messagingSenderId: "184836216281",
  appId: "1:184836216281:web:b62d0ac6c64f4315be75c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
