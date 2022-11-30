import promiseNoData from "../views/promiseNoData"
import MovieView from "../views/movieView.js"

export default
function Movie(props) {

    //Initially when you enter website:
    props.model.getCurrentMovieDetails(/*props.model.currentMovie*/500)

   function rerollClickACB(id) {
    /*TODO call a function which generates a new movie ID */
    

   }

    return /*promiseNoData(props.model.moviePromiseState) || */<MovieView movieData={props.model.moviePromiseState.data} clickOnReroll={rerollClickACB}/>
}