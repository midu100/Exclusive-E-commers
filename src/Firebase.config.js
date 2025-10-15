// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdexMT2HzuOCIDGsYBmBiOOe64WFegKe0",
  authDomain: "exclusive-6a8f0.firebaseapp.com",
  projectId: "exclusive-6a8f0",
  storageBucket: "exclusive-6a8f0.firebasestorage.app",
  messagingSenderId: "565376258329",
  appId: "1:565376258329:web:24ed177b68842925277588",
  measurementId: "G-KDLNJMF19Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app