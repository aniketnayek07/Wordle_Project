import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  collection,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
initializeApp(firebaseConfig);
const db = getFirestore();

// Function to fetch documents and display them
const fetchAndDisplayDocuments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "WORDLE"));
    const documentsContainer = document.getElementById("documents-container");
    documentsContainer.innerHTML = ""; // Clear any previous content
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const docElement = document.createElement("div");
      docElement.className = "document";
      docElement.innerHTML = `
            <h2>Document ID: ${doc.id}</h2>
            <pre>${JSON.stringify(docData, null, 2)}</pre>
          `;
      documentsContainer.appendChild(docElement);
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
};

// Call the function to fetch and display documents
fetchAndDisplayDocuments();
