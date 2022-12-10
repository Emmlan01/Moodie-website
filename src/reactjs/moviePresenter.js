import promiseNoData from "../views/promiseNoData"
import MovieView from "../views/movieView.js"
import { useState, useEffect } from "react";

import { getMovieGenres, getMovieListByGenre } from "../movieSource";

export default function Movie(props) {

    // This is used to make the component stateful. The upper useState() sets an empty moviePromiseState. The lower doesn't store any state information but is
    // solely used to force re-renders upon calls to the moviePromiseStateChanged function (See lecture slide 119 - 135 for further explanations of what is going on here).
    const[moviePromiseState] = useState({});
    const[, moviePromiseStateChanged] = useState();

    // Used to do an initial get when the Movie component is created.
    useEffect(initialGetCurrentMovieDetails, []);

    // This callback function is used to do an initial getCurrentMovieDetails, updating the moviePromiseState.
    // This should most likely be deprecated later on.
    function initialGetCurrentMovieDetails(){
        // Testing this with a temporary id of 500. This should of course be dynamically changeable in the final app.
      
        props.model.getCurrentMovieDetails(55, moviePromiseState, notify);

        // This is just used for testing. There is a total number of 19 genres that can be used which we might as well store locally in the app so we don't
        // need to request the list from the API.
        getMovieGenres();

        // This function may be called to get a list of movies by genres. The genre list is comma separated so movies belonging to several genres may be chosen.
        // This should be relocated to a better location when the app is finished, of course.
        getMovieListByGenre("37");
    }

    // This function is used to notify React of changes in the moviePromiseState. It is called 
    function notify(){
       moviePromiseStateChanged(new Object());
    }

    // *TODO* - call a function which generates a new movie ID
    function rerollClickACB(id){
        //determineWeather(id)
    }

    // Returns either the promiseNoData function (no data, spinner image, etc) or the content defined in the MovieView.
    return (<div>{promiseNoData(moviePromiseState) || <MovieView movieData={moviePromiseState.data} clickOnReroll={rerollClickACB}/>}</div>)
}