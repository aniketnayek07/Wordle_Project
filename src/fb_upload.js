// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  collection,
  addDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK1qp3eNTgSToY9bzcdCsgPY3DRrazEUQ",
  authDomain: "wordle-1185f.firebaseapp.com",
  projectId: "wordle-1185f",
  storageBucket: "wordle-1185f.appspot.com",
  messagingSenderId: "981411600471",
  appId: "1:981411600471:web:95af745ddffef833682b12",
  measurementId: "G-Z9WKM33NWQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const deployNumber = async (number1) => {
  console.log("lolz")
  try {
    const docRef = await addDoc(collection(db, "WORDLE"), {
      number: number1,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};

export default deployNumber;
