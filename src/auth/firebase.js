// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjSyjvdO9c_PzBQa_xG0HpXAV_O5VBD8c",
  authDomain: "recipe-app-2ab63.firebaseapp.com",
  projectId: "recipe-app-2ab63",
  storageBucket: "recipe-app-2ab63.appspot.com",
  messagingSenderId: "663525187309",
  appId: "1:663525187309:web:d7c12fa50f5dccb32d76e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
