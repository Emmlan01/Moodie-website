import promiseNoData from "../views/promiseNoData"
import MovieView from "../views/movieView.js"
import { useState, useEffect } from "react";
import { determineMovieGenre, rerollMovie } from "../movieSource";


import { API_KEY, BASE_URLCORD } from "../weatherConfig";

export default function Movie(props) {
    // This is used to make the component stateful. The upper useState() sets an empty moviePromiseState. The lower doesn't store any state information but is
    // solely used to force re-renders upon calls to the moviePromiseStateChanged function (See lecture slide 119 - 135 for further explanations of what is going on here).
    const[moviePromiseState] = useState({});
    const[, moviePromiseStateChanged] = useState();

    // Used to do an initial get when the Movie component is created.
    useEffect(()=>{

        const FetchWeather = async () => {
            const weatherGet = await fetch(BASE_URLCORD + props.model.userLatitude + "&lon=" + props.model.userLongitude + "&units=metric" + "&appid=" + API_KEY, {
                method: 'GET',
            })
            const json = await weatherGet.json();

            const genre = await determineMovieGenre(json.weather[0].id)
            const selectables = await rerollMovie(genre);                               // This is used to do a call to find the amount of selectable pages of movies.
            
            let page;                                                                   // This is used to select a page.
            if (selectables.total_pages>500){
                page = Math.floor(Math.random() * 499)
            }
            else {
                page =  Math.floor(Math.random() * selectables.total_pages);          
            }

            const selectableMovies = await rerollMovie(genre, page);                    // This gets the selected page.            
            const movie = selectableMovies.results[Math.floor(Math.random() * 20)];     // This generates a movie ID from one of the fetched movies.
            props.model.getCurrentMovieDetails(movie.id, moviePromiseState, notify);    // This finally calls getCurrentMovieDetails with the aqquired movie ID.
        }

        FetchWeather();
    }, []);

    // This function is used to notify React of changes in the moviePromiseState, triggering a re-render of the component.
    function notify(){
        moviePromiseStateChanged(new Object());
    }



    // This function is used to reroll movies.
    async function rerollMovieACB(){
        const genre = determineMovieGenre(props.model.currentWeatherID.data.weather[0].id) 
        const selectables = await rerollMovie(genre);                                           // This is used to do a call to find the amount of selectable pages of movies.
        let page;                                                                               // This is used to select a page.
            if (selectables.total_pages>500){
                page = Math.floor(Math.random() * 499)
            }
            else {
                page =  Math.floor(Math.random() * selectables.total_pages);          
            }         
        const selectableMovies = await rerollMovie(genre, page);                                // This gets the selected page.
        console.log("slenvsroi: ", selectables)
        const movie = selectableMovies.results[Math.floor(Math.random() * 20)];                 // This generates a movie ID from one of the fetched movies.
        props.model.getCurrentMovieDetails(movie.id, moviePromiseState, notify);                // This finally calls getCurrentMovieDetails with the aqquired movie ID.
        
    }

    // Returns either the promiseNoData function (no data, spinner image, etc) or the content defined in the MovieView.
    return (<div>{promiseNoData(moviePromiseState) || <MovieView movieData={moviePromiseState.data} clickOnReroll={rerollMovieACB}/>}</div>)
}