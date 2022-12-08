
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/database";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


//Google Authentication function
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      });
  }
  catch (error) {
    // Handle Errors here.
    console.error(error);
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
};

//function for signing in using an email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
  }
  catch (error) {
    console.error(error);
  }
};

//function for registering a user with an email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
  } catch (error) {
    console.error(error);
    // ..
  }
};

//function that will send a password reset link to an email address
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

//logout function
const logout = () => {
  //logout function
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.error(error);

    // An error happened.
  });
};


export {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
