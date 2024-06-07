

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBIG4ZckGrRCWnz39tciLLOYwo_huTS4I",
  authDomain: "e-shop-f6584.firebaseapp.com",
  projectId: "e-shop-f6584",
  storageBucket: "e-shop-f6584.appspot.com",
  messagingSenderId: "971368036977",
  appId: "1:971368036977:web:242281f34c69a1e5e279d0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)


export {storage}