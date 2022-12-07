import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import '../App.css';

function Register(){
    
    const[email, setEmail] = useState(" ");
    const[password, setPassword] = useState(" ");
    const[name, setName] = useState(" ");
   
    function registerWithNameEmailPasswordACB(){
    registerWithEmailAndPassword(name, email, password);
    }

    function setNameACB(event){
      setName(event.target.value);
    }

    function setEmailACB(event){
        setEmail(event.target.value);
    }

    function setPasswordACB(event){
        setPassword(event.target.value);
    }

    return (
        <div className="login">
          <div className="loginFormation">
            <input type="name" id= "name" className="loginBox" value={name} onChange={setNameACB} placeholder="Full Name"/>
            <input type="email" id="email" className="loginBox" value={email} onChange={setEmailACB} placeholder="Email"/>
            <input type="password" id="password" className="loginBox" value={password} onChange={setPasswordACB} placeholder="Password"/>
            <button className="loginButton" onClick={registerWithNameEmailPasswordACB}>
              Register
            </button>
            <button className="loginButton" onClick={signInWithGoogle}>
              Register with Google
            </button>
            <div>
              Already have an account? <Link to="/">Login here</Link>
            </div>
          </div>
        </div>
      );
}
export default Register;

