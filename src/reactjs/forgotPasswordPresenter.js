import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordReset } from "../firebase";
import '../App.css';

function Reset() {
  const [email, setEmail] = useState("");

  function setEmailACB(event){
    setEmail(event.target.value);
}

function resetPasswordACB(){
  sendPasswordReset(email);
}

  return (
    <div className="login">
      <div className="loginFormation">
        <input type="email" id="email" className="loginBox" value={email} onChange={setEmailACB} placeholder="Email" />
        <button className="loginButton" onClick={resetPasswordACB}>
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;
