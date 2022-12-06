// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo0ghF5IuK6u6srn8p31mpwjDSj8FkK7k",
  authDomain: "eduzone-2d184.firebaseapp.com",
  projectId: "eduzone-2d184",
  storageBucket: "eduzone-2d184.appspot.com",
  messagingSenderId: "210329206715",
  appId: "1:210329206715:web:027b7e907651f5754d4e9e",
  measurementId: "G-QRFGND14PV"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app