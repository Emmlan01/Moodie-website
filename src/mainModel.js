import { getMovieDetails } from "./movieSource.js"
import { getWeather } from './weatherSource.js'
import resolvePromise from "./resolvePromise.js"

class mainModel {

    constructor(dishArray=[]){
        this.currentMovie = {};
        this.userLatitude = "";
        this.userLongitude = "";
        this.movies = dishArray;
        this.observers = []

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
            console.log("Geolocation not supported.")
        }
    }

    //Add movies to users personal saved movie list
    addMovieToPersonalList(movieToAdd){
        function movieInListCB(movie){
            return movie.id === movieToAdd.id
        }
        if (!this.movies.find(movieInListCB)){
            this.movies= [...this.movies, movieToAdd];
            this.notifyObservers({addMovie:movieToAdd})
        }
    }

    //Removie movies from the personal movie list
    removeFromMovieFromList(movieToRemove){
        function movieInListCB(movie){
            return movie.id === movieToRemove.id
        }
        if (this.movies.find(movieInListCB)){
            function hasSameIdCB(movie){
                    return movie.id != movieToRemove.id;
            }
            this.movies = this.movies.filter(hasSameIdCB); 
            this.notifyObservers({movieRemove:movieToRemove})    
        }
    }

    setCurrentMovie(id){
        function notifyObsACB(){
            console.log("HEJ");
            this.notifyObservers({})
        }
        console.log("majs", id, this.currentMovie);

        if (id !==null && id !== this.currentMovie) {
            console.log("mafgtijs", id, this.currentMovie);
            this.currentMovie = id;
            resolvePromise(getMovieDetails(id), this.currentMoviePromiseState, notifyObsACB.bind(this))
            this.notifyObservers({currentMovie:id})
        }      
    }

    addObserver(callback){
        this.observers = [...this.observers, callback]
    }

    removeObserver(callback){
        function filterObserversCB(obsCallback){
            if (obsCallback = callback){return false}
        }
        this.observers = this.observers.filter(filterObserversCB)
    }

    notifyObservers(payload){
        function invokeObserverCB(obs){obs(payload)}
        try{
        this.observers.forEach(invokeObserverCB)
        }catch(err){console.log(err)}
    }

}

export default mainModel;
