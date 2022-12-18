import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
 import LoginView from "../views/loginView.js"
import '../App.css';
import {auth} from '../firebase';


function LoginPresenter(props){
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const googleProvider = new GoogleAuthProvider();

    useEffect(initialGetUserLocation, []);

    function initialGetUserLocation(){
      props.model.getUserLocation();
    }

    async function signIn(){
      await
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/home")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });}

    function guestLogin(){
      localStorage.setItem('guestLoggedIn', 'true')
      navigate("/home")
    }


    //Google Authentication function that displays with a pop-up window from Firebase
  async function signInWithGoogle(){
  try {
    const res = await signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        navigate("/home"); 
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
 
    return (
       <LoginView  
        setEmail = {setEmail}
        setPassword = {setPassword}
       signIn ={signIn}
       signInWithGoogle = {signInWithGoogle}
       guestLogin={guestLogin}
       />
      );
}

export default LoginPresenter;