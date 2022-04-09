// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpU6Gsu7RHkbIXcmT-tYV4pe98dNjNl1s",
    authDomain: "conceptual-firebase.firebaseapp.com",
    projectId: "conceptual-firebase",
    storageBucket: "conceptual-firebase.appspot.com",
    messagingSenderId: "449411077767",
    appId: "1:449411077767:web:2563494d46d444cb440a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app