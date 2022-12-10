import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import '../App.css';

 function Login(){
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
  
    function setEmailCB(event){
        setEmail(event.target.value);
    }

    function setPasswordCB(event){
        setPassword(event.target.value);
    }

    function logInWithEmailAndPasswordACB(){
      logInWithEmailAndPassword(email, password);
    }
   

    return (
        <div className="login">
          <div className="loginFormation">
            <input type="email" id = "email" className="loginBox" value={email} onChange={setEmailCB} placeholder="Email"/>
            <input type="password" id = "password" className="loginBox" value={password} onChange={setPasswordCB} placeholder="Password"/>
            <button className="p-2.5 mb-0.5 bg-[rgb(98,147,238)]" onClick={logInWithEmailAndPasswordACB}>
              Login
            </button>
            <button className="p-2.5 mb-0.5 bg-[rgb(98,147,238)]" onClick={signInWithGoogle}>
              Login with Google
            </button>
            <div className="text-white">
              <Link to="/reset">Forgot Password</Link>
            </div>
            <div className="text-white">
              Register an account! <Link to="/register">Register here</Link>
            </div>
            <div className="text-white">
              Log in as a guest <Link to="/home">here</Link>    {/*Ändra path så vi kommer till startsidan och kan generera en film som gäst */} 
            </div>
          </div>
        </div>
      );
}

export default Login;