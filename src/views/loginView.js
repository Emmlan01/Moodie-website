import React from "react";
import { NavLink} from "react-router-dom";
import '../App.css';

 function LoginView(props){ 

    function setEmailACB(event){
        props.setEmail(event.target.value);
    }

    function setPasswordACB(event){
        props.setPassword(event.target.value);
    }

    function logInWithEmailAndPasswordACB(event){
      event.preventDefault();
      props.signIn();
    }

    async function logInWithGoogle(){
      props.signInWithGoogle();
    }
    function guestLogin() {
      props.guestLogin();
    }
  
    return (
      <div>
        <div className="flex place-content-center mt-20 font-Rubik-Puddles text-gray-300 rounded text-9xl ">
                Moodie
        </div>   
      <div className="center-fullscreen">
        <div className="loginFormation">
          <input type="email" id="email" className="loginBox" onChange={setEmailACB} placeholder="Email" />
          <input type="password" id="password" className="loginBox" onChange={setPasswordACB} placeholder="Password" />
          <button className="p-2.5 mb-0.5 bg-[rgb(98,147,238)]" onClick={logInWithEmailAndPasswordACB}>
            Login
          </button>
          <button className="p-2.5 mb-0.5 bg-[rgb(98,147,238)]" onClick={logInWithGoogle}>
            Login with Google
          </button>
          <div className="text-white">
            <NavLink to="/forgotPassword">Forgot Password</NavLink>
          </div>
          <div className="text-white">
            Register an account! <NavLink to="/register">Register here</NavLink>
          </div>
          <div className="text-white">
            <button className="p-2.5 mb-0.5 bg-[rgb(98,147,238)]" onClick={guestLogin}>
              Log in as a guest
            </button>
          </div>
        </div>
      </div>
      </div>
      );
}

export default LoginView;