import React, {useState, useEffect} from "react"
import SidebarView from "../views/sidebarView.js";
import promiseNoData from "../views/promiseNoData"


export default function SidebarPresenter(props){

    const [, setMovies] = React.useState();
    const[moviePromiseState] = useState({});
    const[, moviePromiseStateChanged] = useState();

    function myObserverACB(){     
        setMovies(props.model.movies);
    }
    React.useEffect(subscribeABC, []);
    function subscribeABC(){                                //VÅr component lifecycle. 
        props.model.addObserver(myObserverACB);         //Lägger till observer med antigen props av numberofguests eller dishes. ''när component is created''
        return function(){
            props.model.removeObserver(myObserverACB);          //Tar bort observer ''componed is removed, dvs clean up''
        }
    }

    function notify(){
        moviePromiseStateChanged(new Object());
     }
    
    function deleteMoviesACB(movie) {
        props.model.removeFromMovieFromList(movie)
    };

    function currentMovieACB(movies){
        console.log("test", movies, movies.id)
        props.model.getCurrentMovieDetails(55,moviePromiseState, notify)
    }

    return (<div>{promiseNoData(moviePromiseState) || <SidebarView 
                        movieData={moviePromiseState.data}
                        movies={props.model.movies}
                        deleteMovie={deleteMoviesACB}
                        currentMovie={currentMovieACB}
            />} </div>)
}