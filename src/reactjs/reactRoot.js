import React, { useEffect } from "react";
import { observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase } from "../firebaseModel.js";
import resolvePromise from "../resolvePromise.js";
import promiseNoData from "../views/promiseNoData.js";
import mainModel from "../mainModel.js";
import firebaseConfig from "../firebaseConfig.js"
import { getDishDetails } from "../dishSource";

const App = require("/src/views/app.js").default;


// Add relevant imports here 

// Define the ReactRoot component
function ReactRoot() {
    const [promiseState] = React.useState({promise: {}, data: null , error: null});
    const [, rerender] = React.useState({});

    function resolveCB() {
        resolvePromise(firebaseModelPromise(), promiseState, notifyACB);
    }

    function notifyACB() {
        console.log('hit', promiseState)
        if (promiseState.data) {           //om sann
            updateFirebaseFromModel(promiseState.data);              //Uppdaterar vi firebase från båda håller 
            updateModelFromFirebase(promiseState.data);
            rerender(new Object());
        }
    }
    useEffect(resolveCB, [])

     if (promiseState.data) {
        return <div> <App model={promiseState.data} /></div>;
    } else {
        return <div>{promiseNoData(promiseState)}</div>
    }
}

    // Export the ReactRoot component
    export default ReactRoot;