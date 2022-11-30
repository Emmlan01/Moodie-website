import promiseNoData from "../views/promiseNoData"
import MovieView from "../views/movieView.js"

import { useState } from "react";

export default
function Movie(props) {

    //const moviePromiseState = {};

    //Initially when you enter website:
    const[moviePromiseState] = useState({});
    const[, moviePromiseStateChanged] = useState();
    //console.log("ffisefn", moviePromiseState);

    function notify(){
        //console.log("here be the promiseState in notify", moviePromiseState);
        moviePromiseStateChanged(new Object());
    }

    props.model.getCurrentMovieDetails(/**/500, moviePromiseState, notify);

    function rerollClickACB(id) {
    /*TODO call a function which generates a new movie ID */
    

   }

    console.log("just before view");
    console.log(moviePromiseState);
    return promiseNoData(moviePromiseState) || <MovieView movieData={moviePromiseState.data} clickOnReroll={rerollClickACB}/>
}