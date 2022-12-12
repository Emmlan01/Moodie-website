import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/database";

import {getAuth} from "firebase/auth";

//Our firebaseConfi
const firebaseConfig = {
  apiKey: "AIzaSyCq-pVqvKQNvuEc9VkB66-gmGKkeQwOaf4",
  authDomain: "moodie-1.firebaseapp.com",
  projectId: "moodie-1",
  storageBucket: "moodie-1.appspot.com",
  messagingSenderId: "132514116513",
  appId: "1:132514116513:web:10981ff700cf56a4c311e0",
  measurementId: "G-N4CHLB2DWX"
};

//This will use our config to recognize the project and initialize authentication and database modules.
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;