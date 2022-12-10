import logo from './logo.svg';
import './App.css';
import { getMovieDetails } from './movieSource.js'
import MovieModel from './movieModel';
import { getCurrentWeather } from './weatherSource.js'
import React from "react";
import {Helmet} from "react-helmet";

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
