// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB24iNA0uzYFE-rH4O4l02QVHt_82tW_OE",
  authDomain: "gainzmaster-adb4d.firebaseapp.com",
  projectId: "gainzmaster-adb4d",
  storageBucket: "gainzmaster-adb4d.appspot.com",
  messagingSenderId: "993802683730",
  appId: "1:993802683730:web:a7cc1d7460081315fce68b",
  measurementId: "G-Q787TGKL02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}