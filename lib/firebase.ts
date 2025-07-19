import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC361Yc-_e25Qx5gRIR7yK9bs57AXynaAM",
  authDomain: "contactform-bwit-344ac.firebaseapp.com",
  databaseURL: "https://contactform-bwit-344ac-default-rtdb.firebaseio.com",
  projectId: "contactform-bwit-344ac",
  storageBucket: "contactform-bwit-344ac.firebasestorage.app",
  messagingSenderId: "790132367649",
  appId: "1:790132367649:web:8c32bead65160c10b45e60"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push, set };