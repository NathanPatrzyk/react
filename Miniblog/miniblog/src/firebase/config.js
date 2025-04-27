import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0WTTYaROS2-e63ly9rRPLd5YEf6OdAQs",
  authDomain: "miniblog-eb8e6.firebaseapp.com",
  projectId: "miniblog-eb8e6",
  storageBucket: "miniblog-eb8e6.firebasestorage.app",
  messagingSenderId: "541268057598",
  appId: "1:541268057598:web:f17d005a83c19108ec34af",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
