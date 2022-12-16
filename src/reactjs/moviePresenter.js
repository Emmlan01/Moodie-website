import promiseNoData from "../views/promiseNoData"
import MovieView from "../views/movieView.js"
import { useState, useEffect } from "react";
import { rerollMovie } from "../movieSource";

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
        rerollMovieACB();
    }

    // This function is used to notify React of changes in the moviePromiseState, triggering a re-render of the component.
    function notify(){
        moviePromiseStateChanged(new Object());
    }

    // This function is used to reroll
    async function rerollMovieACB(){
        const selectables = await rerollMovie(37);                                  // This is used to do a call to find the amount of selectable pages of movies.
        const page =  Math.floor(Math.random() * selectables.total_pages);          // This is used to select a page.
        const selectableMovies = await rerollMovie(37, page);                       // This gets the selected page.
        const movie = selectableMovies.results[Math.floor(Math.random() * 20)];     // This generates a movie ID from one of the fetched movies.
        props.model.getCurrentMovieDetails(movie.id, moviePromiseState, notify);    // This finally calls getCurrentMovieDetails with the aqquired movie ID.
        
    }

    // Returns either the promiseNoData function (no data, spinner image, etc) or the content defined in the MovieView.
    return (<div>{promiseNoData(moviePromiseState) || <MovieView movieData={moviePromiseState.data} clickOnReroll={rerollMovieACB}/>}</div>)
}