import promiseNoData from "../views/promiseNoData"
import WeatherView from "../views/weatherView.js"
import { useState, useEffect } from "react";
import { determineWeather} from "../utilities.js"

export default function Weather(props) {

    // This is used to make the component stateful. The upper useState() sets an empty moviePromiseState. The lower doesn't store any state information but is
    // solely used to force re-renders upon calls to the moviePromiseStateChanged function (See lecture slide 119 - 135 for further explanations of what is going on here).
    const[weatherPromiseState] = useState({});
    const[, weatherPromiseStateChanged] = useState();

    // Used to do an initial get when the Movie component is created.
    useEffect(initialGetCurrentWeather, []);

    // This callback function is used to do an initial getCurrentMovieDetails, updating the moviePromiseState.
    // This should most likely be deprecated later on.
    function initialGetCurrentWeather(){
        // Testing this with a temporary id of 500. This should of course be dynamically changeable in the final app.
        props.model.getCurrentWeather(-70, 0, weatherPromiseState, notify)
    }

    //console.log("weather props", JSON.stringify(weatherPromiseState.data.lon))

    // This function is used to notify React of changes in the moviePromiseState. It is called 
    function notify(){
        weatherPromiseStateChanged(new Object());
    }

    // *TODO* - call a function which generates a new movie ID
    function rerollClickACB(id){}
    //console.log(props.model.weatherPromiseState.data)



    // Returns either the promiseNoData function (no data, spinner image, etc) or the content defined in the MovieView.
    return (<div>{promiseNoData(weatherPromiseState) || <WeatherView weatherData={weatherPromiseState.data}/>}</div>)

}