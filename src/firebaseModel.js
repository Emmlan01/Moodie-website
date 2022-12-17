import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "./firebase.js"
//import { getDishDetails } from "./dishSource";
import mainModel from "./mainModel"

firebase.initializeApp(firebaseConfig);
const REF="moodie";

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
            // const dishPromiseArray = Object.keys(firebaseData.val().dishes).map(function makeDishPromiseCB(dishId){
            //     return getDishDetails(dishId);
            // });
            // return Promise.all(dishPromiseArray).then(createModelACB);          //vet ej
            return Promise.all.then(createModelACB);
        }else{
            return new mainModel(0);
        }
        
    }
    return firebase.database().ref(REF+"/model").once("value").then(makeBigPromiseACB);
}



function updateFirebaseFromModel(model) {
    function setPayloadInFbCB(payload){
        if(payload.num){
            firebase.database().ref(REF + "/model/movies").set(payload.num);
        }
    }
    model.addObserver(setPayloadInFbCB)
    return;
}


function updateModelFromFirebase(model) {
    firebase.database().ref(REF+"/model/movies").on("value", 
    function guestsChangedInFirebaseACB(firebaseData){
        model.setNumberOfMovies(firebaseData.val());
    });
} 

export {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase};
