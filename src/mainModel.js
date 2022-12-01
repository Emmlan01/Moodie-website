import { getMovieDetails } from "./movieSource.js"
import { getWeather } from './weatherSource.js'
import resolvePromise from "./resolvePromise.js";

class mainModel {

    constructor(){
        this.currentMovie = {};
    }

    getCurrentMovieDetails(id, moviePromiseState, notify) {

        if(id === undefined) return;

        if (id === this.currentMovie) return;

        this.currentMovie = id;

        resolvePromise(getMovieDetails(id), moviePromiseState, notify)
    }

    getRandomMovieId() {
        
    }

    getCurrentWeather(lat, lon, weatherPromiseState, notify) {

        if(lat === undefined) return;

        if(lon === undefined) return;

        resolvePromise(getWeather(lat, lon), weatherPromiseState, notify)
    }
}

export default mainModel;
