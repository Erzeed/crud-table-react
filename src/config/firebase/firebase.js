// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNjQ9eUdSqvAO6uIIPtiMVmo3Ia4PgXOA",
  authDomain: "crud-table-react-14d52.firebaseapp.com",
  projectId: "crud-table-react-14d52",
  storageBucket: "crud-table-react-14d52.appspot.com",
  messagingSenderId: "58495410050",
  appId: "1:58495410050:web:8006da4ae8c8a86d8f799b",
  measurementId: "G-LRR12GK8DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };