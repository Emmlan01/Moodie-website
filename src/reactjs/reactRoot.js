import React, { useEffect } from "react";
import { observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase } from "../firebase.js";
import resolvePromise from "../resolvePromise.js";
import promiseNoData from "../views/promiseNoData.js";
import firebaseConfig from "../firebase.js"

const App = require("/src/views/app.js").default;


// Add relevant imports here 

// Define the ReactRoot component
function ReactRoot() {
    const [moviePromiseState] = React.useState({promise: {}, data: null , error: null});
    const [, rerender] = React.useState({});

    useEffect(resolveCB, [])
    
    function resolveCB() {
        resolvePromise(firebaseModelPromise(), moviePromiseState, notifyACB);
    }

    function notifyACB() {
        console.info('hit', moviePromiseState)
        if (moviePromiseState.data) {           //om sann
            updateFirebaseFromModel(moviePromiseState.data);              //Uppdaterar vi firebase från båda håller 
            updateModelFromFirebase(moviePromiseState.data);
            rerender(new Object());
        }
    }

     if (moviePromiseState.data) {
        return <div> <App model={moviePromiseState.data} /></div>;
    } else {
        return <div>{promiseNoData(moviePromiseState)}</div>
    }
}

    // Export the ReactRoot component
    export default ReactRoot;