import React from "react";
import { NavLink} from "react-router-dom";
import '../App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";

 function LoginView(props){

     //Firebase handles persistance by default. This means that we need to call this function to check whether a user is logged out or not.
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("användare test", user)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      console.log("utloggad");
      // User is signed out
      // ...
    }
  });

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
          <input type="email" id="email" className="block text-black bg-white px-2 py-0.5 font-semibold rounded transition duration-200 hover:scale-105" onChange={setEmailACB} placeholder="Email" />
          <input type="password" id="password" className="block text-black bg-white px-2 py-0.5 font-semibold rounded transition duration-200 hover:scale-105" onChange={setPasswordACB} placeholder="Password" />
          <button className="block text-black bg-white px-2 py-0.5 font-semibold rounded transition duration-200 hover:scale-105" onClick={logInWithEmailAndPasswordACB}>
            Login
          </button>
          <button className="block text-black bg-white px-2 py-0.5 font-semibold rounded transition duration-200 hover:scale-105" onClick={logInWithGoogle}>
            Login with Google
          </button>
          <div className="loginFormation">
            <button className="block text-black bg-white px-2 py-0.5 font-semibold rounded transition duration-200 hover:scale-105" onClick={guestLogin}>
              Login as a guest
            </button>
            {/* Log in as a guest <NavLink to="/home">here</NavLink>    {/*Ändra path så vi kommer till startsidan och kan generera en film som gäst */}
          </div>
          <div className="text-white">
            <NavLink to="/forgotPassword">Forgot Password</NavLink>
          </div>
          <div className="text-white">
            Register an account! <NavLink to="/register">Register here</NavLink>
          </div>
          
        </div>
      </div>
      </div>
      );
}

export default LoginView;