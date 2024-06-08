// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const { initializeApp } = require("firebase/app");
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXp2f9_nvLDTK7T3LYu97BLO-nYNgC5EM",
  authDomain: "hackman-a1141.firebaseapp.com",
  projectId: "hackman-a1141",
  storageBucket: "hackman-a1141.appspot.com",
  messagingSenderId: "186586352126",
  appId: "1:186586352126:web:0ee6be0f98d910c9d858af",
  measurementId: "G-H3XJRYK8TT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { app, db };
