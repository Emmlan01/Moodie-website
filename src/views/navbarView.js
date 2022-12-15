import React from "react";
import { signOut} from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate} from "react-router-dom";

const auth = getAuth();

export default
function NavbarView () {

    const navigate = useNavigate();
    const guestLoggedIn = localStorage.getItem('guestLoggedIn')

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
        console.log("signout")
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
}

   /* return(<div>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li><a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" href="#">Home</a></li>
                <li><a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" href="#">About Us</a></li>
            </ul>
            </div>
            <div>
                <button className="absolute right-0 p-2.5 mb-0.5 bg-[rgb(98,147,238)]" onClick={logOut}>
                    <p className="font-bold py-4 rounded text-white text-2xl">
                    Sign out
                    </p>
                </button>
            </div>
            </div>);*/

            return(<nav className="dark:bg-neutral-900 border-b-2 border-white fixed w-full z-20 top-0 left-0">
              
            <div className="container flex items-center justify-center mx-auto">
            <p className="absolute left-4 font-Rubik-Puddles text-gray-300 font-semibold rounded text-3xl">
                Moodie
              </p>
            <div className="grid md:flex md:w-auto md:order-1">

              <ul className="flex p-4 flex-row space-x-8 mt-0 dark:bg-neutral-900">
                <li>
                  <a href="#" className="block text-gray-300 font-semibold rounded md:dark:hover:text-white">Home</a>
                </li>
                <li>
                  <a href="#" className="block text-gray-300 font-semibold rounded md:dark:hover:text-white">About Us</a>
                </li>
                <li>
                  <a href="#" className="block text-gray-300 font-semibold rounded md:dark:hover:text-white">Previously Recommended</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>)
}