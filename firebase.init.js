// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQjJEVXKV1iwyDg4uIqsyz-E1fPEZd3ro",
    authDomain: "sourav-portfolio.firebaseapp.com",
    projectId: "sourav-portfolio",
    storageBucket: "sourav-portfolio.appspot.com",
    messagingSenderId: "1078196119015",
    appId: "1:1078196119015:web:033f6002a2967e2bca0942",
    measurementId: "G-NT3M8BQW25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);