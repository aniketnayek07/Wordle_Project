// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { collection, addDoc, getFirestore  } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js'; 



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA96AlvaIvMBxM9WYskTC6cyKZX0FaFdZk",
  authDomain: "my-first-project-b48de.firebaseapp.com",
  projectId: "my-first-project-b48de",
  storageBucket: "my-first-project-b48de.appspot.com",
  messagingSenderId: "898416516730",
  appId: "1:898416516730:web:e8445061b696b6686425c3",
  measurementId: "G-G02QL9L4MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const deployNumber = async (number1) => {
  try {
    const docRef = await addDoc(collection(db, "WORDLE"), {
      number: number1,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e);
    return e
  }
}

export default deployNumber
