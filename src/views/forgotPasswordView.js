import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function ForgotPasswordView(props) {

  function setEmailACB(event){
    props.setEmail(event.target.value);
}

function resetPasswordACB(){
  props.resetPassword();
}

  return (
    <div className="login">
      <div className="loginFormation">
        <input type="email" id="email" className="loginBox" onChange={setEmailACB} placeholder="Email" />
        <button className="loginButton" onClick={resetPasswordACB}>
          Send password reset email
        </button>
        <div className="text-white">
          Don't have an account? <NavLink to="/register">Register</NavLink> now.
        </div>
        <div className="text-white">
           <NavLink to="/">Go back to login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordView;