import promiseNoData from "../views/promiseNoData"
import WeatherView from "../views/weatherView.js"
import { useState, useEffect } from "react";

export default function Weather(props) {

    console.log("shamone", props)



    // This is used to make the component stateful. The upper useState() sets an empty moviePromiseState. The lower doesn't store any state information but is
    // solely used to force re-renders upon calls to the moviePromiseStateChanged function (See lecture slide 119 - 135 for further explanations of what is going on here).
    const[weatherPromiseState] = useState({});
    const[, weatherPromiseStateChanged] = useState();


    async function componentDidMount(){
        const iconName = weatherPromiseState.weather[0].icon 
        const iconApi = await fetch('http://openweathermap.org/img/w/' + iconName + '.png')
        this.setState({
            icon : iconApi.url
        })
    }
    

    // Used to do an initial get when the Movie component is created.
    useEffect( initialGetCurrentWeather, []);

    // This callback function is used to do an initial getCurrentMovieDetails, updating the moviePromiseState.
    // This should most likely be deprecated later on.
    function initialGetCurrentWeather(){
        // Testing this with a temporary id of 500. This should of course be dynamically changeable in the final app.
        props.model.getCurrentWeather(39, 127, weatherPromiseState, notify)
    }

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