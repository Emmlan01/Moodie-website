import { initializeApp } from "firebase/app";
import "firebase/firestore";
import {getDatabase, ref, set} from "firebase/database";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
 import mainModel from "./mainModel"
 import { getMovieDetails } from "./movieSource";




import {getAuth} from "firebase/auth";

//Our firebaseConfi
const firebaseConfig = {
  apiKey: "AIzaSyCq-pVqvKQNvuEc9VkB66-gmGKkeQwOaf4",
  authDomain: "moodie-1.firebaseapp.com",
  databaseURL: "https://moodie-1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moodie-1",
  storageBucket: "moodie-1.appspot.com",
  messagingSenderId: "132514116513",
  appId: "1:132514116513:web:10981ff700cf56a4c311e0",
  measurementId: "G-N4CHLB2DWX"
};

//This will use our config to recognize the project and initialize authentication and database modules.
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(app);

// function writeUserData(userId, email) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     email: email,
//   });
// }
const REF="HEJ";
firebase.database().ref(REF+"/test").set("duy");
firebase.database().ref(REF+"/hej").set("hej");


  function observerRecap(model) {
    function payloadLogCB(payload){console.log(payload)}
    model.addObserver(payloadLogCB)
  }

  function firebaseModelPromise(){
    function makeBigPromiseACB(firebaseData){
        if(firebaseData.val()){
            function createModelACB(){
                return new mainModel(firebaseData.val().guests)
            }
            const dishPromiseArray = Object.keys(firebaseData.val().movies).map(function makeDishPromiseCB(movieId){
                return getMovieDetails(movieId);
            });
            return Promise.all(dishPromiseArray).then(createModelACB);          //vet ej
        }else{
            return new mainModel(0);
        }
    }
    return firebase.database().ref(REF+"/model").once("value").then(makeBigPromiseACB);
}

  function updateFirebaseFromModel(model) {
    function setPayloadInFbCB(payload){
      console.info("payload", payload);
      debugger
        if(payload.num){
          console.log("hsdu", payload);
            firebase.database().ref(REF + "/model/movies").set(payload.num);
        }
    }
    model.addObserver(setPayloadInFbCB)
    return;
}

function updateModelFromFirebase(model) {
    firebase.database().ref(REF+"/model/movies").on("value", 
    function moviesChangedInFirebaseACB(firebaseData){
        model.setNumberOfMovies(firebaseData.val());
    });
} 

export {observerRecap, firebaseModelPromise,updateFirebaseFromModel, updateModelFromFirebase, app};
// export {app};

// function writeUserData(userId, email){
//   const db = getDatabase(app);
//   const reference = ref(db, 'users/' + userId);   //Create the path for each user

//   set(reference, {
//     email: email
//   });
//   }
