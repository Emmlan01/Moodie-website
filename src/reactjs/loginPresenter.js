import '../App.css';

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

 function Login(){
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/");
    }, [user, loading]);
  
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
            <button className="loginButton" onClick={logInWithEmailAndPasswordACB}>
              Login
            </button>
            <button className="loginButton" onClick={signInWithGoogle}>
              Login with Google
            </button>
            <div>
              <Link to="/reset">Forgot Password</Link>
            </div>
            <div>
              Register an account! <Link to="/register">Register here</Link>
            </div>
            <div>
              Log in as a guest <Link to="/home">here</Link>    {/*Ändra path så vi kommer till startsidan och kan generera en film som gäst */} 
            </div>
          </div>
        </div>
      );
}

export default Login;