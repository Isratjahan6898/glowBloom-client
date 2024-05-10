// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCac1cCs1I7Q8BANQ3cKpRPCJt0xfpWakg",
  authDomain: "glowbloom-project.firebaseapp.com",
  projectId: "glowbloom-project",
  storageBucket: "glowbloom-project.appspot.com",
  messagingSenderId: "463359065109",
  appId: "1:463359065109:web:19f9e9f617ba6adfe5621c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 