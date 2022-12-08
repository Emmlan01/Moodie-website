import logo from './logo.svg';
import './App.css';
import { getMovieDetails } from './movieSource.js'
import MovieModel from './movieModel';
import { getCurrentWeather } from './weatherSource.js'
import firebase from "firebase/app";
import "firebase/database";

const Movie=require("./reactjs/moviePresenter.js").default;
const Weather=require("./reactjs/weatherPresenter.js").default;

export default
function App(props) {

  return (
    <div className="flexParent">
          <Movie model={props.model}/>   
          <Weather model={props.model}/> 
    </div>
   );
}
