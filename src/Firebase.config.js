import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Database, getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5tOtoi9YcdXrUptv-SOZhI2r6iV9okX4",
  authDomain: "dashboard-90592.firebaseapp.com",
  projectId: "dashboard-90592",
  storageBucket: "dashboard-90592.firebasestorage.app",
  messagingSenderId: "472642807996",
  appId: "1:472642807996:web:4a3eea5e3fbbe9109a88b9",
  databaseURL: "https://dashboard-90592-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
