import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA185fAVsi_PiJ8aus7W37KfjWwxsEJSLI",
  authDomain: "bottle-shredder.firebaseapp.com",
  databaseURL: "https://bottle-shredder-default-rtdb.firebaseio.com",
  projectId: "bottle-shredder",
  storageBucket: "bottle-shredder.appspot.com",
  messagingSenderId: "536912262233",
  appId: "1:536912262233:web:3044a8f28ee66d5a912d48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
