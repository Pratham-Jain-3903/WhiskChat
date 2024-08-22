// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm8oRPpBiIK1_wRLF2pcx6RV2rSVgYNaQ",
  authDomain: "firstproject-40a9e.firebaseapp.com",
  projectId: "firstproject-40a9e",
  storageBucket: "firstproject-40a9e.appspot.com",
  messagingSenderId: "289027641030",
  appId: "1:289027641030:web:499b06bae0f61d553551c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
