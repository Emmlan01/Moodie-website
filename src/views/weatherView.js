import { determineWeather, determineBackground } from "../utilities.js";
import React, { useEffect } from "react";
import { signOut } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default
  function WeatherView(props) {
  const navigate = useNavigate();
  const guestLoggedIn = localStorage.getItem('guestLoggedIn')

  //Firebase handles persistance by default. This means that we need to call this function to check wehater a user is logged out or not.
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("användare", user)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else if (guestLoggedIn === 'false') {
      // User is signed out
      // ...
      navigate("/");
    }
  });

  const logOut = () => {
    //logout function
    if (guestLoggedIn !== 'false') {
      localStorage.setItem('guestLoggedIn', 'false')
      navigate("/");
    } 
    else {
      signOut(auth).then(() => {
        console.log("test", auth)
        navigate("/");
        console.log("signed out successful")
        // Sign-out successful.
      }).catch((error) => {
        console.error(error);

        // An error happened.
      });
    }
  };

  return (

    <div>
      <div>
        {determineBackground(props.weatherData.weather[0].id)}
      </div>

      <span>

        <div className="grid place-content-center font-bold py-4 rounded text-white text-2xl">
          <p>Looks like it's currently</p>
        </div>
        <div>
          <p className="grid place-content-center font-Pacifico py-2 pb-8 rounded text-white text-4xl">
            {props.weatherData.weather[0].main}
          </p>
        </div>
        <div>
          <p className="grid place-content-center font-bold py-4 rounded text-white text-2xl">
            We therefore recommend the movie:
          </p>
        </div>
        <>
          <button className="p-2.5 mb-0.5 bg-[rgb(98,147,238)]" onClick={logOut}>
            <p className="grid place-content-center font-bold py-4 rounded text-white text-2xl">
              Sign out
            </p>
          </button>
        </>
      </span>
    </div>);
}