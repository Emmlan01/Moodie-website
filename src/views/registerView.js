import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Register(props){

   async function registerWithEmailPasswordACB(event){
      event.preventDefault();
      props.registerWithEmailPassword();
    }

    function setEmailACB(event){
      props.setEmail(event.target.value);
  }

  function setPasswordACB(event){
      props.setPassword(event.target.value);
  }
    return (
        <div className="login">
          <div className="loginFormation">
            <input type="email" id="email" className="loginBox" onChange={setEmailACB} placeholder="Email"/>
            <input type="password" id="password" className="loginBox" onChange={setPasswordACB} placeholder="Password"/>
            <button className="loginButton" onClick={registerWithEmailPasswordACB}>
              Register
            </button>
            <div className="text-white">
              Already have an account? <NavLink to="/">Login here</NavLink>
            </div>
          </div>
        </div>
      );
}
export default Register;