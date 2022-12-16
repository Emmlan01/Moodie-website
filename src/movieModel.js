import { getMovieDetails } from "./movieSource.js"
import resolvePromise from "./resolvePromise.js";

// DEPRECATED.

class MovieModel {

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
}

export default MovieModel;
