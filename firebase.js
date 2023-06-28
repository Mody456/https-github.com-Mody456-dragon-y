// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDru6M6uEn8tBB9m_gTbb3UNya6m_MhaM8",
  authDomain: "dragon-yt-aefd7.firebaseapp.com",
  projectId: "dragon-yt-aefd7",
  storageBucket: "dragon-yt-aefd7.appspot.com",
  messagingSenderId: "38088020567",
  appId: "1:38088020567:web:dc9953906156c877e30912"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };