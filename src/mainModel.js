import { getMovieDetails } from "./movieSource.js"
import { getWeather } from './weatherSource.js'
import resolvePromise from "./resolvePromise.js"

class mainModel {

    constructor(){
        this.currentMovie = {};             // current movie ID number.
        this.currentWeatherID = "";         // current weather ID number.
        
        this.userLatitude = 59.334591;      // the users location. Default location is Stockholm's coordinates.
        this.userLongitude = 18.063240;
    }

    // Setter for currentWeatherID
    setCurrentWeatherID(ID){
        this.currentWeatherID = ID;
    }

    // This function sets the current movie ID and then calls getMovieDetails via resolvePromise which makes an API call to TMDB, fetching information about the movie. 
    getCurrentMovieDetails(id, moviePromiseState, notify) {

        if(id === undefined) return;

        if (id === this.currentMovie) return;

        this.currentMovie = id;

        resolvePromise(getMovieDetails(id), moviePromiseState, notify)
    }

    // This function calls getWeather via resolvePromise in order to fetch the current weather information from the OpenWeather API.
    getCurrentWeather(lat, lon, weatherPromiseState, notify) {

        if(lat === undefined) return;

        if(lon === undefined) return;

        resolvePromise(getWeather(lat, lon), weatherPromiseState, notify)
    }

    // This function uses navigator to get the users location. This call is asynchronous, so it might be worth considering to put this in a promise that needs to be resolved
    // before any other calls reliant on user location are made.
    async getUserLocation() {
        // Sets coordinates.
        function setPosition(position) {
            this.userLatitude = position.coords.latitude;
            this.userLongitude = position.coords.longitude;
            console.log("latitude and longtitude ", this.userLatitude, this.userLongitude);
        }

        // Check whether browser support geolocation or not. If it does, call it.
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(await setPosition.bind(this))
        }
        else{
            console.log("Geolocation not supported. Using the coordinates of Stockholm.")
            this.userLatitude = 59.334591;
            this.userLongitude = 18.063240;
        }
    }
}

export default mainModel;
