import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBS6jsBrLGCd9JCHuWXJhl-edOwbKsiPTc",
//   authDomain: "authentication-6dab2.firebaseapp.com",
//   projectId: "authentication-6dab2",
//   storageBucket: "authentication-6dab2.appspot.com",
//   messagingSenderId: "477324575747",
//   appId: "1:477324575747:web:258b48972c62641c66ba36",
//   measurementId: "G-63CML6179M",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
