import { getMovieDetails } from "./movieSource.js"
import resolvePromise from "./resolvePromise.js";

class MovieModel {

    constructor(){
        this.moviePromiseState = {};
        this.currentMovie = {};
    }

    getCurrentMovieDetails(id) {

        if(id === undefined) return;

        if (id === this.currentMovie) return;

        this.currentMovie = id;

        resolvePromise(getMovieDetails(id), this.moviePromiseState)
    }
}

export default MovieModel;
