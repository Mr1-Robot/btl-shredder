import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCbosu_penQSiPSyYUtXrb_8ogX6YqPJ3Q",
  authDomain: "shredders-monitor.firebaseapp.com",
  databaseURL: "https://shredders-monitor-default-rtdb.firebaseio.com",
  projectId: "shredders-monitor",
  storageBucket: "shredders-monitor.appspot.com",
  messagingSenderId: "235051512314",
  appId: "1:235051512314:web:85dc70b7cce9517e347443",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
