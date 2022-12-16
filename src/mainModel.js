import { getMovieDetails } from "./movieSource.js"
import { getWeather } from './weatherSource.js'
import resolvePromise from "./resolvePromise.js"

class mainModel {

    constructor(){
        this.currentMovie = {};
        this.currentWeatherID = "";
        this.userLatitude = 59.334591;
        this.userLongitude = 18.063240;
    }

    setCurrentWeatherID(ID){
        this.currentWeatherID = ID;
    }

    getCurrentMovieDetails(id, moviePromiseState, notify) {

        if(id === undefined) return;

        if (id === this.currentMovie) return;

        this.currentMovie = id;

        resolvePromise(getMovieDetails(id), moviePromiseState, notify)
    }

    getCurrentWeather(lat, lon, weatherPromiseState, notify) {

        if(lat === undefined) return;

        if(lon === undefined) return;

        console.log("fhuaeifea", lat, lon)

        resolvePromise(getWeather(lat, lon), weatherPromiseState, notify)
    }

    // This function uses navigator to get the users location. This call is asynchronous, so it might be worth considering to put this in a promise that needs to be resolved
    // before any other calls reliant on user location are made.
    getUserLocation() {
        function setPosition(position) {
            this.userLatitude = position.coords.latitude;
            this.userLongitude = position.coords.longitude;

            console.log("latitude and longtitude ", this.userLatitude, this.userLongitude);
        }

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(setPosition.bind(this))
        }
        else{
            console.log("Geolocation not supported. Using the coordinates of Stockholm.")
            this.userLatitude = 59.334591;
            this.userLongitude = 18.063240;
        }
    }
}

export default mainModel;
